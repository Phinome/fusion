<template>
  <div class="wrapper">
    <div class="header"></div>
    <!-- main content -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import Footer from './Footer.vue';
  export default {
    name: 'App',
    components: {
      'v-footer': Footer
    }
  }
</script>
<style>
  html, body {
    font-family: 'Roboto', 'Helvetica', sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
    font-size: 62.5%;
  }
  div,p,span {
    margin: 0;
    padding: 0;
  }
  .wrapper {
    margin: 0;
    padding: 0;
    background: transparent url(../assets/img/bk.jpg) no-repeat 50% 0;
    background-size: cover;
  }
  .header {
    height: 1.28rem;
    background: transparent url(../assets/img/logo.png) no-repeat 0 50%;
    background-size: auto 200%;
  }
  .wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
