<template>
  <div class="col-xxl-4 col-md-6 col-sm-12">
    <b-card
      border-variant="light"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2 bg-component"
    >
      <div>
        <div class="center-item">
          <img
            src="https://kahoot.com/files/2021/10/AppIcons3_DB-Numbers-1.png"
          />
          <h4>Kahoot!</h4>
        </div>
      </div>
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>
    </b-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped>
.center-item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

img {
  width: 120px;
  padding-bottom: 10px;
}
</style>
