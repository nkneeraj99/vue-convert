<template>
  <div id="app">
    <Header />

    <Main />
    <Footer />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
@import "./assets/css/style.css";
@import "~bootstrap/dist/css/bootstrap.css";
@import "./assets/css/flaticon.css";
@import "./assets/css/animate.css";
@import "./assets/css/swiper.css";
@import "./assets/css/newfont.css";
@import "./assets/css/fontawesome-all.css";
html{
  overflow-x: hidden;
}
</style>
