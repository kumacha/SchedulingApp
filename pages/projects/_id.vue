<template>
  <v-container>
    <div class="overlap">
      <div class="home">
        <v-card class="mx-auto" max-width="600px">
          <v-card-text>
            <p class="text-h5 text--primary">プロジェクト：{{ title }}</p>
            <div>残り時間：2日15時間36分</div>
          </v-card-text>
        </v-card>
        <v-simple-table dense class="table">
          <template #default>
            <thead>
              <tr>
                <th class="text-left">スケジュール一覧表</th>
                <th class="text-left">進捗(百分率)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in schedule" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!-- <div class="alart">
        <v-alert type="error" max-width="300px">
          Aさんが助けを求めています。
        </v-alert>
      </div> -->
        <div id="prog">
          <p class="underway1">{{ number.progress }}</p>
          <div v-if="number.progress == 10">
            <img class="chck check" src="/peo_def.png" />
          </div>
          <div v-else-if="number.progress == 20">
            <img class="chck check2" src="/peo_def.png" />
          </div>
          <div v-else-if="number.progress == 30">
            <img class="chck check3" src="/peo_def.png" />
          </div>
          <div v-else-if="number.progress == 40">
            <img class="chck check4" src="/peo_def.png" />
          </div>
          <div v-else-if="number.progress == 50">
            <img class="chck check5" src="/peo_def.png" />
          </div>
          <div v-else-if="number.progress == 60">
            <img class="chck check6" src="/peo_def.png" />
          </div>
          <div v-else-if="number.progress == 70">
            <img class="chck check7" src="/peo_def.png" />
          </div>
          <div v-else-if="number.progress == 80">
            <img class="chck check8" src="/peo_def.png" />
          </div>
          <div v-else-if="number.progress == 90">
            <img class="chck check9" src="/peo_def.png" />
          </div>
          <div v-else-if="number.progress == 100">
            <img class="chck check10" src="/peo_clear.png" />
          </div>
          <div v-else>
            <img class="chck check2" src="/peo_help2.png" />
          </div>
        </div>
        <div id="prog2">
          <p class="underway2">{{ number2.progress2 }}</p>
          <div v-if="number2.progress2 == 10">
            <img class="chck2 check" src="/peo_def.png" />
          </div>
          <div v-else-if="number2.progress2 == 20">
            <img class="chck2 check2" src="/peo_def.png" />
          </div>
          <div v-else-if="number2.progress2 == 30">
            <img class="chck2 check3" src="/peo_def.png" />
          </div>
          <div v-else-if="number2.progress2 == 40">
            <img class="chck2 check4" src="/peo_def.png" />
          </div>
          <div v-else-if="number2.progress2 == 50">
            <img class="chck2 check5" src="/peo_def.png" />
          </div>
          <div v-else-if="number2.progress2 == 60">
            <img class="chck2 check6" src="/peo_def.png" />
          </div>
          <div v-else-if="number2.progress2 == 70">
            <img class="chck2 check7" src="/peo_def.png" />
          </div>
          <div v-else-if="number2.progress2 == 80">
            <img class="chck2 check8" src="/peo_def.png" />
          </div>
          <div v-else-if="number2.progress2 == 90">
            <img class="chck2 check9" src="/peo_def.png" />
          </div>
          <div v-else-if="number2.progress2 == 100">
            <img class="chck2 check10" src="/peo_clear.png" />
          </div>
          <div v-else>
            <img class="chck2 check2" src="/peo_help2.png" />
          </div>
        </div>
        <div id="prog3">
          <p class="underway3">{{ number3.progress3 }}</p>
          <div v-if="number3.progress3 == 10">
            <img class="chck3 check" src="/peo_def.png" />
          </div>
          <div v-else-if="number3.progress3 == 20">
            <img class="chck3 check2" src="/peo_def.png" />
          </div>
          <div v-else-if="number3.progress3 == 30">
            <img class="chck3 check3" src="/peo_def.png" />
          </div>
          <div v-else-if="number3.progress3 == 40">
            <img class="chck3 check4" src="/peo_def.png" />
          </div>
          <div v-else-if="number3.progress3 == 50">
            <img class="chck3 check5" src="/peo_def.png" />
          </div>
          <div v-else-if="number3.progress3 == 60">
            <img class="chck3 check6" src="/peo_def.png" />
          </div>
          <div v-else-if="number3.progress3 == 70">
            <img class="chck3 check7" src="/peo_def.png" />
          </div>
          <div v-else-if="number3.progress3 == 80">
            <img class="chck3 check8" src="/peo_def.png" />
          </div>
          <div v-else-if="number3.progress3 == 90">
            <img class="chck3 check9" src="/peo_def.png" />
          </div>
          <div v-else-if="number3.progress3 == 100">
            <img class="chck3 check10" src="/peo_clear.png" />
          </div>
          <div v-else>
            <img class="chck3 check2" src="/peo_help2.png" />
          </div>
        </div>
        <div id="prog4">
          <p class="underway4">{{ number4.progress4 }}</p>
          <div v-if="number4.progress4 == 10">
            <img class="chck4 check" src="/peo_def.png" />
          </div>
          <div v-else-if="number4.progress4 == 20">
            <img class="chck4 check2" src="/peo_def.png" />
          </div>
          <div v-else-if="number4.progress4 == 30">
            <img class="chck4 check3" src="/peo_def.png" />
          </div>
          <div v-else-if="number4.progress4 == 40">
            <img class="chck4 check4" src="/peo_def.png" />
          </div>
          <div v-else-if="number4.progress4 == 50">
            <img class="chck4 check5" src="/peo_def.png" />
          </div>
          <div v-else-if="number4.progress4 == 60">
            <img class="chck4 check6" src="/peo_def.png" />
          </div>
          <div v-else-if="number4.progress4 == 70">
            <img class="chck4 check7" src="/peo_def.png" />
          </div>
          <div v-else-if="number4.progress4 == 80">
            <img class="chck4 check8" src="/peo_def.png" />
          </div>
          <div v-else-if="number4.progress4 == 90">
            <img class="chck4 check9" src="/peo_def.png" />
          </div>
          <div v-else-if="number4.progress4 == 100">
            <img class="chck4 check10" src="/peo_clear.png" />
          </div>
          <div v-else>
            <img class="chck4 check2" src="/peo_help2.png" />
          </div>
          <div class="bars">
            <img class="pic1" src="/bar.png" />
            <img class="pic2" src="/bar.png" />
            <img class="pic3" src="/bar.png" />
            <img class="pic4" src="/bar.png" />
          </div>
        </div>
        <!-- <v-card-title>プロジェクト名：{{ item.name }}</v-card-title>
      <v-card-suctitle>プロジェクトID：{{ item.id }}</v-card-suctitle>
      <v-card-subtitle>開始：{{ item.start }}</v-card-subtitle>
      <v-card-sybtitle>終了予定：{{ item.finish }}</v-card-sybtitle>
      <nuxt-link to="/addSchedule">タスクを追加する</nuxt-link> -->
      </div>
    </div>
    <!-- </div> -->
    <div>
      <h1>projectsページ</h1>
      <p>このページはプロジェクトID「{{ id }}」のだよ！</p>
      <div class="project-view">
        <p>プロジェクトの名前：{{ title }}</p>
        <p>プロジェクトの詳細：{{ detail }}</p>
        <p>プロジェクトの開始日：{{ start }}</p>
        <p>プロジェクトの終了日：{{ finish }}</p>
        <p>プロジェクトの作成タイムスタンプ：{{ createdAt }}</p>
        <p>プロジェクトの更新タイムスタンプ：{{ updatedAt }}</p>
        <p>プロジェクト参加中のユーザーID：{{ joinUserId }}</p>
        <!-- <div v-for="(joinname, index) in joinnames" key="index">
          <p>プロジェクト参加中のユーザー名：{{ joinnames }}さん{</p>
        </div> -->
        <p>プロジェクト参加中のユーザー：{{ joinnames }}</p>
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
                        ><div class="desc">開始日時を選択</div>
                        <v-date-picker
                          v-model="start_date"
                          locale="ja"
                          min="2021-07-01"
                          max="2022-07-01"
                        >
                        </v-date-picker
                      ></v-col>
                      <v-col cols="6"
                        ><div class="desc">終了日時を選択</div>
                        <v-date-picker
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
      joinnames: [],
      number: {
        progress: '10',
      },
      number2: {
        progress2: '50',
      },
      number3: {
        progress3: '70',
      },
      number4: {
        progress4: '70',
      },
      schedule: [
        {
          name: 'ログイン画面',
          calories: '20%',
        },
        {
          name: 'データベース',
          calories: '100%',
        },
        {
          name: 'UIデザイン',
          calories: '30%',
        },
        {
          name: '機能実装',
          calories: '100%',
        },
        {
          name: '眠たい',
          calories: '100%',
        },
        {
          name: '眠たい',
          calories: '100%',
        },
        {
          name: '眠たい',
          calories: '100%',
        },
        {
          name: '眠たい',
          calories: '100%',
        },
      ],
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
            for (const key in this.joinUserId) {
              db.collection('users')
                .where('uid', '==', this.joinUserId[key])
                .get()
                .then((query) => {
                  query.forEach((doc) => {
                    const joinusers = doc.data();
                    this.joinnames.push(joinusers.name);
                  });
                });
            }
            console.log(this.joinnames);
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
              help: false,
              process: 0,
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
<style>
.mx-auto {
  position: absolute;
  left: 105px;
}
.mx-auto {
  float: left;
  padding-left: 15px;
  background-color: aquamarine;
}
.home {
  margin-top: 60px;
  font-size: 56px;
  float: left;
}
.overlap {
  background-image: url('~@/static/station1.jpg');
  width: 100vw;
  height: 200vh;
}
.table {
  margin-left: 1000px;
  max-width: 300px;
}
.text-left {
  font-size: 45px;
}
.alart {
  position: absolute;
  top: 300px;
  left: 105px;
}
.underway1 {
  position: absolute;
  top: 280px;
  font-size: 25px;
}
.underway2 {
  position: absolute;
  top: 380px;
  font-size: 25px;
}
.underway3 {
  position: absolute;
  top: 480px;
  font-size: 25px;
}
.underway4 {
  position: absolute;
  top: 580px;
  font-size: 25px;
}
.pic1 {
  position: absolute;
  top: 240px;
  left: 105px;
  z-index: 1;
}
.pic2 {
  position: absolute;
  top: 340px;
  left: 105px;
  z-index: 1;
}
.pic3 {
  position: absolute;
  top: 440px;
  left: 105px;
  z-index: 1;
}
.pic4 {
  position: absolute;
  top: 540px;
  left: 105px;
  z-index: 1;
}
.chck {
  position: absolute;
  top: 240px;
  width: 67px;
  height: 61px;
  z-index: 2;
}
.chck2 {
  position: absolute;
  top: 340px;
  width: 67px;
  height: 61px;
  z-index: 2;
}
.chck3 {
  position: absolute;
  top: 440px;
  width: 67px;
  height: 61px;
  z-index: 2;
}
.chck4 {
  position: absolute;
  top: 540px;
  width: 67px;
  height: 61px;
  z-index: 2;
}
.check {
  position: absolute;
  left: 145px;
}
.check2 {
  position: absolute;
  left: 230px;
}
.check3 {
  position: absolute;
  left: 305px;
}
.check4 {
  position: absolute;
  left: 385px;
}
.check5 {
  position: absolute;
  left: 455px;
}
.check6 {
  position: absolute;
  left: 535px;
}
.check7 {
  position: absolute;
  left: 610px;
}
.check8 {
  position: absolute;
  left: 685px;
}
.check9 {
  position: absolute;
  left: 765px;
}
.check10 {
  position: absolute;
  left: 850px;
}
</style>
