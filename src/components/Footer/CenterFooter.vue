<template>
  <div class="container-div-max">
    <hr />
    <div class="d-flex justify-content-between">
      <div class="d-flex center">
        <div class="border-text d-flex">
          <div class="">Follow by</div>
          <div @click="showBar" class="caret-icon">
            <font-awesome-icon :icon="['fas', 'caret-down']" />
          </div>
        </div>
        <ul ref="show" class="list-social">
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
<script setup lang="ts">
import { ref } from "vue";
import SocialMedia from "./SocialMedia.vue";
const show = ref<HTMLElement | null>();
const showBar = () => {
  show.value?.classList.toggle("list-social");
  console.log(222);
};
</script>
<style scoped>
.list-social {
  display: flex;
}
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
@media screen and (max-width: 600px) {
  .right-item img {
    width: 20px;
  }
  .list-social {
    width: 200px;
  }
}
</style>
