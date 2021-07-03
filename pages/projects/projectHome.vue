<template>
  <v-container>
    <div class="project-view">
      <p>プロジェクトの名前：{{ title }}</p>
      <p>プロジェクトの詳細： {{ detail }}</p>
      <p>プロジェクトの開始日： {{ start }}</p>
      <p>プロジェクトの終了日： {{ finish }}</p>
    </div>
    <div class="addTask-view">
      <v-row justify="center">
        <v-col sm="12">
          <v-row>
            <v-col>
              <v-row>
                <v-col sm="12">
                  <v-form
                    ref="register_form"
                    v-model="register_valid"
                    lazy-validation
                  >
                    <v-text-field
                      v-model="task_title"
                      label="タスクのタイトル"
                      required
                      validate-on-blur
                    />
                    <v-text-field
                      v-model="task_detail"
                      label="タスクの詳細"
                      required
                      validate-on-blur
                    />
                    <v-row
                      ><v-col cols="6"
                        ><v-date-picker
                          v-model="start_date"
                          locale="ja"
                          min="2021-07-01"
                          max="2022-07-01"
                        >
                        </v-date-picker
                      ></v-col>
                      <v-col cols="6"
                        ><v-date-picker
                          v-model="finish_date"
                          locale="ja"
                          min="2021-07-01"
                          max="2022-07-01"
                        >
                        </v-date-picker>
                      </v-col>
                    </v-row>

                    <div id="register-btn">
                      <v-btn
                        :disabled="!register_valid"
                        color="#2BB7A4"
                        class="mr-4 white--text"
                        on-click="alert('追加完了');"
                        @click="task_add()"
                      >
                        このタスクを追加
                      </v-btn>
                    </div>
                  </v-form>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
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
      task_title: '',
      task_detail: '',
      start_date: '',
      finish_date: '',
      register_valid: true,
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
  methods: {
    task_add() {
      const db = firebase.firestore();
      const dbTasks = db
        .collection('projects')
        .doc('6FwU618MKwoT9Quvz72o')
        .collection('tasks');
      const timestamp = firebase.firestore.Timestamp.now();
      dbTasks
        .set({
          title: this.taska_title,
          detail: this.task_detail,
          start: this.start_date,
          finish: this.finish_date,
          createdAt: timestamp,
          updatedAt: timestamp,
        })
        .then(() => {
          this.task_title = '';
          this.task_detail = '';
          this.start_date = '';
          this.finish_date = '';
          console.log('タスクを登録しました');
        });
    },
  },
};
</script>

<style>
.project-view {
  margin-top: 100px;
}
</style>
