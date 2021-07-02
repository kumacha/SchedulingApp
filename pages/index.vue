<template>
  <div class="page">
    <p>//Vuexのデータ</p>
    <p>user.uid: {{ user.uid }}</p>
    <p>user.email: {{ user.email }}</p>
    <p>user.name: {{ user.name }}</p>
    <img :src="user.photoURL" alt="" />
    <p>//FireStoreのデータ</p>
    <p>{{ profiles[0] }}</p>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase';
export default {
  data() {
    return {
      email: '',
      password: '',
      updateName: '',
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
    console.log(process.env.API_KEY);
  },
  mounted() {
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
            console.log(this.profiles);
          });
        });
      }
    });
  },
  methods: {
    // ここで取得したメアドとパスワードを引数にvuex内のログイン処理を行う
    login(email, password) {
      this.$store.dispatch('email_login', {
        email: this.email,
        password: this.password,
      });
    },
    update() {
      this.$store.dispatch('update', this.updateName);
    },
  },
};
</script>
<style>
.page {
  margin-top: 100px;
}
</style>
