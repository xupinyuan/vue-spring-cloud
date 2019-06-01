<template>
  <div>路由测试</div>
</template>
<script>
    export default {
        name: "param4",
      //路由进入前
      beforeRouteEnter: (to, from, next) => {
        console.log("进入前");
        next(vm => {
          // vm.getDate();
          // vm.postDate();
          vm.getDate();
        });
      },
      //路由跳转后
      beforeRouteLeave: (to, from, next) => {
        console.log("跳转前");
        next();
      },
      methods:{
        //后台直接接收 传递类型 query string parameters
        getDate:function(){
          this.axios.get("http://localhost:8089/findUser1",{params:{id:'123'}}).then(function (repos) {
            console.log(repos.data);
          }).catch(function(error){

          })

        },
        //后台@RequestBody 接收 传递类型request payload
        postDate:function(){
          this.axios.post("http://localhost:8089/findUser",{id:'123'}).then(function (repos) {

          }).catch(function(error){

          })

        },
        //后台直接接收传递类型 form date
        postDate1:function(){
          let param = new URLSearchParams();
          param.append("id", "zhonghangAlex");

          this.axios.post("http://localhost:8089/findUser1",param).then(function (repos) {

          }).catch(function(error){

          })

        }
      }
    }
</script>

<style scoped>

</style>
