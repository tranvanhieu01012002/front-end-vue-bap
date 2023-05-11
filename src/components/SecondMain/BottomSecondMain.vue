<template>
  <CenterText>
    <h2>Discover how the Kahoot! app can help you</h2>
  </CenterText>
  <div class="row d-flex justify-content-center">
    <CardBottomSecondMain class="card-bottom-second-main" />
    <CardBottomSecondMain class="card-bottom-second-main" />
    <CardBottomSecondMain class="card-bottom-second-main" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CenterText from "./CenterText.vue";
import CardBottomSecondMain from "./CardBottomSecondMain.vue";
export default defineComponent({
  components: {
    CenterText,
    CardBottomSecondMain,
  },
});
</script>
<style scoped>
.card-bottom-second-main:last-child:nth-child(3n + 1) {
  width: 100%;
}
</style>
