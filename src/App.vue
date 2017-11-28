<template>
  <div id="app">
    <!--<img style="width: 500px" src="./assets/django.png">-->
    <!--<input type="button" class="btn btn-success" value="clime me">-->
    <heads></heads>
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
  import heads from './components/header/head.vue'
  import foot from './components/footer/foot.vue'
  export default {
    components: {
      heads,
      foot
    },
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }



</style>
