<template>
  <div class="col-4">
    <form class="search">
      <div class="d-flex">
        <label class="icon"
          ><font-awesome-icon :icon="['fas', 'magnifying-glass']"
        /></label>
        <input placeholder="Search" class="input" />
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped>
.search {
  background-color: #fff;
  border: 1px solid #cccc;
}
.input {
  all: unset;
  width: 100%;
  border-left: 0px;
}
.icon {
  padding: 2px 10px;
  font-size: 20px;
  /* border: 1px solid #cccc; */
  border-right: 0px;
}
</style>
