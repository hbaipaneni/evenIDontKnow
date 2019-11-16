<template>
  <div class="app-card" :class="(tutorial.name === 'Android' || tutorial.name === 'Python')?'big':''"  @click="goToCourses(tutorial.id)">
    <div class="app-card-image">
      <img :src="getImgUrl(tutorial.img)" alt="Andriod" />
    </div>
    <div class="app-card-header">
      <div class="app-card-title">{{tutorial.name}}</div>
      <div class="app-card-subhead">{{tutorial.subhead}}</div>
    </div>
    <div class="app-card-content"></div>
  </div>
</template>

<script>
export default {
  props: ["tutorial"],
  methods: {
    getImgUrl(img) {
      var images = require.context("../assets/images", false, /\.svg$/);
      return images("./" + img);
    },
    goToCourses(id) {
        if (id !== 'donate') {
          this.$router.push(`/courses/${id}`)
        }
    }
  }
};
</script>

<style>
</style>