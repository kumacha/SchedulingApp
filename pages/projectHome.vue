<template>
  <div>
    <v-card-title>プロジェクト名：{{ item.name }}</v-card-title>
    <v-card-suctitle>プロジェクトID：{{ item.id }}</v-card-suctitle>
    <v-card-subtitle>開始：{{ item.start }}</v-card-subtitle>
    <v-card-sybtitle>終了予定：{{ item.finish }}</v-card-sybtitle>
    <nuxt-link to="/addSchedule">タスクを追加する</nuxt-link>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase';
export default {
  data: () => ({}),
  created() {
    this.fetchDataList();
  },
  methods: {
    fetchDataList() {
      const resultItems = [];
      const vm = this;
      firebase
        .firestore()
        .collection('projects')
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            data.docID = doc.id;
            resultItems.push(data);
          });
          vm.users = resultItems;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
