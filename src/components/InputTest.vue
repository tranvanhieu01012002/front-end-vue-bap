<template>
  <div>
    <p>Hello</p>
    <input v-model="message" placeholder="enter, please" />
    <button @click="send">Send msg to pattern</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  emits: {
    sendMsg: (msg: string) => {
      if (msg) {
        return true;
      } else {
        console.warn("dang loi kia");
        return false;
      }
    },
  },
  name: "InputTest",
  data() {
    return {
      message: "hello ah zai",
    };
  },
  methods: {
    send: function () {
      this.$emit("sendMsg", this.message);
    },
  },
});
</script>
