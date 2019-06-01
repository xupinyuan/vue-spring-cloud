<template>
  <div>
    <span>测试取值：{{message}}</span>
    <div>测试v-if：
      <span v-if="flag1">true</span>
      <span v-if="flag2==false">false</span>
    </div>
    <div>测试v-for：
      <span v-for="arr in array" >
       {{arr}}、
     </span>
    </div>
    <div>测试v-on：
      <button v-on:click="testEvent()">点我点我</button>
    </div>
    <HelloWorld></HelloWorld>

    <div>双向绑定测试：<input v-model="name" /><button v-on:click="alertName()">点击弹出值</button></div>


    <div>组件消息传递测试
      <Children  v-bind:message='{name:"消息传递"}' v-on:send="setChidrenData"></Children>
      <span>子组件传来的消息：{{chidrenData}}</span>
    </div>
  </div>
</template>

<script>
  import HelloWorld from "../components/HelloWorld";
  import Children from "../components/Children";
  // 先注册组件

  export default {
    name: "test",
    components: {Children, HelloWorld},
    data() {
      return {
        name:"双向绑定测试",
        message: '测试取值',
        //测试v-if
        flag1 : true,
        flag2 : false,
        //测试v-for
        array: ['1','2','3'],
        chidrenData:''
      }
    },
    methods:{
      //测试事件绑定
      testEvent(){
        alert('点我点我');
      },
      //双向绑定测试
      alertName(){
        alert(this.name);
      },
      //子组件传递需要通过父组件事件
      setChidrenData(msg){
        this.chidrenData = msg
      }
    },
    //钩子函数测试
    beforeCreate:function () {
      alert('钩子函数测试');
    },


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
