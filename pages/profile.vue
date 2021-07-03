<template>
  <div class="page">
    <!-- <p>//Vuexのデータ</p>
    <p>user.uid: {{ profiles[0].uid }}</p>
    <p>user.email: {{ profiles[0].email }}</p>
    <p>user.name: {{ profiles[0].name }}</p>

    <p>//FireStoreのデータ</p> -->
    <p>ユーザーID:{{ uid }}</p>
    <p>名前:{{ name }}</p>
    <p>email:{{ email }}</p>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase';
export default {
  data() {
    return {
      uid: '',
      name: '',
      email: '',
      profiles: [],
    };
  },
  computed: {
    // ユーザーの状態管理を引っ張ってます。
    user() {
      return this.$store.getters.user;
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        const db = firebase.firestore();
        const dbUser = db.collection('users').where('uid', '==', uid);
        dbUser.get().then((query) => {
          query.forEach((doc) => {
            const users = doc.data();
            this.profiles = [
              ...this.profiles,
              {
                uid: users.uid,
                name: users.name,
                email: users.email,
                password: users.password,
                createdAt: users.createdAt,
                updatedAt: users.updatedAt,
              },
            ];
            this.uid = this.profiles[0].uid;
            this.name = this.profiles[0].name;
            this.email = this.profiles[0].email;
          });
        });
      }
    });
  },
};
</script>
<style>
.page {
  margin-top: 100px;
}
</style>
