import Vue from 'vue'
// 安装路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//路由配置
import router from './router'

// 导入 ElementUI
import ElementUI from 'element-ui'
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css'

// 导入axios
import axios from 'axios'
Vue.prototype.axios = axios;
// 导入vuex
import Vuex from 'vuex'
Vue.use(Vuex);
import store from './store'


import App from './App'




//引用axios


new Vue({
  el: '#app',
  // 启用路由
  router,
  // 启用 ElementUI
  render: h => h(App)
});
