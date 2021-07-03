<template>
  <div class="addTask-view">
    <v-container>
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
                        </v-date-picker> </v-col
                    ></v-row>

                    <div id="register-btn">
                      <v-btn
                        :disabled="!register_valid"
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
    </v-container>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase';
export default {
  data() {
    return {
      task_title: '',
      task_detail: '',
      start_date: '',
      finish_date: '',
      register_valid: true,
    };
  },
  methods: {
    task_add() {
      const db = firebase.firestore();
      const dbTasks = db
        .collection('projects')
        .document('5UHuWCdbvuIyNXtMlOO3')
        .collection('tasks');
      const timestamp = firebase.firestore.Timestamp.now();
      firebase.auth().onAuthStateChanged((user) => {
        dbTasks
          .add({
            title: this.task_title,
            detail: this.task_detail,
            start: this.start_date,
            finish: this.finish_date,
            createdAt: timestamp,
            updateAt: timestamp,
          })
          .then(() => {
            this.task_title = '';
            this.task_detail = '';
            this.start_date = '';
            this.finish_date = '';
            console.log('タスクを登録しました');
          });
      });
    },
  },
};
</script>

<style>
.addschedule-view {
  margin-top: 100px;
}
</style>
