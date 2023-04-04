<template>
  <div class="container">
    <b-form @submit="(e) => onSubmit(e)" @reset="() => onReset()">
      <div class="row">
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
      </div>
      <div class="row">
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
      </div>
      <div>
        <b-button type="submit" class="m-2" variant="primary">Submit</b-button>
        <b-button type="reset" class="m-2" variant="danger">Reset</b-button>
      </div>
    </b-form>
    <div>
      Your account: {{ email }} <br />
      Your password: {{ password }}
    </div>
  </div>
</template>
<script>
import UserRepository from "@/helpers/axios/UserRepository";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit: async function (event) {
      event.preventDefault();
      const formPost = new UserRepository("auth/login");
      const dataPost = {
        email: this.email,
        password: this.password,
      };
      try {
        const res = await formPost.login(dataPost);
        localStorage.setItem("token", res.data.token);
        this.$router.push({ path: "/" });
      } catch (error) {
        console.log(error);
        alert("sai r cu ");
      }
    },
    onReset: function () {
      this.email = "";
      this.password = "";
    },
  },
};
</script>
