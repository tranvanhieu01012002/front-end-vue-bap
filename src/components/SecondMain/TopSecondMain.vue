<template>
  <CenterText>
    <h1>How does Kahoot! work?</h1>
  </CenterText>
  <div class="row">
    <CardSecondMain />
    <CardSecondMain />
    <CardSecondMain />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CardSecondMain from "./CardSecondMain.vue";
import CenterText from "./CenterText.vue";
export default defineComponent({
  components: {
    CardSecondMain,
    CenterText,
  },
});
</script>
