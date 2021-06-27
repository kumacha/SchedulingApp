<template>
  <v-container>
    <v-row wrap justify="center" align="center">
      <v-col>
        <p class="text-center">ログアウトはコチラから。</p>
        <div class="pa-5">
          <v-btn block outlined color="#2BB7A4" @click="signOut">
            ログアウト
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  methods: {
    signOut() {
      this.$store
        .dispatch('signOut')
        .then(() => {
          this.$router.push({
            name: 'login',
          });
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>
<style scoped></style>
