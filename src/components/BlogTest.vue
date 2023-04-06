<template>
  <div>
    <InputTest @sendMsg="updateMessage" />
    {{ mes }}
    {{ status }}
    <div>//</div>
    <SlotLearn>
      <template v-slot:test1>
        <button class="btn btn-warning">hello ae</button>
      </template>
      <template v-slot:test2>
        <button class="btn btn-warning">hello ae nha</button>
      </template>
    </SlotLearn>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useAuthStore } from "@/store/authStore";
import InputTest from "./InputTest.vue";
import SlotLearn from "./SlotLearn.vue";

export default defineComponent({
  // setup() {
  //   return {
  //     mes: "default",
  //   };
  // },
  components: {
    InputTest,
    SlotLearn,
  },
  data() {
    return {
      mes: "default",
    };
  },
  methods: {
    updateMessage: function (mes: string) {
      this.mes = mes;
    },
  },
  computed: {
    ...mapState(useAuthStore, { status: "isLogin" }),
  },
});
</script>
