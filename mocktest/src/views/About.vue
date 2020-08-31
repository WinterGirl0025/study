<template>
  <div class="about">
    <div class="box_1">
      <!-- 绑定message 和 input -->
      <h1>绑定信息：{{message}}</h1>
      <input type="text" v-model="message" />
    </div>
    <div class="box_2">
      <!-- 光标移开获取自定义属性mes的值 -->
      <input type="text" v-bind:data-mes="message" ref="myInput" @blur="onBlur" />
    </div>

    <button @click="onClick">say hi</button>

    <!-- 父组件向子组件传值 -->
    <son :post-title="message" @childFn="parentFn"></son>
    <!-- 子组件向父组件传值 -->
    <span>{{son_MES}}</span>
  </div>
</template>

<script>
import son from "../components/son";
export default {
  components: { son },
  data() {
    return {
      message: '',
      son_MES:''
    };
  },
  methods: {
    //点击显示信息
    onClick() {
      alert("hi");
    },
    //获取自定义参数值
    onBlur() {
      // 方法一：
      console.log(event.target.getAttribute("data-mes"));
      // 方法二：
      console.log(this.$refs.myInput.dataset.mes);
    },
    parentFn(payload) {
      this.son_MES = payload;
    }
  }
};
</script>

<style lang="less" scoped>
.box_1 {
  border: 1px solid #eee;
  background-color: #c583c5;
  margin-bottom: 20px;
}
.box_2 {
  border: 1px solid #eee;
  background-color: #6ca4ca;
  margin-bottom: 20px;
}
input {
  height: 30px;
  border: 1px solid #eee;
  border-radius: 4px;
  width: 300px;
  margin: 5px auto;
}
</style>

