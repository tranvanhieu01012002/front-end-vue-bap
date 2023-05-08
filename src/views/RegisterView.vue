<template>
  <div>Register view</div>
  <div>
    <div class="d-flex justify-content-center">
      <b-form>
        <b-form-group
          class="row"
          id="input-group-1"
          label="Enter name:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="name"
            type="text"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="row"
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
          class="row"
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
        <b-form-group
          class="row"
          id="input-group-2"
          label="Your confirm password:"
          label-for="input-2"
        >
          <b-form-input
            type="password"
            id="input-2"
            v-model="confirmPassword"
            placeholder="Enter confirm password"
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
  </div>
  <BasicModal>
    <p>opp some things when wrong</p>
  </BasicModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BasicModal from "@/components/Modal/BasicModal.vue";

import { authInputMixin } from "@/mixins";
export default defineComponent({
  mixins: [authInputMixin],
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
    onsubmit: function () {},
    validateField(): boolean {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.name !== "" &&
        this.confirmPassword !== "" &&
        this.password === this.confirmPassword
      ) {
        return true;
      } else return false;
    },
  },
});
</script>
