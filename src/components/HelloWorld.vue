<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Hello sir. {{ user }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useUserStore } from "@/store/userStore";
import UserRepository from "@/helpers/axios/UserRepository";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    ...mapState(useUserStore, { user: "getUsername" }),
  },
  methods: {
    ...mapActions(useUserStore, ["updateUser"]),
    async getUserInfo() {
      const user = new UserRepository();
      const { data } = await user.profile();
      this.updateUser(data);
    },
  },
  created() {
    this.user ?? this.getUserInfo();
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
