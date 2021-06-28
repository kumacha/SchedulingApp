<template>
  <div>{{ thisMinute }}</div>
</template>
<script>
export default {
  data() {
    return {
      time: 0,
      thisMinute: 0,
    };
  },
  mounted() {
    this.thisMinute = this.timeCheck();
  },
  methods: {
    timeCheck() {
      const date1 = new Date();
      const minute = date1.getMinutes();
      console.log(minute);
      return minute;
    },
    rescueRequest() {
      console.log('わからん！！');
    },
  },
};
</script>
