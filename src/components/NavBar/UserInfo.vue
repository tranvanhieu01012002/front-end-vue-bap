<template>
  <b-nav-item-dropdown right>
    <!-- Using 'button-ontent' slot -->
    <template #button-content>
      <em>User</em>
    </template>
    <div class="text-center">User: {{ user }}</div>
    <b-dropdown-item href="#">Profile</b-dropdown-item>
    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
  </b-nav-item-dropdown>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { userInfoMixin } from "@/mixins";
export default defineComponent({
  mixins: [userInfoMixin],
});
</script>
