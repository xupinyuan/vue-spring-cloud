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
  let urlJson = to.query;
  // 获取用户登录状态
  let isLogin = sessionStorage.getItem('isLogin');
  // sso登录cookie同步
  if(to.path == '/ssoIndex' || urlJson.redirect){
    next();
  }
  else if (to.path == '/logout') {
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
//设置cookie
Vue.prototype.setCookie = function(c_name,value,expiredays) {
  var exdate=new Date()
  exdate.setDate(exdate.getDate()+expiredays)
  document.cookie=c_name+ "=" +escape(value)+
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
};

//获取cookie
Vue.prototype.getCookie=function(c_name) {
  if (document.cookie.length>0)
  {
    var  c_start=document.cookie.indexOf(c_name + "=")
    if (c_start!=-1)
    {
      c_start=c_start + c_name.length+1
      var c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1) c_end=document.cookie.length
      return unescape(document.cookie.substring(c_start,c_end))
    }
  }
  return ""
};

//获取url中的参数
Vue.prototype.getUrlKey=function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
};

new Vue({
  el: '#app',
  // 启用路由
  router,
  //启用store
  store,
  // 启用 ElementUI
  render: h => h(App)
});
