<template>
  <div>
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <div>At School</div>
      <b-card-text>
        Millions of teachers and students unleash the magic of learning with
        Kahoot! Introduce new topics, review, thrill, and collect data for
        formative assessment.
      </b-card-text>

      <b-button href="#" variant="success">Go somewhere</b-button>
    </b-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped>
.card:hover {
  background-color: var(--primary-color);
  color: #fff;
}
</style>
