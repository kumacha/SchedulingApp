<template>
  <div>
    <v-bottom-navigation color="#2BB7A4" fixed>
      <v-btn to="/">
        <span>ホーム</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn>
        <span>スケジュール</span>
        <v-icon>mdi-calendar-clock</v-icon>
      </v-btn>
      <v-btn>
        <span>質問</span>
        <v-icon>mdi-message-question</v-icon>
      </v-btn>
      <v-btn>
        <span>アラート</span>
        <v-icon>mdi-alarm</v-icon>
      </v-btn>
      <v-btn>
        <span>プロフィール</span>
        <v-icon>mdi-account-cog-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {};
</script>
