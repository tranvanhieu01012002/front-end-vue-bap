<template>
  <div class="bg container">
    <div class="bg-component">
      <h2 class="">Settings</h2>
      <div class="row">
        <UserInformation />
      </div>
    </div>
  </div>
</template>
<!-- test write by composition API -->
<script setup lang="ts">
import UserRepository from "@/helpers/axios/UserRepository";
import type UserInfo from "@/interfaces/UserInfo";
import UserInformation from "@/components/DetailUser/UserInformation.vue";
import { reactive, defineProps, onMounted } from "vue";
const props = defineProps({
  id: { type: String, required: true },
});
const user: UserInfo = reactive({ id: "", name: "", email: "" });
onMounted(async () => {
  const userRepository = new UserRepository(`users/${props.id}`);
  const { data } = await userRepository.get();
  user.id = data.id;
  user.name = data.name;
  user.email = data.email;
});
</script>
<style scoped>
.bg {
  height: 94vh;
  width: 100%;
}
</style>
