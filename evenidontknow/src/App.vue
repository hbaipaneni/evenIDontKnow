<template>
  <div id="app">
    <side-nav></side-nav>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";

export default {
  name: "app",
  components: {
    "footer-component": Footer,
    "side-nav": SideNav,
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
