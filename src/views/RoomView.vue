<template>
  <div>
    <h1>Welcome to room: {{ id }}</h1>
    <div class="row">
      <UserInfoVue />
      <!-- <UserInfoVue />
      <UserInfoVue />
      <UserInfoVue />
      <UserInfoVue />
      <UserInfoVue /> -->
    </div>
    <!-- <button class="btn btn-success" @click="() => warn">click</button> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import UserInfoVue from "../components/User/UserInfoVue.vue";
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    UserInfoVue,
  },
  method: {
    createBtn: () => {
      console.log("ok");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    warn: function () {
      // now we have access to the native event
      console.log(2);
    },
  },
});
</script>
