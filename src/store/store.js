import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookie'

// Tell Vue to use the plugin
Vue.use(Vuex);

export default new Vuex.Store({
  //组件中通过this.$store.state.username 调用
  state:{
    username:Cookie.get('user'),
    token:Cookie.get('token'),
    apiList:{
      auth:'http://127.0.0.1:8000/api/v1/auth/',
      course:'http://127.0.0.1:8000/api/v1/course/',

    }
  },
  mutations:{
    //组件中通过 this.$store.commit(saveToken,参数) 调用
    saveToken:function (state,userAndToken) {
      let user = userAndToken.username
      let token = userAndToken.token
      state.username=user
      Cookie.set('user',user,'20min')
      Cookie.set('token',token,'20min')
    },
    clearToken:function (state) {
      state.username=null
      Cookie.delete('user')
      Cookie.delete('token')

    }
  }
})
