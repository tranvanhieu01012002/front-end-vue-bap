<template>
  <div class="container">
    <h1>list Users</h1>
    <UserTable />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import UserTable from "@/components/Tables/UserTable.vue";
export default defineComponent({
  name: "UserView",
  components: { UserTable },
});
</script>
