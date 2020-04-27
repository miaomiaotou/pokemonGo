// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
import pokemon1 from '../components/pokemon1/pokemon1'
import pokemon2 from '../components/pokemon1/pokemon2'
import User from '../components/User'

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
  // 这里不是完整的url，协议头//主机名什么的
  {
    path:'',
    redirect:"/pokemon1",
     },
    //这是默认URL 
 { path:'/pokemon1',
  component:pokemon1,
},
{
path:'/pokemon2',
component:pokemon2
},
{
  path:'/User/:abc',
  // 动态路由的配置
  component:User
},
]
const router = new VueRouter({
  routes,
  mode: 'hash',
  // linkActiveClass:"active" ，谁处于活跃的时候就会应用上这个class
})


//3. 将router对象传入vue实例中

export  default  router

