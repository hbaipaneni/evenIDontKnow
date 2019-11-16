<template>
  <div class="section section-update-message">
    <div v-for="(content, index) in course.sections" v-bind:key="index">
      <template v-if="content.type === 'section'">
        <div class="course-section">
          <div v-for="(section, i) in content.contents" v-bind:key="i">
            <template v-if="section.type === 'paragraph'">
              <p class="indent">{{section.content}}</p>
            </template>

            <template v-else-if="section.type === 'h2'">
              <h2>{{section.content}}</h2>
            </template>

            <template v-else-if="section.type === 'h3'">
              <h3>{{section.content}}</h3>
            </template>

            <template v-else-if="section.type === 'steps'">
              <ul>
                <li v-for="(step, ind) in section.steps" v-bind:key="ind">
                  <h4>
                    <pre>{{step}}</pre>
                  </h4>
                </li>
              </ul>
            </template>

            <template v-else-if="section.type === 'h3-pre'">
              <h3>
                <pre>{{section.content}}</pre>
              </h3>
            </template>

            <template v-else-if="section.type === 'para-steps'">
              <p class="indent" v-html="step" v-for="(step, ind) in section.steps" v-bind:key="ind"></p>
            </template>
          </div>
        </div>
      </template>
      <template v-else-if="content.type === 'image'">
        <div class="text-center">
          <img :src="getImgUrl(content.src)" alt="Course Detail Image" />
        </div>
      </template>
    </div>

    <div>
      <div class="footer-container">
        <section class="welcome">
          <figure class="welcome-profile">
            <a href>
              <img src="../assets/images/sameer-Lead.jpeg" alt />
            </a>
          </figure>
        </section>
      </div>
      <div style="display: flex;">
        <div class="message-content">
          <div class="message-header">Share if your friends Dont know.</div>Make people learn for free. That is what we are working on.
          <div class="row option-container">
            <h2 style="margin-top: 15px;">
              <b>Share</b>:
            </h2>
            <a
              target="_blank"
              href="https://wa.me//send?text=https://www.evenidontknow.com/Understading-Android-Sqlite.html"
              tabindex="0"
              class="goal-option btn-outline-primary"
              data-choice="certify"
            >
              <img style="height:40px;width:40px" src="../assets/images/whatsapp.svg" alt />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/shareArticle?url=https://www.evenidontknow.com/Understading-Android-Sqlite.html"
              tabindex="0"
              class="goal-option btn-outline-primary"
              data-choice="certify"
            >
              <img style="height:40px;width:40px" src="../assets/images/linkedin.svg" alt />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.evenidontknow.com/Understading-Android-Sqlite.html"
              tabindex="0"
              class="goal-option btn-outline-primary"
              data-choice="certify"
            >
              <img style="height:40px;width:40px" src="../assets/images/facebook.svg" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
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