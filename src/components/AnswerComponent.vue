<template>
  <div class="answer d-flex align-content-center flex-wrap">
    <div class="shape shape-diamond"></div>
    <div class="text align-middle">fgasdfsadfdsfsdfsdf</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped>
.answer {
  background-color: #e21b3c;
  height: 76px;
  width: 335px;
  border-radius: 10px;
  box-shadow: 0px 4px 5px 0px #8b0a0a;
  color: #fff;
  font-size: 20px;
}
.shape {
  margin: 0px 10px;
}
.shape-cycle {
  border-radius: 50%;
  background-color: #fff;
  width: 40px;
  height: 40px;
}

.shape-square {
  background-color: #fff;
  width: 40px;
  height: 40px;
}

.shape-rectangle {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 35px solid #fff;
}

.shape-diamond {
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-bottom-color: #fff;
  position: relative;
  top: -20px;
}
.shape-diamond:after {
  content: "";
  position: absolute;
  left: -20px;
  top: 20px;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-top-color: #fff;
}
</style>
