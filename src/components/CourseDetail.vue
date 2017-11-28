<template>
  <div style="padding: 30px 100px 0 100px">
    <div class="row">
      <div class="col-md-7" style="padding: 80px 80px 0 0 ">
        <div style="font-size: 45px">Python开发21天入门必备</div>
        <h3>零基础开始，21天掌握进入人工智能领域的必备语言</h3>
        <div style="padding: 40px 0 0 40px">
          <div style="float: left;font-size: 20px">难度：中级</div>
          <div style="float: left;margin-left: 30px;font-size: 20px">时长：30小时</div>
          <div style="float: left;margin-left: 30px;font-size: 20px">学习人数：220人</div>
          <div style="float: left;margin-left: 30px;font-size: 20px">评分：10.0</div>
        </div>
      </div>
      <div class="col-md-5"></div>
    </div>
    <div class="row" style="padding: 150px 150px 0 150px">
      <div style="float: left;margin-left: 200px;font-size: 20px">
        <router-link :to="{'path':'/CourseDetail/'+this.$route.params.pk+'/CourseSummary'}">课程概述</router-link>
      </div>
      <div style="float: left;margin-left: 60px;font-size: 20px">
        <router-link :to="{'path':'/CourseDetail/'+this.$route.params.pk+'/CourseChapter'}">课程章节</router-link>
      </div>
      <div style="float: left;margin-left: 60px;font-size: 20px">
        <router-link :to="{'path':'/CourseDetail/'+this.$route.params.pk+'/CourseComment'}">用户评价</router-link>
      </div>
      <div style="float: left;margin-left: 60px;font-size: 20px">
        <router-link :to="{'path':'/CourseDetail/'+this.$route.params.pk+'/CourseQuestion'}">常见问题</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
  <!--<router-view></router-view>-->



</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to index',
        info:'in detail'
      }
    },
    mounted: function () {
      this.getCourseDetail()
    },
    methods: {
      getCourseDetail: function () {
        let pk = this.$route.params.pk
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #4a4a4a !important;
    text-decoration: none !important;
  }
</style>
