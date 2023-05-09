<template>
  <div>
    <div class="d-flex justify-content-center">
      <b-form
        class="row"
        @submit="(e: any) => onSubmit(e)"
        @reset="() => onReset()"
      >
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
          <login-by-google type="button" class="m-2 col-3" />
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
    <button class="btn btn-warning" @click="registerRedirect">
      register now
    </button>
  </div>
  <BasicModal>
    <p>oh wrong password or email</p>
  </BasicModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useUserStore, useAuthStore } from "@/store";
import UserRepository from "@/helpers/axios/UserRepository";
import LoginByGoogle from "../LoginByGoogle.vue";
import axios from "axios";
import BasicModal from "../Modal/BasicModal.vue";
import nProgress from "nprogress";
import { authInputMixin, modalMixin } from "@/mixins";

export default defineComponent({
  mixins: [authInputMixin, modalMixin],
  components: {
    LoginByGoogle,
    BasicModal,
  },
  methods: {
    onSubmit: async function (event: Event) {
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
        const { redirect } = this.$route.query;
        const routeRedirect = redirect ? redirect.toString() : "/";
        return this.$router.push(routeRedirect);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            this.resetFormAfterSubmit();
          }
        } else {
          throw new Error("different error than axios");
        }
      }
    },
    onReset: function () {
      this.email = "";
      this.password = "";
    },
    resetFormAfterSubmit() {
      this.onReset();
      this.openModal("Login info");
      nProgress.done();
    },
    registerRedirect() {
      return this.$router.push({ name: "register" });
    },
    ...mapActions(useAuthStore, { setLogin: "setIsLogin" }),
    ...mapActions(useUserStore, { updateUser: "updateUser" }),
  },
  computed: {
    ...mapState(useAuthStore, { statusLogin: "isLogin" }),
  },
});
</script>
