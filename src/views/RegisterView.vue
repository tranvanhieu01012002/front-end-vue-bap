<template>
  <div>Register view</div>
  <div>
    <div class="d-flex justify-content-center">
      <b-form @submit="onSubmit">
        <b-form-group class="row" id="input-group-1" label-for="input-1">
          <label>Enter name: <spam class="red-color">*</spam></label>
          <b-form-input
            id="input-1"
            v-model="name"
            type="text"
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="row"
          id="input-group-2"
          label-for="input-2"
          description="We'll never share your email with anyone else."
        >
          <label>Email address: <spam class="red-color">*</spam></label>
          <b-form-input
            id="input-2"
            v-model="email"
            type="email"
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="row" id="input-group-3" label-for="input-3">
          <label>Your password:<spam class="red-color">*</spam></label>
          <b-form-input
            type="password"
            id="input-3"
            v-model="password"
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="row" id="input-group-4" label-for="input-4">
          <label>Your confirm password:<spam class="red-color">*</spam></label>
          <b-form-input
            type="password"
            id="input-4"
            v-model="confirmPassword"
            placeholder="Enter confirm password"
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
  </div>
  <BasicModal> </BasicModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BasicModal from "@/components/Modal/BasicModal.vue";
import { authInputMixin, modalMixin } from "@/mixins";
import { AuthService } from "../services";
export default defineComponent({
  mixins: [authInputMixin, modalMixin],
  data() {
    return {
      name: "",
      confirmPassword: "",
    };
  },
  components: {
    BasicModal,
  },
  methods: {
    onSubmit: function () {
      if (this.isErrorNullFields()) {
        this.openModal("oh some fields are null");
      } else if (this.isNotMatchPassword()) {
        this.openModal("oh Not match password");
      } else {
        this.register();
      }
    },
    isErrorNullFields: function (): boolean {
      if (
        this.email === "" &&
        this.password === "" &&
        this.name === "" &&
        this.confirmPassword === ""
      ) {
        return true;
      } else return false;
    },
    isNotMatchPassword: function (): boolean {
      if (this.password === this.confirmPassword) {
        return false;
      } else return true;
    },
    register: async function () {
      const authService = new AuthService();
      const response = await authService.register({
        id: "",
        name: this.name,
        email: this.email,
        password: this.password,
      });
      if (response.status === "success") {
        console.log(response.id);
        this.$router.push({ name: "confirm", params: { id: response.id } });
      } else {
        this.openModal(response.message);
      }
    },
  },
});
</script>
<style scoped>
.red-color {
  color: #ea0e0e;
}
</style>
