<template>
  <ul class="ul d-flex">
    <template v-for="(item, index) in listFilter" :key="index">
      <li :class="item.isActive ? 'active' : ''">
        <div>{{ item.content }}</div>
      </li>
    </template>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      listFilter: [
        {
          content: "Recent",
          isActive: true,
        },
        {
          content: "Recent",
          isActive: false,
        },
        {
          content: "Recent",
          isActive: false,
        },
        {
          content: "Recent",
          isActive: false,
        },
      ],
    };
  },
});
</script>
<style scoped>
li {
  padding: 5px 20px;
  border-left: 1px solid #000;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  background-color: #cccccc;
}
li:last-child {
  border-right: 1px solid #000;
}
.active {
  background-color: #fff;
}
</style>
