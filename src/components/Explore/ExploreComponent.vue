<template>
  <div class="container-div">
    <CenterText>
      <h2>Explore other apps in the Kahoot! family</h2>
    </CenterText>
    <div class="row d-flex justify-content-center">
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CenterText from "../SecondMain/CenterText.vue";
import ExploreCard from "./ExploreCard.vue";
export default defineComponent({
  components: {
    CenterText,
    ExploreCard,
  },
});
</script>
