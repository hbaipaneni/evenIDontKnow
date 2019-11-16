<template>
  <div>
    <div class="trapezoid text-center">
      <div class="header-content">
        <img src="../assets/images/logo.svg" alt="Logo" class="logo" />
        <h1 class="header-title">Welcome to {{subject}} courses</h1>
      </div>
      <div class="course-wrapper" style="display: grid;grid-template-columns: auto auto auto;">
        <!-- Course Cards -->
        <course-card
          v-for="course in courses"
          v-bind:key="course.id"
          v-bind:course="course"
        ></course-card>
        <!-- End of Course cards -->

        <course-card></Course-card>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from "../components/CourseCard";
import * as courses from "../staticData/courses";
export default {
  components: {
    "course-card": CourseCard
  },
  computed: {
    subject() {
      return this.$route.params.subject;
    },
    courses() {
      return courses[this.$route.params.subject];
    }
  }
};
</script>

<style>
</style>