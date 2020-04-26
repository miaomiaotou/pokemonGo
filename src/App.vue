<template>
<div id ="app">
  <router-link to = "/pokemon1" tag="button" replace>耿鬼</router-link> 
   <router-link to ="/pokemon2" tag="button" replace>超梦</router-link>
 
 
  <!-- router-link最终会渲染成a标签 -->


   <!-- <button @click="pokemon1Click">耿鬼</button>
  <button @click="pokemon2Click">超梦</button> -->
  
  <router-view></router-view>
  <!-- router-view 是点击后渲染的位置，写下边就会渲染到下边 -->
</div>


</template>

<script>
export default{
  name:'app',
  methods:{
    pokemon1Click(){
       // 通过代码的方式修改路由vue-router,this当前组件的router属性，里边的push方法
      //  this.$router.push(
      //    '/pokemon1')
      console.log('pokemon1')
      },
    pokemon2Click(){
      // this.$router.push('/pokemon2')
      console.log('pokemon2')
    }
  }

}


 </script>

<style>
.router-link-active{
  color: red;

  }
  /* /* 点击的时候会变红 *，.后边的是在F12的element里边找到的/ */

</style>
