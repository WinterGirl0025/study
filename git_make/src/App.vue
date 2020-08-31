<template>
  <div id="app">
    <div class="contain_box">
      <h1>git测试版</h1>
      <router-view />
      <div class="btn_box">
        <!-- 主页-轮播图 -->
        <router-link to="/" tag="button">Main Page</router-link>
        <!-- 人员 -->
        <router-link to="/people" tag="button">People</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#app{
  background-color: #4b7f86;
  padding: 10px 0;
}
.contain_box {
  width: 40%;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border:1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 0 10px #eee;
  background-color: #fff;
}
h1 {
  text-align: center;
}
.btn_box {
  position: absolute;
  bottom: 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  button {
    width: 30%;
    height: 30px;
    background-color: #eee;
    border-radius: 3px;
    border: 1px solid #eee;
  }
}
button:hover {
  box-shadow: 0 0 3px #4b7f86;
  background-color: #4b7f86;
  border: 1px solid #4b7f86;
  color: #fff;
}
</style>
