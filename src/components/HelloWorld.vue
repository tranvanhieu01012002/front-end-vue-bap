<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Hello sir. {{ user }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useUserStore } from "@/store/userStore";
import { useAuthStore } from "@/store/authStore";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      if (!this.isLogin) {
        this.$router.push({ path: "/login" });
      }
    },
  },
  computed: {
    ...mapState(useUserStore, { user: "getUsername" }),
    ...mapState(useAuthStore, { isLogin: "isLogin" }),
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
