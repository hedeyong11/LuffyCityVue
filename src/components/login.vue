<template>
  <div class="hello">

    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <h1>{{ msg }}</h1>
          <div class="form-horizontal">
            <div class="form-group">
              <label for="inputEmail3" class="col-sm-2 control-label">Username</label>
              <div class="col-sm-8">
                <input type="email" class="form-control" id="inputEmail3" placeholder="username" v-model="username">
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
              <div class="col-sm-8">
                <input type="password" class="form-control" id="inputPassword3" placeholder="password" v-model="password">
              </div>
            </div>
            <div>{{error}}</div>
            <button class="btn btn-default" @click="login">Sign in</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Python',
    data () {
      return {
        msg: '登录',
        username:"",
        password:"",
        error:''
      }
    },
    mounted: function () {
//      this.do11()
    },
    methods: {


      login:function () {
          let that = this
          this.$axios.request({
            url:this.$store.state.apiList.auth,
            method:"POST",
            data:{
                username:this.username,
                password:this.password,
            },
            responseType:'json'
          }).then(function (response) {
              if(response.data.code!==1000){
                  that.error=response.data.msg
              }else{
                  //保存token,跳转首页
                that.$store.commit('saveToken',{'username':response.data.username,"token":response.data.token})
                let backUrl = that.$route.query.backurl
                console.log(response)
                console.log(backUrl)
                console.log(response)
                if(backUrl){
                    that.$router.push({path:backUrl})
                }else{
                    that.$router.push('/index')
                }
              }
          })
//            var url='/api/v1/auth/';
//            var url='http://127.0.0.1:8000/api/v1/auth/';
//            var username = this.username;
//            var password = this.password;
//            var self = this
//            axios.post(url,{
//                username:username,
//                password:password,
//            },{
////                'headers':{'Content-Type':'application/x-www-form-urlencoded'}
//                'headers':{'Content-Type':'application/json'}
//            }).then(function (response) {
//                console.log(response)
//              console.log(response.data.tk)
////              console.log(response.data.get("tk"))
//                self.$cookie.set('tk', response.data.tk, 1);
//                console.log(response)
//                console.log(response.status)
//                self.$router.replace({ path: 'index' })
////                self.$goRoute("/index")
////                location.href="index"
//            }).catch(function (error) {
//                 console.log(error)
//            })
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
