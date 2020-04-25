// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
import pokemon1 from '../components/pokemon1/pokemon1'

// 1.通过vur.use来安装插件， 
Vue.use(VueRouter)

// 2.创建路由对象
// const router = new VueRouter({
//   // 传入路径，配置路由和组件之间的关系
//   routes:[]

// })
// 也可以把routes单独写出来,这两种写法都行
const routes = [
  // 在这里边配置URL和组件的映射关系，一个url对应一个组件什么的
  // 这里不是完整的url，协议头什么的
 { path:'/home',
  component:pokemon1,
},

]
const router = new VueRouter({
  routes


})
//3. 将router对象传入vue实例中

export  default  router

