<template>
  <v-container>
    <v-form ref="login_form" v-model="login_valid" lazy-validation>
      <v-text-field v-model="login_email" label="メールアドレス" required />
      <v-text-field
        v-model="login_password"
        label="パスワード"
        required
        :append-icon="show_loginpassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show_loginpassword ? 'text' : 'password'"
        @click:append="show_loginpassword = !show_loginpassword"
      />
      <v-btn
        :disabled="!login_valid"
        color="#2BB7A4"
        class="my-4 white--text"
        justify="center"
        @click="emailLogin"
      >
        ログイン
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import firebase from '~/plugins/firebase';
export default {
  layout({ store }) {
    return store.state.loggedIn ? 'default' : 'home';
  },
  data() {
    return {
      login_email: '',
      login_password: '',
      login_valid: true,
      show_loginpassword: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    emailLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.login_email, this.login_password)
        .then((user) => {
          alert('ログイン成功');
        });
    },
  },
};
</script>
