<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="onClick">hello</button>
  </div>
</template>
<script>
export default {
  mounted() {},
  methods: {
    onClick() {
      this.$axios
        .get('/user/userinfo')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
