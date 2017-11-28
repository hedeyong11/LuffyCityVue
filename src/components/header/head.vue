<template>

  <nav class="navbar navbar-default navbar-static-top">
    <!-- We use the fluid option here to avoid overriding the fixed width of a normal container within the narrow content columns. -->
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-8" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Luffy-City</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="">
        <ul class="nav navbar-nav" id="subjects">
          <li><router-link to="/index">首页</router-link></li>
          <li><router-link to="/course">课程</router-link></li>
          <li><router-link to="/LuffyX">LuffyX学位</router-link></li>
          <li><router-link to="/deepScience">深科技</router-link></li>
        </ul>

        <ul v-if="this.$store.state.username" class="nav navbar-nav navbar-right hidden-sm">
          <li><a href="javascript:void(0);">{{ this.$store.state.username }}</a></li>
          <li><a href="javascript:void(0);" @click="logout">注销</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right hidden-sm" v-else>
          <li>
            <router-link :to="{name:'login',query:{backurl:this.$route.path }}">登录</router-link>
          </li>
        </ul>
      </div>


      <!-- /.navbar-collapse -->
    </div>
  </nav>


  <!--<ul class="text-center spacing" style="padding: 0">-->
  <!--<li v-for="item in links"><a @click="$goRoute(item.route)">{{item.text}}</a></li>-->
  <!--<div v-if="this.$store.state.username">-->
  <!--<a>{{ this.$store.state.username }}</a>-->
  <!--<a href="">注销</a>-->
  <!--</div>-->
  <!--<router-link v-else :to="{name:'login',query:{backurl:this.$route.path }}">登录</router-link>-->
  <!--</ul>-->

  <!--</div>-->
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {}
    },
    methods: {
      logout: function () {
        //删掉token,跳转首页
        this.$store.commit('clearToken')
        let backUrl = this.$route.query.backurl
        console.log(backUrl)
        if (backUrl) {
          this.$router.push({path: backUrl})
        } else {
          this.$router.push('/index')
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #subjects {
    margin-left: 200px;
  }

  #subjects li {
    margin-left: 50px;
  }
</style>
