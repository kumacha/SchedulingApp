<template>
  <div class="page">
    <v-card class="mx-auto asa" max-width="320" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            スケジュール作成
          </v-list-item-title>
          <v-list-item-subtitle>
            スケジュールの作成はこちらから</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text to="/projects/makeProject">click</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="mx-auto asa2" max-width="320" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            タスク登録
          </v-list-item-title>
          <v-list-item-subtitle> タスクの登録はこちらから</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text to="/projects/addTask">click</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<style>
.page {
  margin-top: 50px;
  background-image: url('~@/static/bear.jpg');
  width: 130vw;
  height: 200vh;
}
.title {
  position: absolute;
  top: 50px;
  left: 55px;
  font-size: 4rem !important;
  color: white;
}
.asa {
  position: absolute;
  left: 750px;
  top: 130px;
}
.asa2 {
  position: absolute;
  left: 750px;
  top: 280px;
}
</style>
