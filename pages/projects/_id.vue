<template>
  <div>
    <h1>projectsページ</h1>
    <p>この「{{ id }}」のページだよ！</p>
    <p>このページの存在に気づきましたか。あなたDeveloperですか？</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>
