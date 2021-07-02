<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="12" md="5">
        <h2 class="text-center subtitle-1 font-weight-bold mb-2">
          メールアドレスでアカウント登録
        </h2>
        <v-row>
          <v-col>
            <v-tabs
              v-model="tab"
              background-color="transparent"
              color="#2BB7A4"
              grow
              class="mb-3"
            >
              <v-tab to="/login">ログイン</v-tab>
              <v-tab to="/register">アカウント登録</v-tab>
            </v-tabs>

            <v-row>
              <v-col sm="12">
                <v-card flat>
                  <v-card-text class="pa-0">
                    <v-form
                      ref="register_form"
                      v-model="register_valid"
                      lazy-validation
                    >
                      <v-text-field
                        v-model="register_email"
                        label="メールアドレス"
                        :rules="emailRules"
                        required
                        validate-on-blur
                      />
                      <v-text-field
                        v-model="register_name"
                        label="ユーザー名"
                        :rules="nameRules"
                        required
                        validate-on-blur
                      />

                      <v-text-field
                        ref="register_password"
                        v-model="register_password"
                        label="パスワード"
                        required
                        :append-icon="
                          show_registerPassword ? 'mdi-eye' : 'mdi-eye-off'
                        "
                        :type="show_registerPassword ? 'text' : 'password'"
                        :rules="register_passwordRules"
                        validate-on-blur
                        loading
                        @click:append="
                          show_registerPassword = !show_registerPassword
                        "
                      >
                        <template #progress>
                          <v-progress-linear absolute height="2" />
                        </template>
                      </v-text-field>
                      <v-text-field
                        v-model="register_password_again"
                        label="パスワード（確認）"
                        required
                        :append-icon="
                          show_registerPassword ? 'mdi-eye' : 'mdi-eye-off'
                        "
                        :type="show_registerPassword ? 'text' : 'password'"
                        validate-on-blur
                        :rules="register_passwordAgainRules"
                        @click:append="
                          show_registerPassword = !show_registerPassword
                        "
                      />
                      <v-alert v-if="registerErrorMsg" dense text type="error">
                        {{ registerErrorMsg }}
                      </v-alert>
                      <div id="register-btn">
                        <v-btn
                          :disabled="!register_valid"
                          color="#2BB7A4"
                          class="mr-4 white--text"
                          @click="email_register"
                        >
                          登録
                        </v-btn>
                      </div>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  //   layout: 'signin',

  layout({ store }) {
    return store.state.loggedIn ? 'default' : 'home';
  },
  data() {
    return {
      registerErrorMsg: '',
      tab: null,
      register_valid: true,
      register_email: '',
      register_name: '',
      register_password: '',
      register_password_again: '',
      emailRules: [
        (v) => {
          if (v) {
            return (
              /.+@.+\..+/.test(v) || '有効なメールアドレスを入力してください'
            );
          } else {
            return true;
          }
        },
      ],
      register_passwordRules: [(v) => !!v || 'パスワードを入力してください'],
      register_passwordAgainRules: [
        (v) => {
          if (v) {
            return (
              this.$refs.register_password.value === v ||
              'パスワードと一致しません'
            );
          } else {
            return true;
          }
        },
      ],
      nameRules: [(v) => !!v || 'ユーザー名を入力してください'],
      show_registerPassword: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    email_register() {
      if (this.$refs.register_form.validate()) {
        this.$store
          .dispatch('email_register', {
            email: this.register_email,
            password: this.register_password,
            name: this.register_name,
            thumbnail: this.register_thumbnail,
          })
          .then(() => {
            this.register_email = '';
            this.register_password = '';
            this.$router.push({
              name: 'index',
              params: {
                dashboard_msg: true,
                dashboard_msg_text: 'アカウントの登録が完了しました。',
              },
            });
          })
          .catch((err) => {
            console.log(err);
            if (err.code === 'auth/email-already-in-use') {
              this.registerErrorMsg =
                'このメールアドレスは既に登録されています。';
            } else if (err.code === 'auth/invalid-email') {
              this.registerErrorMsg = '無効なメールアドレスです。';
            } else {
              this.registerErrorMsg = 'エラーにより登録できませんでした。';
            }
          });
      }
    },
  },
};
</script>
