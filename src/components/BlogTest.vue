<template>
  <div>
    <InputTest @sendMsg="updateMessage" />
    {{ mes }}
    {{ status }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useAuthStore } from "@/store/authStore";
import InputTest from "./InputTest.vue";

export default defineComponent({
  components: {
    InputTest,
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
