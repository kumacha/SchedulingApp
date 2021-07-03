import firebase from '~/plugins/firebase';

export const state = () => ({
  user: {
    uid: '',
    email: '',
    name: '',
    photoURL: '',
  },
  loggedIn: false,
});

export const getters = {
  user(state) {
    return state.user;
  },
};

export const actions = {
  // ログイン処理
  email_login({ dispatch }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        dispatch('checkLogin');
        console.log(state.loggedIn);
        state.loggedIn = true;
      })
      .catch((error) => {
        alert(error);
      });
  },
  // ログアウト処理
  signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('ログアウトしました。');
      })
      .catch((error) => {
        console.log(error);
      });
  },

  checkLogin({ commit }) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
        commit('getData', {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          photoURL: user.photoURL,
        });
      }
    });
  },

  // アカウント登録
  email_register({ dispatch }, payload) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        user = firebase.auth().currentUser;
        console.log(user);
        const db = firebase.firestore();
        const timestamp = firebase.firestore.Timestamp.now();
        const userData = {
          uid: user.uid,
          name: payload.name,
          email: user.email,
          password: payload.password,
          createdAt: timestamp,
          updatedAt: timestamp,
        };
        db.collection('users')
          .doc(user.uid)
          .set(userData)
          .then(() => {
            console.log('DBに個人データ入れました。');
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(state.loggedIn);
        state.loggedIn = true;
      })
      .catch(function (error) {
        console.log({ code: error.code, message: error.message });
      });
    // 以下プロフィール画像のやつ
    // const storage = firebase.storage();
    // const storageRef = storage.ref().child('profile.png');
    // storageRef
    //   .put(payload.thumbnail)
    //   .then((res) => console.log(res))
    //   .catch((error) => console.log(error));
  },

  // アップデート
  update({ context }, name) {
    // const storage = firebase.storage();
    // const storageRef = storage.ref().child('profile.png');
    // storageRef.getDownloadURL().then((res) => {
    //   console.log(res);
    //   firebase.auth().currentUser.updateProfile({
    //     photoURL: res,
    //   });
    // });
    firebase
      .auth()
      .currentUser.updateProfile({
        displayName: name,
      })
      .then(() => {
        console.log('Update successful');
        console.log(name);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
export const mutations = {
  getData(state, user) {
    state.user = user;
  },
};
