<template>
  <CenterText>
    <h2>Discover how the Kahoot! app can help you</h2>
  </CenterText>
  <div class="d-flex justify-content-between">
    <CardBottomSecondMain />
    <CardBottomSecondMain />
    <CardBottomSecondMain />
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
