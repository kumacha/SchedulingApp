<template>
  <div class="addschedule-view">
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
                      v-model="schedule_title"
                      label="プロジェクトのタイトル"
                      required
                      validate-on-blur
                    />
                    <v-text-field
                      v-model="schedule_detail"
                      label="プロジェクトの詳細"
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
                        @click="project_add()"
                      >
                        プロジェクト登録
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
      schedule_title: '',
      schedule_detail: '',
      start_date: '',
      finish_date: '',
      register_valid: true,
    };
  },
  methods: {
    project_add() {
      const db = firebase.firestore();
      const dbProjects = db.collection('projects');
      const timestamp = firebase.firestore.Timestamp.now();
      dbProjects
        .add({
          title: this.schedule_title,
          detail: this.schedule_detail,
          start: this.start_date,
          finish: this.finish_date,
          createdAt: timestamp,
          updateAt: timestamp,
        })
        .then(() => {
          this.schedule_title = '';
          this.schedule_detail = '';
          this.start_date = '';
          this.finish_date = '';
          console.log('プロジェクトを登録しました');
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
