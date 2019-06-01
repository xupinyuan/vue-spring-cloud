<template>
  <div>
    <!--:model 绑定表单对象 :rules 绑定表单验证-->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="form-box">
      <h3 class="form-title">vue-spring-cloud</h3>
      <!--prop 绑定验证字段-->
      <el-form-item label="用户名称" prop="userName">
        <!--: v-model 数据双向绑定-->
        <el-input  placeholder="请输入用户名"  v-model="ruleForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="password">
        <el-input type="password"  placeholder="请输入密码" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="isPassword">
        <el-input type="password" placeholder="请确认密码" v-model="ruleForm.isPassword"></el-input>
      </el-form-item>
      <el-form-item>
        <!---事件绑定--->
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      //自定义验证名（rule=触发元素 value=文本值 callback=回调验证）
      var checkPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.password !== '') {
            this.$refs.ruleForm.validateField('isPassword');
          }
          callback();
        }
      };
      var checkPass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      return {
        ruleForm: {
          userName: '',
          password: '',
          isPassword:''
        },
        //表单验证
        rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { validator: checkPass, trigger: 'blur' }
          ],
          isPassword: [
            { required: true, message: '请确认密码', trigger: 'blur' },
            { validator: checkPass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      //自定义事件
      submitForm(formName) {
        //表单验证（valid=验证返回值）
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //vue-router 调整登录页
            this.$router.push('/login')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //重置表单内容
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  }
</script>

<style lang="scss" scoped>
  .form-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }
  .form-title{
    text-align: center;
  }

</style>


<style scoped>

</style>
