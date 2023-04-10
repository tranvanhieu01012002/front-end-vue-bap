<template>
  <div class="col-5">
    <div>Question view</div>
    <img
      src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"
      class="rounded mx-auto d-block"
      alt="..."
    />
    <div class="question-text">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam autem
      fugit, aperiam, ipsum veniam reprehenderit quasi rerum minima distinctio
      deserunt explicabo cumque! Dolorum accusantium odio cumque commodi
      doloremque facere facilis!
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped>
.col-5 {
  background-color: aqua;
  padding: 0px;
}
.question-text {
  background-color: rgb(220, 231, 19);
  padding: 10px 10px;
}
.mx-auto {
  width: 400px;
}
</style>
