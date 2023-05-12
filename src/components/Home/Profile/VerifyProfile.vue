<template>
  <div class="bg profile-child-block padding-top-verify">
    <div class="top d-flex">
      <font-awesome-icon
        class="icon-shield"
        :icon="['fass', 'shield-halved']"
      />
      <div>Verified profile</div>
      <font-awesome-icon
        class="icons icon-exclamation"
        :icon="['fas', 'circle-exclamation']"
      />
    </div>
    <div class="center">
      Become a Verified creator! Offer your learning resources for sale & join a
      global community.
    </div>
    <div class="bottom">
      <button class="btn btn-primary">
        <strong>Go to Application</strong>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped>
.icons {
  padding-top: 5px;
}
.icon-shield {
  font-size: 25px;
  padding-right: 20px;
  padding-top: 2px;
}
.icon-exclamation {
  padding-left: 10px;
}
.center {
  padding: 10px 0px;
}
.btn-primary {
  font-size: 13px;
}
.padding-top-verify {
  padding: 20px 18px;
}
</style>
