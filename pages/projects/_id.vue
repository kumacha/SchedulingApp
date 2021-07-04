<template>
  <v-container>
    <div>
      <p>このページの存在に気づきましたか。あなたDeveloperですか？</p>
      <h1>projectsページ</h1>
      <p>この「{{ id }}」のページだよ！</p>
      <div class="project-view">
        <p>プロジェクトの名前：{{ title }}</p>
        <p>プロジェクトの詳細：{{ detail }}</p>
        <p>プロジェクトの開始日：{{ start }}</p>
        <p>プロジェクトの終了日：{{ finish }}</p>
        <p>プロジェクトの作成タイムスタンプ：{{ createdAt }}</p>
        <p>プロジェクトの更新タイムスタンプ：{{ updatedAt }}</p>
        <p>プロジェクト参加中のユーザーID：{{ joinUserId }}</p>
      </div>
    </div>
    <div class="addTask-view">
      <v-row
        ><v-col>
          <v-form
            ><v-text-field
              v-model="invite_email"
              label="招待する人のメアド"
              required
            ></v-text-field
          ></v-form> </v-col
        ><v-col><v-btn @click="invite()">追加ボタン</v-btn></v-col></v-row
      >
      <v-row justify="center">
        <v-col sm="12">
          <v-row>
            <v-col>
              <v-row>
                <v-col sm="12">
                  <v-form ref="register_form" lazy-validation>
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
                        </v-date-picker> </v-col
                    ></v-row>

                    <div id="register-btn">
                      <v-btn
                        color="#2BB7A4"
                        class="mr-4 white--text"
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
      id: this.$route.params.id,
      title: '',
      detail: '',
      start: '',
      finish: '',
      createdAt: '',
      updatedAt: '',
      joinUserId: '',
      projects: [],
      task_title: '',
      task_detail: '',
      start_date: '',
      finish_date: '',
      invite_email: '',
      inviteds: [],
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const db = firebase.firestore();
        const dbProject = db
          .collection('projects')
          .where('linkId', '==', this.$route.params.id);
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
            this.createdAt = this.projects[0].createdAt;
            this.updatedAt = this.projects[0].updatedAt;
            this.joinUserId = this.projects[0].joinUserId;
          });
        });
      }
    });
  },
  methods: {
    task_add() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const uid = user.uid;
          const db = firebase.firestore();
          const dbTasks = db
            .collection('projects')
            .doc(this.$route.params.id)
            .collection('tasks');
          const timestamp = firebase.firestore.Timestamp.now();
          dbTasks
            .add({
              title: this.task_title,
              detail: this.task_detail,
              start: this.start_date,
              finish: this.finish_date,
              addUser: uid,
              createdAt: timestamp,
              updateAt: timestamp,
            })
            .then(() => {
              this.task_title = '';
              this.task_detail = '';
              this.start_date = '';
              this.finish_date = '';
              alert('タスクを登録しました');
            });
        }
      });
    },
    invite() {
      console.log(this.invite_email);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const db = firebase.firestore();
          const user = db
            .collection('users')
            .where('email', '==', this.invite_email);
          user.get().then((query) => {
            query.forEach((doc) => {
              const users = doc.data();
              const ref = db.collection('projects').doc(this.$route.params.id);
              const timestamp = firebase.firestore.Timestamp.now();
              ref
                .update({
                  joinUserId: firebase.firestore.FieldValue.arrayUnion(
                    users.uid
                  ),
                  updateAt: timestamp,
                })
                .then(() => {
                  this.invite_email = '';
                  alert('ユーザーをプロジェクトに招待しました。');
                });
              console.log(users.uid);
            });
          });
          console.log(this.inviteds);
        }
      });
    },
  },
};
</script>
