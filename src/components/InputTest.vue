<template>
  <div>
    <p>Hello</p>
    <input ref="input" v-model="message" placeholder="enter, please" />
    <button @click="send">Send msg to pattern</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, HTMLAttributes } from "vue";
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
  watch: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    message(newMessage: string, oldMessage: string): void {
      if (newMessage.includes(":)")) {
        console.log("mat cuoi cc a");
      }
    },
  },
  data() {
    return {
      message: "hello ah zai",
    };
  },
  methods: {
    send: function () {
      this.$emit("sendMsg", this.message);
      (this.$refs.input as HTMLInputElement).focus();
    },
  },
});
</script>
