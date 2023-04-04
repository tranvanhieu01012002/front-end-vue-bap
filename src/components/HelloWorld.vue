<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Hello sir. {{ name }}</h2>
  </div>
</template>

<script lang="ts">
import UserRepository from "@/helpers/axios/UserRepository";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      name: "",
    };
  },
  created() {
    this.getProfile();
  },
  methods: {
    async getProfile() {
      const user = new UserRepository();
      try {
        const { data } = await user.profile();
        console.log("call api...");
        this.name = data.name;
      } catch (error) {
        this.$router.push({ path: "/login" });
      }
    },
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
