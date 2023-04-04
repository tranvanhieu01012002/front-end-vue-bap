<template>
  <div>
    <p>Hello</p>
    <input v-model="message" placeholder="enter, please" />
    <button @click="send">Send msg to pattern</button>
  </div>
</template>
<script lang="ts">
export default {
  emits: {
    sendMsg: (msg) => {
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
};
</script>
