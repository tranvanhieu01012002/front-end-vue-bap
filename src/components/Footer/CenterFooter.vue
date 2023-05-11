<template>
  <div class="container-div-max">
    <hr />
    <div class="d-flex justify-content-between">
      <div class="d-flex center">
        <div class="border-text">Follow by</div>
        <ul class="ul d-flex">
          <SocialMedia />
          <SocialMedia />
          <SocialMedia />
          <SocialMedia />
        </ul>
      </div>
      <div class="right-item">
        <img src="@/assets/images/microsoft-edu-partner-badge.svg" />
        <img src="@/assets/images/google-edu-partner-badge.svg" />
      </div>
    </div>
    <hr />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SocialMedia from "./SocialMedia.vue";
export default defineComponent({
  components: {
    SocialMedia,
  },
});
</script>
<style scoped>
.center {
  padding-top: 10px;
}
img {
  background-color: #fff;
  margin-left: 2px;
}
.border-text {
  font-weight: bolder;
}
</style>
