<template>
  <div>
    <h1>Welcome to room: {{ id }}</h1>
    <div class="row">
      <UserInfoVue />
      <UserInfoVue />
      <UserInfoVue />
      <UserInfoVue />
      <UserInfoVue />
      <UserInfoVue />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import UserInfoVue from "../components/User/UserInfoVue.vue";
export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    UserInfoVue,
  },
});
</script>
