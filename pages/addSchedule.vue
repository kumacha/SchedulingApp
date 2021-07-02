<template>
  <div>
    ここはタスク追加ページです
    <div></div>
    <nuxt-link to="">この内容で追加する</nuxt-link>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase';
export default {
  data: () => ({}),
  created() {
    this.fetchDataList();
  },
  methods: {
    fetchDataList() {
      const resultItems = [];
      const vm = this;
      firebase
        .firestore()
        .collection('projects')
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            data.docID = doc.id;
            resultItems.push(data);
          });
          vm.users = resultItems;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
