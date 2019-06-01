<template>
  <div>
    <div>父组件传来的消息：{{message}}</div>
    <div>传递消息给父组件:
      <input v-model="data"><button v-on:click="sendMessage()">发送</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Children',
  props:['message'],
  data(){
    return{
      data:''
    }
  },
  methods:{
    sendMessage(){
      this.$emit('send',this.data);
    }
  }
}
</script>
