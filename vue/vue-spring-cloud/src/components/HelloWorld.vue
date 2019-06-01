<template>
  <div>
    <div>自定义组件测试</div>
    <div>父组件传来的消息：{{data}}</div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props:['data']
}
</script>
