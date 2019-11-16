<template>
  <div>
    <div class="coverHeader">
      <img src="../assets/images/logo.svg" alt="Logo" class="logo" />
    </div>
    <div class="coverBody">
      <div class="coverContainer">
        <!-- Tutorial Cards -->
        <tutorial-card
          v-for="tutorial in tutorials"
          v-bind:key="tutorial.id"
          v-bind:tutorial="tutorial"
        ></tutorial-card>
        <!-- End of tutorial cards -->
        
        <!-- Donate us section -->

        <!-- <div class="text-center">
          <div class="donate-us app-card">
            <img src="../assets/images/donate.svg" alt="Donate" />
            <div class="app-card-header">
              <div class="app-card-title">Donate</div>
              <div class="app-card-subhead">Donate us brighten some lives</div>
            </div>
          </div>
        </div> -->
        
        <!-- End of dontate us section -->
      </div>
    </div>
  </div>
</template>

<script>
import TutorialCard from "../components/TutorialCard";
import tutorials from "../staticData/tutorials";
export default {
  components: {
    "tutorial-card": TutorialCard
  },
  data() {
    return {
      tutorials
    };
  }
};
</script>

<style>
</style>