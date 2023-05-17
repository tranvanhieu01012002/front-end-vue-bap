<template>
  <div class="question d-flex">
    <div class="left img-cover-question d-flex justify-content-center col-5">
      <QuestionNumber><slot name="question"></slot></QuestionNumber>
    </div>
    <div class="d-flex justify-content-between flex-column col-7">
      <div class="team">
        <a class="link" href="#"><slot name="name"></slot></a>
      </div>
      <div class="bottom-info d-flex justify-content-around">
        <div class="author"><slot name="author"></slot></div>
        <div class="no-of-player"><strong>4 players</strong></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import QuestionNumber from "./QuestionNumber.vue";
export default defineComponent({
  components: {
    QuestionNumber,
  },
});
</script>
<style scoped>
.question {
  /* background-color: aqua; */
  height: 90px;
  width: 100%;
  border-radius: 2px;
  border: 1px solid #cccccc;
  margin-bottom: 10px;
}
.left {
  height: 100%;
}
.bottom-info {
  background-color: #f2f2f2;
  height: 20px;
  width: 100%;
  font-size: 13px;
}
.team {
  padding-left: 10px;
}
</style>
