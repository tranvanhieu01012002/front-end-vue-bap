<template>
  <li class="d-flex">
    <img src="@/assets/images/twitter.png" />
    <div class="text">Twitter</div>
  </li>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped>
img {
  width: 35px;
}
.text {
  padding-top: 5px;
  padding-left: 20px;
}
.d-flex {
  margin-right: 20px;
}
@media screen and (max-width: 500px) {
  .text {
    font-size: 10px;
  }
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
