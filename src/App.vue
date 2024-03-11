<!--
 * @Descripttion : 
 * @Author       : wuhaidong
 * @Date         : 2024-03-11 21:01:06
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-03-11 22:38:30
-->
<template>
  <div class="anchor">
    <TreeAnchor />
  </div>
  <div class="content">
      <div class="panel" id="1">1111111</div>
      <div class="panel" id="2">2222222</div>
      <div class="panel" id="3">3333333</div>
      <div class="panel" id="4">4444444</div>
      <div class="panel" id="5">5555555</div>
      <div class="panel" id="6">6666666</div>
      <div class="panel" id="7">7777777</div>
      <div class="panel" id="8">8888888</div>
      <div class="panel" id="9">9999999</div>
  </div>
  
</template>

<script>
import TreeAnchor from "./components/TreeAnchor.vue";

export default {
  name: "App",
  components: {
    TreeAnchor,
  },
  data() {
    return {
      treeData: [],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-left: 120px;
}
.anchor{
  position: fixed;
  top: 20px;
  left: 20px;
}
.panel {
  width: 100%;
  height: 400px;
  background-color: gray;
  margin-bottom: 10px;
}
</style>
