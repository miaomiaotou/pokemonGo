<template>
    <div>我是用户的相关信息
        <h2>{{userid}}</h2>
    </div>

    
</template>
<script>
// const userid = []
export default {
    name:'user',
    computed:{
        // computed属性和methods不一样，mathod按照方法调用
        userid(){
            return this.$route.params.abc
            // $route跟$router不一样，$route谁处于活跃拿到当前组件 的userid

        },


    }

    
}
</script>
<style scoped>

</style>