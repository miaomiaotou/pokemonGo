<template>
  <div id="app">
    <!-- //顶部栏 -->
   <mt-header title="这都是你抓不到的小精灵">
  <router-link to="/" slot="left">
    <mt-button icon="back">啥也没有</mt-button>

    <!-- //路由组件的出口 -->
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
    <router-view/>
<!-- 底部栏 -->
<mt-tabbar v-model="selected">
  <mt-tab-item id="pokemon1">
    <img slot="icon" src="./assets/renjianbuzhide.jpg">
    耿鬼
  </mt-tab-item>
  <mt-tab-item id="pokemon2">
    <img slot="icon" src="./assets/renjianbuzhide.jpg">
    超梦
  </mt-tab-item>
  <mt-tab-item id="pokemon3">
    <img slot="icon" src="./assets/renjianbuzhide.jpg">
    沙奈朵
  </mt-tab-item>
  <mt-tab-item id="pokemon4">
    <img slot="icon" src="./assets/renjianbuzhide.jpg">
    打人猫猫头
  </mt-tab-item>
</mt-tabbar>


  </div>
</template>

<script>

export default {
  // 声明selected
  name: 'App',
  data(){
    return{
      selected:''
    }
      
    
  },
  watch:{
    selected:function (newV,oldV) {
      console.log(newV);
      this.$router.push({name:this.selected});
      // 命名路由
    }
  }
}

</script>

<style>

</style>
