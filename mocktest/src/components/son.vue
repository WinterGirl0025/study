<template>
  <div>
    <h1>hi, I am son component</h1>
    <h1>{{postTitle}}</h1>
    <input type="text" v-model="message" @blur="onBlur" />
  </div>
</template>

<script>
export default {
  props: {
    postTitle: String
  },
  data() {
    return {
      message: ""
    };
  },
  methods: {
    onBlur() {
      this.$emit("childFn", this.message);
    }
  }
};
</script>

<style scoped>
div {
  margin-top: 20px;
  border: 1px solid #eee;
  background-color: #eee;
}
input {
  height: 30px;
  border: 1px solid #eee;
  border-radius: 4px;
  width: 300px;
  margin: 5px auto;
}
</style>