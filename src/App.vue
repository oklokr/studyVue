<template>
  <div id="app">
    <Header />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  @import url("../src/assets/css/reset.css");
  html, body {
    min-height: 100vh;
    overflow: auto;
  }

  body::-webkit-scrollbar, .wrap::-webkit-scrollbar {
    display: none;
  }

  #app {
    position: relative;
  }
</style>
