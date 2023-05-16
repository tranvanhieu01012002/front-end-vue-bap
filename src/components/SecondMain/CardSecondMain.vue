<template>
  <div class="col-lg-4 col-sm-12">
    <div class="p-3 d-flex align-content-end flex-wrap">
      <div class="top">
        <img
          src="https://kahoot.com/wp-content/themes/kahoot2017/assets/img/placeholder/illu_host2b.svg"
        />
      </div>
      <div class="text-center">
        <h4>Create</h4>
        <div>
          It only takes minutes to create a learning game or trivia quiz on any
          topic, in any language.
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped>
.p-3 {
  border: 3px solid #9b9999;
  height: 200px;
  box-shadow: 10px 5px 5px rgb(79, 78, 78);
  border-radius: 5px;
  background-image: linear-gradient(
    rgba(0, 0, 255, 0.5),
    rgba(255, 255, 0, 0.5)
  );
  color: #fff;
}
.top {
  position: relative;
}
img {
  width: 200px;
  bottom: -65px;
  position: absolute;
  z-index: -1;
}
.text {
  bottom: 2px;
}
</style>
