<template>
  <div>
    <p>Hello</p>
    <input ref="input" v-model="message" placeholder="enter, please" />
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
        return false;
      }
    },
  },
  name: "InputTest",
  watch: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    message(newMessage: string, oldMessage: string): boolean {
      return true;
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
