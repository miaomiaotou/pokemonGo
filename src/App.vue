<template>
<div id ="app">
  <router-link to = "/pokemon1" tag="button" replace>耿鬼</router-link>
  <router-link to ="/pokemon2" tag="button" replace>超梦</router-link>
  <!-- router-link最终会渲染成a标签 -->
  
  <router-view></router-view>
  <!-- router-view 是点击后渲染的位置，写下边就会渲染到下边 -->
</div>


</template>

<script>



 </script>

<style>
.router-link-active{
  color: red;

  }
  /* /* 点击的时候会变红 *，.后边的是在F12的element里边找到的/ */

</style>
