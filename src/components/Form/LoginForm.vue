<template>
  <div>
    <div class="d-flex justify-content-center">
      <b-form class="row" @submit="(e) => onSubmit(e)" @reset="() => onReset()">
        <b-form-group
          class="col-6"
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="col-6"
          id="input-group-2"
          label="Your password:"
          label-for="input-2"
        >
          <b-form-input
            type="password"
            id="input-2"
            v-model="password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>
        <div class="d-flex justify-content-between">
          <login-by-google class="m-2 col-3" />
          <b-button type="submit" class="m-2 col-3" variant="success"
            >Submit</b-button
          >
          <b-button type="reset" class="m-2 col-3" variant="danger"
            >Reset</b-button
          >
        </div>
      </b-form>
    </div>
    <div>
      Your account: {{ email }} <br />
      Your password: {{ password }}
      {{ statusLogin }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/store/authStore";
import { useUserStore } from "@/store/userStore";
import UserRepository from "@/helpers/axios/UserRepository";
import LoginByGoogle from "../LoginByGoogle.vue";
export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    LoginByGoogle,
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: async function (event: any) {
      event.preventDefault();
      const formPost = new UserRepository("auth/login");
      const dataPost = {
        email: this.email,
        password: this.password,
      };
      try {
        const res = await formPost.login(dataPost);
        localStorage.setItem("token", res.data.token);
        this.setLogin(!this.statusLogin);
        return this.$router.push({ path: "/" });
      } catch (error) {
        console.log(error);
        alert("sai r cu ");
      }
    },
    onReset: function () {
      this.email = "";
      this.password = "";
    },
    ...mapActions(useAuthStore, { setLogin: "setIsLogin" }),
    ...mapActions(useUserStore, { updateUser: "updateUser" }),
  },
  computed: {
    ...mapState(useAuthStore, { statusLogin: "isLogin" }),
  },
});
</script>
