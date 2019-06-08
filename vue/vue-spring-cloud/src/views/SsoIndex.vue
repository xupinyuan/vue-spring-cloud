<template>
    
</template>

<script>
    export default {
      name: "SsoIndex",
      //钩子函数用于同步不同域之间的cookie 同步
      beforeCreate:function () {
        let token = this.getCookie("token");
        let url = this.getUrlKey("redirect");
        //如果有存在token则直接响应给后台
        if(token){
          location.href = url+"?token="+token;
        }
        //否则返回不存在
        else{
          location.href = url+"?token=not";
        }

      }
    }
</script>

<style scoped>

</style>
