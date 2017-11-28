<template>
  <div style="padding: 0 80px 0 80px">
    <div class="row">
      <!--<div class="col-md-4"style="padding: 0 0 15px 0">-->
      <!--<img src="../assets/course-img1.f4ba499.png" alt="">-->
      <!--<p style="margin-top: 20px;font-weight: 600;font-size: 16px">爬虫开发实战</p>-->
      <!--<p style="padding: 0 30px 0 30px">通过掌握解锁更多高级爬虫知识，就可以有能力突破 一些常规的反爬限制，爬取你想要的数据。</p>-->
      <!--<p style="color: #9B9B9B;font-size: 14px">难度：高级</p>-->
      <!--</div>-->
      <router-link :to="{'path':'/CourseDetail/'+ course.pk}" v-for="course in courses" :key="course.pk">
        <div class="col-md-4" style="padding: 0 0 15px 0">
          <img :src="course.course_img" alt="">
          <p style="margin-top: 20px;font-weight: 600;font-size: 16px">{{course.name}}</p>
          <p style="padding: 0 30px 0 30px">{{course.brief}}</p>
          <p style="color: #9B9B9B;font-size: 14px">难度：{{course.level}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to course',
        courses: []
      }
    },
    mounted: function () {
      this.getCourseList()
    },
    methods: {
      getCourseList: function () {
        let that = this
        this.$axios.request({
          url: this.$store.state.apiList.course,
          responseType: 'json'
        }).then(function (response) {
          that.courses = response.data
        })
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #4a4a4a !important;
    text-decoration: none !important;
  }
</style>
