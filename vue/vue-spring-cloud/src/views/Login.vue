<template>
  <div>
    <!--:model 绑定表单对象 :rules 绑定表单验证-->
    <el-form ref="form" :model="form" :rules="rules"  label-width="80px" class="login-box">
      <h3 class="login-title">vue-spring-cloud</h3>
      <!--prop 绑定验证字段-->
      <el-form-item label="账号："  prop="userName">
        <el-input type="text" placeholder="请输入账号" v-model="form.userName" class="login-input"  @keyup.enter.native="onSubmit('form')"></el-input>
      </el-form-item>
      <el-form-item label="密码："  prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password" class="login-input" @keyup.enter.native="onSubmit('form')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  v-on:click="onSubmit('form')" >登录</el-button>
        <el-button type="primary"  v-on:click="register()" >注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        form: {
          userName: '',
          password: ''
        },
        rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      //自定义事件
      onSubmit(formName){
        //表单验证（valid=验证返回值）
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //登录请求
            this.axios.post("http://localhost:8089/login",this.form).then((repos)=>{
              if(repos.data.code === '1'){
                //设置状态已登录
                sessionStorage.setItem("isLogin",true);
                this.$store.dispatch("asyncUpdateUser",repos.data.data);
                //路由跳转到主页
                this.$router.push({name:'Main'});
              }else {
                this.openVn(repos.data.message)
              }
            });
          } else {
            return false;
          }
        });
      },
      //自定义事件
      register(){
        console.log(this)
        //this.onSubmit('form');
        //路由到注册页
       this.$router.push('/register');
      },
      openVn(message) {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', { style: 'color: red'}, message),
          ])
        });
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
