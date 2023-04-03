<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset">
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
            v-model="form.email"
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
            v-model="form.password"
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
      Your account: {{ form.email }} <br />
      Your password: {{ form.password }}
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit: function (event: any) {
      event.preventDefault();
      console.log(this.form.email, this.form.password);
      this.$router.push({ path: "/" });
    },
    onReset: function (event: any) {
      this.resetData();
    },
    resetData: function () {
      this.form.email = "";
      this.form.password = "";
    },
  },
};
</script>
