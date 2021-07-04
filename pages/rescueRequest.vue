<template>
  <div></div>
</template>
<script>
import firebase from '@/plugins/firebase';
import { Octokit } from '@octokit/core';
export default {
  data() {
    return {
      time: 0, // 時間(1time = 2分)
      help: false, // ヘルプサインの有無
      commitTime: '2021-07-03T18:54:27Z', // gitにcommitした時間
      gitName: 'kozkoz', // gitのUser名
    };
  },
  mounted() {
    this.commitTime = this.gitUser();
    setInterval(this.rescueRequest, 120000);
  },
  methods: {
    rescueRequest() {
      this.time += 1;
      const lastCommitTime = this.gitUser();
      if (lastCommitTime !== this.commitTime) {
        this.commitTime = lastCommitTime;
        this.time = 0;
      }
      if (this.time > 30) {
        this.help = true;
        const play = () => {
          // firebaseから音源データをダウンロード
          const storageRef = firebase.storage().ref();
          const imgSample = storageRef.child('天国と地獄.mp3');
          imgSample.getDownloadURL().then((url) => {
            const sound = new Audio(url);
            sound.play();
          });
        };
        play();
      }
    },
    async gitUser() {
      // npm install @octokit/core を予め実行すること
      const octokit = new Octokit({
        auth: `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`,
      });
      const res = await octokit.request('GET /users/{org}/events', {
        org: this.gitName,
      });
      console.log(res.data[0].created_at);
      return res.data[0].created_at;
    },
  },
};
</script>
