<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-caret-right"></i>传参测试</template>

            <el-menu-item-group>
              <el-menu-item index="1-1">
                  <!--props方式获取登陆页传值-->
                   当前登录人：{{username}}
              </el-menu-item>
              <el-menu-item index="1-1">
                <!--路由跳转-->
                <router-link to="/param/param1/传参测试1">传参测试1</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <!--路由跳转 :to 对象模式传递 name:路由名称 params:路由参数-->
                <router-link :to="{name:'param2',params:{id:'传参测试2'}}">传参测试2</router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                <router-link :to="{name:'param3',params:{id:'传参测试3'}}">传参测试3</router-link>
              </el-menu-item>
              <el-menu-item index="1-4">
                <router-link :to="{name:'param4'}">路由测试</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item><router-link :to="{name:'redirect'}">退出登录</router-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{username}}</span>
        </el-header>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    //props 方式传值
    props: ['username'],
    name: "Main"
  }
</script>

<style scoped lang="scss">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
