<template>
  <div class="title">
    <v-card-subtitle>プロジェクトID：{{ project.id }}</v-card-subtitle>
    <v-card-subtitle>プロジェクト名：{{ project.name }}</v-card-subtitle>
    <v-card-suctitle>プロジェクトID：{{ project.id }}</v-card-suctitle>
    <v-card-subtitle>開始：{{ project.start }}</v-card-subtitle>
    <v-card-sybtitle>終了予定：{{ project.finish }}</v-card-sybtitle>
    <v-spacer></v-spacer>
    <nuxt-link to="/addSchedule">タスクを追加する</nuxt-link>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase';
import 'firebase/firestore';
export default {
  name: 'Title',
  data() {
    return {
      project: [],
      db: null,
    };
  },
  created() {
    this.db = firebase.firestore();
    this.syncProject();
  },
  methods: {
    syncProject() {
      const id = 'aaa111';
      this.projects.splice(0);
      this.db
        .collection('projects')
        .where('id', '==', id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data().body);
            this.projects.push(doc.data());
          });
        }, this.projects)
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
