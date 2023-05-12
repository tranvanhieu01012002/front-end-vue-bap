<template>
  <div class="p-2">
    <div class="container-profile-component">
      <div class="head">
        <div class="head-text"><strong>My Kahoot</strong></div>
      </div>
      <div class="center">
        <MyKahootQuestion />
        <MyKahootQuestion />
        <MyKahootQuestion />
      </div>
      <div class="footer text-center">
        <div class="view"><a href="#" class="link">See all (4)</a></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MyKahootQuestion from "./MyKahoot/MyKahootQuestion.vue";
export default defineComponent({
  components: {
    MyKahootQuestion,
  },
});
</script>
<style scoped>
.head {
  border-bottom: 0.25px solid #898989;
}
.head-text {
  /* background-color: aquamarine; */
  padding-bottom: 10px;
  width: 100px;
  border-bottom: 3px solid #1768ce;
}
.center {
  padding-top: 15px;
}
.footer {
  padding-bottom: 10px;
}
</style>
