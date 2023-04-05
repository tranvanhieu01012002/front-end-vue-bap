<template>
  <div>
    <b-table
      sort-by="name"
      striped
      hover
      :items="users"
      :fields="fields"
    ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
    ></b-pagination>
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
      currentPage: 0,
      perPage: 0,
      rows: 0,
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
      try {
        const { data } = await userRepository.getAllUser();
        this.users = data.data;
        this.currentPage = data.current_page;
        this.perPage = data.per_page;
        this.rows = data.total;
      } catch (error: any) {
        console.log(error.response.status);
        this.$router.push({ path: "/login" });
      }
    },
  },
  created() {
    this.getUsers();
  },
});
</script>
