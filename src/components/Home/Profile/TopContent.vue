<template>
  <div class="top-content bg-component">
    <div class="d-flex justify-content-between top-content-info">
      <div class="left">
        <div class="d-flex">
          <div>Student pass</div>
          <font-awesome-icon
            class="icon-question"
            icon="fa-regular fa-circle-question"
          />
        </div>
        <div>1 of 1 available</div>
      </div>
      <div class="right">
        <button class="btn btn-success">Try out</button>
      </div>
    </div>
    <div class="bottom-content-info d-flex">
      <font-awesome-icon class="icon-start" :icon="['fas', 'star']" />
      <div class="text">Upgrade to use this feature. Get up to 250 passes!</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped>
.top-content {
  /* height: 500px; */
  border-top: 5px solid #1768ce;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 18px;
}
.icon-question {
  color: #6e6e6e;
  font-size: 25px;
  /* padding-left: 20px; */
  padding: 0px 10px;
}
.top-content-info {
  padding: 10px 0px;
  border-bottom: 1px dotted #424141;
}
.icon-start {
  color: #1c8282;
  padding: 5px;
}
.bottom-content-info {
  margin-top: 10px;
}
</style>
