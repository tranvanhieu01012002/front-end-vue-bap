<template>
  <div
    class="not-found d-flex flex-column align-items-center justify-content-center"
  >
    <div class="content d-flex flex-column justify-content-center">
      <img src="@/assets/images/empty-create-set-question.svg" />
      <p>It looks very empty in here, go ahead and create a kahoot.</p>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary">Create</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped>
.not-found {
  width: 100%;
  height: 400px;
  background-color: #fff;
  border: 2px dashed #b2b2b2;
}
</style>
