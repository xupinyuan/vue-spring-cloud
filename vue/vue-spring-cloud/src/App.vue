<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted(){
      //监听页面刷新事件
      window.addEventListener("unload",this.saveLoginUser);
    },
    methods:{
      saveLoginUser(){
        //将值VUEX中的state.user 存入sessionStorage
        sessionStorage.setItem('loginUser',JSON.stringify(this.$store.state.user));
      }
    }
  }
</script>
