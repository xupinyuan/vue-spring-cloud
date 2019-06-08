//定义一个常量user
const user = {
  //如果sessionStorage 中存在则使用sessionStorage 中数据  否则创建一个空 user   解决页面刷新丢失数据
  state: sessionStorage.getItem('loginUser') ? JSON.parse(sessionStorage.getItem('loginUser')) : {
    user: {
      username: ''
    }
  },
  //获取对象  this.$store.getters.getUser.userName
  getters: {
    getUser(state) {
      return state.user;
    }
  },
  //更新对象 this.$store.updateUser();
  mutations: {
    updateUser(state, user) {
      state.user = user;
    }
  },
  //异步更新对象   this.$store.dispatch("asyncUpdateUser",repos.data.data);
  actions: {
    asyncUpdateUser(context, user) {
      context.commit('updateUser', user);
    }
  }
};

export default user;
