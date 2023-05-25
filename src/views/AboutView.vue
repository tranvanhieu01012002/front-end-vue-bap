<template>
  <div class="home bg">
    <TopMain />
    <SecondMain />
    <CountUser />
    <ExploreComponent />
  </div>
  <FooterComponent />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TopMain from "@/components/TopMain/TopMain.vue";
import SecondMain from "@/components/SecondMain/SecondMain.vue";
import CountUser from "@/components/CountUser/CountUser.vue";
import ExploreComponent from "@/components/Explore/ExploreComponent.vue";
import FooterComponent from "@/components/Footer/FooterComponent.vue";
export default defineComponent({
  components: {
    TopMain,
    SecondMain,
    CountUser,
    ExploreComponent,
    FooterComponent,
  },
});
</script>
