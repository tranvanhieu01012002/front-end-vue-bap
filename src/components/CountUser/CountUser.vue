<template>
  <div class="count-user padding-top">
    <CenterText>
      <span>More</span>
      <h2>10000000</h2>
      <span>players a year</span>
    </CenterText>
    <div class="list-aw container-div">
      <div class="row">
        <AnswerComponent />
        <AnswerComponent />
        <AnswerComponent />
        <AnswerComponent />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CenterText from "../SecondMain/CenterText.vue";
import AnswerComponent from "../AnswerComponent.vue";
export default defineComponent({
  components: {
    CenterText,
    AnswerComponent,
  },
});
</script>
<style scoped>
.count-user {
  background-color: #f2f2f2;
  height: 30vh;
  margin-top: var(--padding-top-main);
}
</style>
