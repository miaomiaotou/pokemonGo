// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

Vue.config.productionTip = false

//使用mintui引入全部的组件
import Mint from 'mint-ui';
Vue.use(Mint);
import'mint-ui/lib/style.css';

// Axios.defaults.baseUrL = 'http://www.sinya.online/api/';

Axios.defaults.baseUrL = 'http://www.aicaijing.com.cn/webapi/';

// 配置axios
Vue.prototype.$axios=Axios;

// Axios.defaults.baseUrL = 'http://www.aicaijing.com.cn/webapi/';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
