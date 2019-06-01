<template>
  <div>
    <span>{{message}}</span>
     <span v-for="item in items" >
       <a v-if="item.username == 1">111</a>
       {{item.username}}
     </span>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        message:'测试',
        items: [
          {username:'1'},
          {username:'2'},
          {username:'3'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }

  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
  .login-input{
    width: 220px;
  }
</style>
