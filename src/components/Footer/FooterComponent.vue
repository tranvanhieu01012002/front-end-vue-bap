<template>
  <div class="footer padding-t">
    <TopFooter />
    <CenterFooter />
    <BottomFooter />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TopFooter from "./TopFooter.vue";
import CenterFooter from "./CenterFooter.vue";
import BottomFooter from "./BottomFooter.vue";
export default defineComponent({
  components: {
    TopFooter,
    CenterFooter,
    BottomFooter,
  },
});
</script>
<style scoped>
.footer {
  /* height: 76vh; */
  background-color: #333333;
  color: #fff;
}
</style>
