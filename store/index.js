import firebase from '~/plugins/firebase';
export const strict = false;

export const state = () => ({
  user: null,
  loggedIn: false,
});

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
};

export const actions = {
  signUp({ commit }, { email, password }) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },

  signInWithEmail({ commit }, { email, password }) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  signOut() {
    return firebase.auth().signOut();
  },
};

export const getters = {
  user(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return !!state.user;
  },
};
