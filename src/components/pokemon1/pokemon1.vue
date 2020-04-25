<template>
  <div id = 'pokemon1'>耿鬼</div>
</template>

<script>
export default {
    name:'pokemon1',
    data(){
        return{

        imgs:[]

        };
    },
    created(){
this.$axios.get('debug/').then(res=>{
    console.log(res.data.message);
    this.imgs=res.data.message;


}).catch(err=>{
    console.log('轮播图异常')
})
}};
</script>

<style>

</style>