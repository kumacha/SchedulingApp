<template>
  <div></div>
</template>
<script>
import firebase from '@/plugins/firebase';
export default {
  data() {
    return {
      time: 0,
      help: false,
    };
  },
  mounted() {
    setInterval(this.rescueRequest, 1000000);
  },
  methods: {
    rescueRequest() {
      this.time += 1;
      if (this.time > 0) {
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
  },
};
</script>
