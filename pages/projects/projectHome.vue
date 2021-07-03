<template>
  <div class="project-view">
    <p>プロジェクトの名前：{{ title }}</p>
    <p>プロジェクトの詳細： {{ detail }}</p>
    <p>プロジェクトの開始日： {{ start }}</p>
    <p>プロジェクトの終了日： {{ finish }}</p>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase';
export default {
  data() {
    return {
      title: '',
      detail: '',
      start: '',
      finish: '',
      projects: [],
    };
  },

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        const db = firebase.firestore();
        const dbProject = db
          .collection('projects')
          .where('addUserId', '==', uid);
        dbProject.get().then((query) => {
          query.forEach((doc) => {
            const projects = doc.data();
            this.projects = [
              ...this.projects,
              {
                title: projects.title,
                detail: projects.detail,
                start: projects.start,
                finish: projects.finish,
                createdAt: projects.createdAt,
                updatedAt: projects.updatedAt,
              },
            ];
            console.log(this.projects);
            this.title = this.projects[0].title;
            this.detail = this.projects[0].detail;
            this.start = this.projects[0].start;
            this.finish = this.projects[0].finish;
          });
        });
      }
    });
  },
};
</script>
<style>
.project-view {
  margin-top: 100px;
}
</style>
