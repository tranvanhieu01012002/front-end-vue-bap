<template>
  <div>
    <b-table
      sort-by="name"
      striped
      hover
      :items="users"
      :fields="fields"
    ></b-table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import UserRepository from "@/helpers/axios/UserRepository";
import BootstrapTableField from "@/interfaces/BootstrapTableField";
import UserInfo from "@/interfaces/UserInfo";

export default defineComponent({
  data() {
    return {
      fields: [
        {
          key: "id",
          sortable: true,
        },
        {
          key: "name",
          sortable: false,
        },
        {
          key: "email",
          sortable: false,
        },
      ] as BootstrapTableField[],
      users: [] as UserInfo[],
    };
  },
  methods: {
    async getUsers(): Promise<void> {
      const userRepository = new UserRepository();
      const { data } = await userRepository.getAllUser();
      this.users = data.data;
    },
  },
  created() {
    this.getUsers();
  },
});
</script>
