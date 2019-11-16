<template>
  <div>
    <div id="mySidenav" class="sidenav" @click="closeNav()">
      <div class="menu-wrap" >
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
        <router-link :to="{ name: 'home'}">Home</router-link>
        <router-link :to="{ name: 'courses', params: { subject: 'android'}}">Android Tutorial</router-link>
        <router-link :to="{ name: 'courses', params: { subject: 'python'}}">Python Tutorial</router-link>
        <router-link :to="{ name: 'courses', params: { subject: 'project'}}">Articles</router-link>
        <a href="#">Online Classes</a>
        <a href="#">Contribute</a>
        <a href="#">Our Mission</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
    <span class="hamburger" @click="openNav()">&#9776;</span>
  </div>
</template>

<script>
export default {
  methods: {
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.opacity = "0";
    },
    openNav() {
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("mySidenav").style.opacity = "1";
    }
  }
};
</script>

<style>
.menu-wrap {
  width: 200px;
}
.hamburger {
  font-size: 30px;
  cursor: pointer;
  position: fixed;
  left: 10px;
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  background-color: rgba(0, 0, 0, 0.9);
  text-align: left;
}

.sidenav a {
  padding: 20px 0 20px 20px;
  text-decoration: none;
  font-size: 0.85rem;
  color: #f1f1f1;
  display: block;
  transition: 0.3s;
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  line-height: 1.4rem;
  cursor: pointer;
}

.sidenav a:hover {
  color: #f1f1f1;
  text-shadow: 1px 0px 20px white;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>