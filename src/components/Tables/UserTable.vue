<template>
  <div>
    <p>Current page is: {{ currentPage }}</p>
    <b-table
      sort-by="name"
      striped
      hover
      :items="users"
      :fields="fields"
      @row-clicked="(item, index, event) => onRowClicked(item)"
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
      currentPage: 1,
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
      userRepository: new UserRepository("users"),
    };
  },
  watch: {
    currentPage: {
      handler(newPage) {
        this.getUsers(newPage);
      },
    },
  },
  methods: {
    async getUsers(page: number): Promise<void> {
      try {
        const { data } = await this.userRepository.getAtPage(page);
        this.users = data.data;
        this.currentPage = data.current_page;
        this.perPage = data.per_page;
        this.rows = data.total;
        this.$router.push({ query: { page } });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error.response.status);
        this.$router.push({ path: "/login" });
      }
    },
    onRowClicked(item: UserInfo): void {
      this.$router.push({ name: "user detail", params: { id: item.id } });
    },
  },
  mounted() {
    this.getUsers(this.currentPage);
  },
  // updated() {
  //   console.log(this.currentPage);
  // },
});
</script>
