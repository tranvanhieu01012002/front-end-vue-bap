<template>
  <div class="question d-flex">
    <div class="left d-flex justify-content-center col-5">
      <div class="question-number"><strong>8 questions</strong></div>
    </div>
    <div class="d-flex justify-content-between flex-column col-7">
      <div class="team"><a class="link" href="#">SKY TEAM</a></div>
      <div class="bottom-info d-flex justify-content-around">
        <div class="author">Hieu zz</div>
        <div class="no-of-player"><strong>4 players</strong></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
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
  /* width: 110px; */
  background-color: #cccccc;
  background-image: url("@/assets/images/cover-question-kahoot.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  align-items: end;
}
.question-number {
  background-color: #4d4d4d;
  padding: 2px;
  margin-bottom: 5px;
  color: #fff;
  border-radius: 5px;
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
