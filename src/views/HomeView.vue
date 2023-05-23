<template>
  <div class="bg">
    <div class="container">
      <button @click="openToast" class="btn btn-success">start</button>
      <!-- <OpenGame /> -->
      <div class="row">
        <div class="col-xl-3 col-md-6 col-sm-12">
          <ProfileComponent />
        </div>
        <div class="col-xl-6 col-md-6 col-sm-12">
          <DoubleComponent />
        </div>
        <div class="col-xl-3 col-md-6 col-sm-12"><MyKahootComponent /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"; // @ is an alias to /src
// import OpenGame from "@/components/SelectGame/OpenGame.vue";
import ProfileComponent from "@/components/Home/ProfileComponent.vue";
import DoubleComponent from "@/components/Home/DoubleComponent.vue";
import MyKahootComponent from "@/components/Home/MyKahootComponent.vue";
import { LaravelEchoService } from "@/services";
import { useToast } from "vue-toast-notification";
import Swal from "sweetalert2";

export default defineComponent({
  name: "HomeView",
  components: {
    // OpenGame,
    ProfileComponent,
    DoubleComponent,
    MyKahootComponent,
  },
  created() {
    LaravelEchoService.init();
  },
  methods: {
    openToast: () => {
      const $toast = useToast();
      $toast.warning("You did it!", { position: "top-right" });
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
    },
  },
});
</script>
<style scoped>
.bg {
  background-color: #fafafa;
  height: 94vh;
}
</style>
