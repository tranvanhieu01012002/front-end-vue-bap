<template>
  <div>
    <NavLink />
  </div>
  <div>
    <slot></slot>
  </div>
  <!-- <router-view /> -->
</template>
<script setup lang="ts">
import NavLink from "@/components/NavLink.vue";
</script>
