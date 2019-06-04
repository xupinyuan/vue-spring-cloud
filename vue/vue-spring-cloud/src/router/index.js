import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Register from '../views/Register'
import Main from '../views/Main'
import Test from '../views/test'
import param1 from '../views/param/param1'
import param2 from '../views/param/param2'
import param3 from '../views/param/param3'
import param4 from '../views/param/param4'
import error from '../views/error/404'

Vue.use(Router);

export default new Router({
  //路由模式去掉#号
  mode: 'history',
  routes: [{
    // 登录页
    path: '/login',
    name: 'Login',
    // 模块名
    component: Login
  },
    //注册页
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    //主页
    {
      path: '/main',
      name: 'Main',
      component: Main,
      //支持props方法传参
      props:true,

      //嵌套路由
      children: [
        {
          //:/id传递参数名
          path: '/param/param1/:id',
          name: 'param1',
          component: param1,
        }, {
          path: '/param/param2/:id',
          name: 'param2',
          component: param2,
        }, {
          path: '/param/param3/:id',
          name: 'param3',
          component: param3,
          props:true
        },
        {
          path: '/param/param4',
          name: 'param4',
          component: param4
        }
      ]
    },
    //重定向回到登录
    {
      path: '/toLogin',
      redirect: '/login',
      name:'redirect',
    },

    //测试
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path:'*',
      name:'404',
      component:error

    }]


});
