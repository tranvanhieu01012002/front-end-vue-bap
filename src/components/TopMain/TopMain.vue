<template>
  <div class="top-main">
    <div class="container-div">
      <div class="content d-flex">
        <div class="content-left">
          <div class="content-left-text">
            <h2>Kahoot fake game</h2>
            <div class="content-left-body">
              <p>
                Create, play and share learning games with the Kahoot! app for
                iOS, macOS & Android wherever you are!
              </p>
              <p>
                Make your lessons, presentations or gatherings more engaging
                with the Kahoot! app. Use Kahoot! to spark interaction with
                quizzes, polls, brainstorms, puzzles and slides.
              </p>
              <p>
                Unlock premium features to play with more people and get more
                question types!
              </p>
            </div>
            <button class="btn btn-success">Plan now</button>
          </div>
        </div>
        <div class="content-right">
          <img src="https://kahoot.com/files/2022/09/k-hero.png" />
        </div>
      </div>
      <ListAlertTopMain />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ListAlertTopMain from "./ListAlertTopMain.vue";
export default defineComponent({
  components: {
    ListAlertTopMain,
  },
});
</script>
<style scoped>
.top-main {
  background-color: var(--primary-color);
  height: 75vh;
  width: 100%;
  padding-top: var(--padding-top-main);
}
.container-div {
  width: 76vw;
  margin: 0px auto;
}
.content {
  height: 50vh;
  background-color: #46178f;
  color: #fff;
}
.content-left {
  padding: 8vh var(--padding-top-main) 0vh var(--padding-top-main);
  font-size: 20px;
}
.content-right {
  padding: 0vh var(--padding-top-main);
}
.content-right img {
  width: 100%;
}
</style>
