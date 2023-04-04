<template>
  <div>
    <InputTest @sendMsg="updateMessage" />
    {{ mes }}
  </div>
</template>
<script lang="ts">
import InputTest from "./InputTest.vue";
export default {
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
};
</script>
