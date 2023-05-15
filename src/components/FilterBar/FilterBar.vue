<template>
  <div class="row">
    <ul class="ul d-flex col-4">
      <template v-for="(item, index) in listFilter" :key="index">
        <li :class="item.isActive ? 'active' : ''">
          <button @click="() => choseTab(index)">
            {{ item.content }}
          </button>
        </li>
      </template>
    </ul>
    <SearchBar />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "./SearchBar.vue";
export default defineComponent({
  data() {
    return {
      listFilter: [
        {
          content: "Recent",
          isActive: true,
        },
        {
          content: "Share with me",
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
  components: {
    SearchBar,
  },
  methods: {
    choseTab: function (index: number) {
      this.listFilter = this.listFilter.map((item, indexArr) => {
        if (indexArr === index) {
          return { ...item, isActive: true };
        } else return { ...item, isActive: false };
      });
    },
  },
});
</script>
<style scoped>
li {
  padding: 5px 20px;
  border-left: 1px solid #000;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  font-size: 13px;
  font-weight: bold;
  color: ;
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
