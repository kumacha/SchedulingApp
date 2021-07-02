const functions = require('firebase-functions');

const { Nuxt } = require('nuxt');

const nuxt = new Nuxt({
  buildDir: 'ssr',
  dev: false,
});
exports.ssr = functions.https.onRequest(async (req, res) => {
  await nuxt.ready();
  res.send('Hello from Firebase!');
  return nuxt.render(req, res);
});
