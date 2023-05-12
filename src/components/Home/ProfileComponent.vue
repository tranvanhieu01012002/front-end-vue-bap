<template>
  <div class="p-2">
    <div class="container-profile-component">
      <div class="content">
        <div>
          <div class="name">
            <strong>{{ name }}</strong>
          </div>
          <div>
            <strong>{{ showEmail }}</strong>
          </div>
        </div>
        <div class="center">
          <div class="d-flex justify-content-end">
            <img src="@/assets/images/woodchuck-7ccdb70a.svg" />
          </div>
          <TopContent />
          <PlanComponent>
            <template #left> Plan: </template>
            <template #right><a href="#">Upgrade</a> </template>
          </PlanComponent>
          <PlanComponent>
            <template #left> My interests </template>
            <template #right><a href="#">Add interests</a> </template>
          </PlanComponent>
          <VerifyProfile />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TopContent from "./Profile/TopContent.vue";
import PlanComponent from "./Profile/PlanComponent.vue";
import VerifyProfile from "./Profile/VerifyProfile.vue";

export default defineComponent({
  data() {
    return {
      name: "hieu",
      email: "hieu.tran23@student.passerellesnumeriques.org",
    };
  },
  components: {
    TopContent,
    PlanComponent,
    VerifyProfile,
  },
  computed: {
    showEmail(): string {
      return this.email.split("@")[0];
    },
  },
});
</script>
<style scoped>
.content {
  width: 100%;
  height: 100%;
}
.name {
  color: #461893;
}
</style>
