<template>
  <div class="container-div">
    <div class="row">
      <FooterItem class="col-lg-3 col-md-6" />
      <FooterItem class="col-lg-3 col-md-6" />
      <FooterItem class="col-lg-3 col-md-6" />
      <FooterItem class="col-lg-3 col-md-6" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FooterItem from "./FooterItem.vue";
export default defineComponent({
  components: {
    FooterItem,
  },
});
</script>
