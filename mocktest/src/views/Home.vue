<template>
  <div class="home">
    <button @click="onPostClick">post hello</button>
    <button @click="onGetClick">get message</button>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {},
      array: []
    };
  },
  methods: {
    onPostClick() {
      this.$axios({
        url: "/userInfo/userinfo",
        method: "post",
        data: {
          username: "aa"
        }
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onGetClick() {
      this.$axios({
        url: "/userInfo/usermessage",
        method: "get"
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
