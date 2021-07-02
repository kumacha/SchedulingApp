<template>
  <div class="register">
    // アカウントの登録フォーム
    <form class="form" @submit.prevent>
      <label class="label">
        <span class="label"> email </span>
        <input v-model="email" class="input" type="text" />
      </label>
      <label class="label">
        <span class="label"> password </span>
        <input v-model="password" class="input" type="password" />
      </label>
      <label class="label">
        <span class="label"> name </span>
        <input v-model="updateName" class="input" type="text" />
      </label>
      <label class="label">
        <span class="label"> image </span>
        <input class="input" type="file" @change="changeImg" />
      </label>
      // 選択した画像のプレビュー
      <v-img :src="postData.thumbnail" alt="" max-width="200px"></v-img>
      <button class="button" type="submit" @click="register">Register</button>
    </form>
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
      thumbnail: '',
      postData: {
        thumbnail: '',
      },
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    // アカウントの登録
    register(user) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          user = firebase.auth().currentUser;
          console.log(user);
          const db = firebase.firestore();
          const timestamp = firebase.firestore.Timestamp.now();
          const userData = {
            uid: user.uid,
            name: this.name,
            email: user.email,
            password: this.password,
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
        })
        .catch(function (error) {
          console.log({ code: error.code, message: error.message });
        });
    },
    // ここは選択した画像のプレビューをするだけ
    changeImg(e) {
      this.thumbnail = e.target.files[0];
      if (this.thumbnail) {
        const reader = new FileReader();
        reader.readAsDataURL(this.thumbnail);
        reader.onload = () => {
          this.postData.thumbnail = reader.result + '';
        };
      }
    },
  },
};
</script>
<style>
.register {
  margin-top: 100px;
}
</style>
