<template>
  <div class="container-div">
    <div class="header-text d-flex">
      <div class="">Footer item</div>
      <div @click="showBar" :class="['caret-icon']">
        <font-awesome-icon
          :icon="['fas', isShow ? 'caret-up' : 'caret-down']"
        />
      </div>
    </div>
    <div class="footer-dark">
      <div class="show-items">
        <ul class="">
          <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const list = ref([
  "Company",
  "Leadership",
  "Careers",
  "Open positions",
  "Press",
  "Investor relations",
  "Company events",
  "Contact us",
]);
const isShow = ref(false);
const showBar = () => {
  isShow.value = !isShow.value;
};
</script>
<style scoped>
.show-items,
.show-active {
  display: flex;
}
@media screen and (max-width: 650px) {
  .show-items {
    display: none;
  }
}
.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}
li {
  padding-top: 20px;
}
.header-text {
  font-weight: bolder;
}
</style>
