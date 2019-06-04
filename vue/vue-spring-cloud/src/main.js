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
//引用axios
Vue.prototype.axios = axios;
// 导入vuex
import Vuex from 'vuex'
Vue.use(Vuex);
import store from './store'
import App from './App'


//全局路由
router.beforeEach((to, form, next) => {
  // 获取用户登录状态
  let isLogin = sessionStorage.getItem('isLogin');
  // 注销
  if (to.path == '/logout') {
    // 清空
    sessionStorage.clear();

    // 跳转到登录
    next({path: '/login'});
  }

  // 如果请求的是登录页
  else if (to.path == '/login') {
    if (isLogin != null) {
      // 跳转到首页
      next({path: '/main'});
    }
  }

  // 如果为非登录状态
  else if (isLogin == null) {
    // 跳转到登录页
    next({path: '/login'});
  }

  // 下一个路由
  next();
});

new Vue({
  el: '#app',
  // 启用路由
  router,
  store,
  // 启用 ElementUI
  render: h => h(App)
});
