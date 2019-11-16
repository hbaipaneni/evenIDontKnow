<template>
  <div class="course-card" v-if="course">
    <div class="course-image inline-block" >
      <img :src="getImgUrl(course.img)" alt="Course"/>
    </div>
    <div class="course-content" style="width: fit-content;">
      <h2>{{course.name}}</h2>
      <div class="course-desc">{{course.desc}}</div>
    </div>
    <router-link
      class="view-detail button"
      :to="{ name: 'courseDetail', params: { courseId: course.id }}"
    >Learn More</router-link>
    <!-- <a href="#" class="view-detail button">Learn More</a> -->
  </div>
</template>

<script>
export default {
  props: ["course"],
  methods: {
    getImgUrl(img) {
      var images = require.context("../assets/images", false, /\.png$/);
      return images("./" + img);
    }
  }
};
</script>

<style>
</style>