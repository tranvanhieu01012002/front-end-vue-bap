<template>
  <div class="row">
    <component ref="el" :is="lists" class="ul d-flex col-4">
      <template v-for="(item, index) in listFilter" :key="index">
        <component
          :is="itemList"
          class="li"
          :class="item.isActive ? 'active' : ''"
        >
          <button @click="() => choseTab(index)">
            {{ item.content }}
          </button>
        </component>
      </template>
    </component>
    <SearchBar />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useSetQuestionStore } from "@/store";
import { useResizeObserver } from "@vueuse/core";
import SearchBar from "./SearchBar.vue";
import { useGetSetQuestion } from "@/hooks";
const listFilter = ref([
  {
    content: "Recent",
    isActive: true,
  },
  {
    content: "Share with me",
    isActive: false,
  },
  {
    content: "Favorite",
    isActive: false,
  },
  {
    content: "Recent",
    isActive: false,
  },
]);
const el = ref();
const lists = ref("ul");
const itemList = ref("li");
const { getFavorite } = useSetQuestionStore();
const { getData } = useGetSetQuestion();
const choseTab = async (index: number) => {
  listFilter.value = listFilter.value.map((item, indexArr) => {
    if (indexArr === index) {
      switch (item.content) {
        case "Favorite":
          getFavorite();
          break;
        default:
          getData();
          break;
      }
      return { ...item, isActive: true };
    } else return { ...item, isActive: false };
  });
};
useResizeObserver(el, (entries) => {
  const entry = entries[0];
  const { width } = entry.contentRect;
  if (width <= 350) {
    lists.value = "select";
    itemList.value = "option";
  } else {
    lists.value = "ul";
    itemList.value = "li";
  }
});
</script>
<style scoped>
.li {
  padding: 6px 20px;
  border-left: 1px solid #000;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  font-size: 14px;
  font-weight: bold;
  color: var(--text-primary-color);
}

li:last-child {
  border-right: 1px solid #000;
}

.active {
  background-color: #fff;
}

button {
  all: unset;
  cursor: pointer;
}
</style>
