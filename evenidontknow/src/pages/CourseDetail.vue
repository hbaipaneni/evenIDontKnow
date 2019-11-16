<template>
  <div class="page-content-container">
    <div class="page-main">
      <div class="header-content text-center">
        <img src="../assets/images/logo.svg" alt="Logo" class="logo" />
      </div>
      <div class="text-center">
        <iframe class="main-tube" :src="course.youtubeSource"></iframe>
      </div>
      <div class="page-content">
        <div class="page-content-main">
          <div class="video-content"></div>
          <div class="message-bolt text-center">
            <h1 class="first">{{course.title}}</h1>
          </div>
          <br />
          <course-detail-content :course="course"></course-detail-content>
        </div>
      </div>
    </div>


    <div class="page-info">
      <course-detail-info></course-detail-info>
    </div>
  </div>
</template>

<script>
import { courseDetails } from "../staticData/CourseDetails";
import CourseDetailContent from "../components/CourseDetailContent";
import CourseDetailInfo from "../components/CourseDetailInfo";

export default {
  components: {
    "course-detail-content": CourseDetailContent,
    "course-detail-info": CourseDetailInfo,
  },
  computed: {
    courseId() {
      return this.$route.params.courseId;
    }
  },
  data() {
    return {
      course: courseDetails[this.$route.params.courseId] || courseDetails.sqlite
    };
  },
  methods: {
    getImgUrl(img) {
      var images = require.context("../assets/images", false, /\.png$/);
      return images("./" + img);
    }
  }
};
</script>

<style>
.page-content-container {
  border: 1px solid #e7e7e7;
  background-color: #fff;
  max-width: 1920px;
  margin: 0 auto;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: left;
  display: flex;
  padding: 40px;
}
.page-main {
  flex-grow: 1;
}
p.indent {
  line-height: 2;
}
.page-content {
  /* padding: 40px; */
}
.message-bolt h1 {
  font-weight: 900;
  color: #000;
}

</style>