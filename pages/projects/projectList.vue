<template>
  <v-container>
    <div class="projects-view">
      <v-row> <h1>あなたが所属しているプロジェクト一覧</h1></v-row>
      <v-row>
        <v-col v-for="(project, index) in projects" :key="index" cols="12">
          <v-card
            elevation="2"
            :to="{ name: 'projects-id', params: { id: project.linkId } }"
            ><v-card-title class="member-title" v-text="project.title">
            </v-card-title>
            <v-card-subtitle v-text="project.detail"> </v-card-subtitle
          ></v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
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
          .where('joinUserId', 'array-contains', uid);
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
                joinUserId: projects.joinUserId,
                linkId: projects.linkId,
              },
            ];
            this.title = this.projects[0].title;
            this.detail = this.projects[0].detail;
            this.start = this.projects[0].start;
            this.finish = this.projects[0].finish;
          });
        });
      }
    });
  },
  methods: {
    toProject() {
      this.$router.push(`/project/${this.project.joinUserId}`);
    },
  },
};
</script>
<style>
.project-view {
  margin-top: 100px;
}
</style>
