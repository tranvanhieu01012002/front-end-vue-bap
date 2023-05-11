<template>
  <div class="container-div">
    <div class="header-text">Footer item</div>
    <div class="footer-dark">
      <ul>
        <li>Company</li>
        <li>Leadership</li>
        <li>Careers</li>
        <li>Open positions</li>
        <li>Press</li>
        <li>Investor relations</li>
        <li>Company events</li>
        <li>Contact us</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped>
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
