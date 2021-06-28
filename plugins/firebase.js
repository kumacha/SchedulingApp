import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDexdWnmXyiDRxdrTcvsgD89McyIKYu_cc',
  authDomain: 'engineermatchingapp.firebaseapp.com',
  projectId: 'engineermatchingapp',
  storageBucket: 'engineermatchingapp.appspot.com',
  messagingSenderId: '459753463999',
  appId: '1:459753463999:web:39663ed87847e93392660a',
  measurementId: 'G-LEBPX5HSHL',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.firestore();
}
export const auth = firebase.auth;
export default firebase;
