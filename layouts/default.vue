<template>
  <v-app dark>
    <login-header />
    <v-container>
      <nuxt />
    </v-container>
    <!-- <my-footer v-if="!$store.state.loggedIn" /> -->
  </v-app>
</template>

<script>
import loginHeader from '~/components/header.vue';
// import myFooter from '~/components/footer.vue';
export default {
  components: {
    loginHeader,
    // myFooter,
  },
};
</script>
<style>
.v-application--wrap {
  min-height: 0%;
}
element.style {
  padding: 0px !important;
}
</style>
