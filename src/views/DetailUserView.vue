<template>
  <div>Hello User:</div>
  <div>This is overview information</div>
  <br />
  <p>id: {{ user.id }}</p>
  <p>name: {{ user.name }}</p>
  <p>email: {{ user.email }}</p>
</template>
<!-- test write by composition API -->
<script setup lang="ts">
import UserRepository from "@/helpers/axios/UserRepository";
import type UserInfo from "@/interfaces/UserInfo";
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
