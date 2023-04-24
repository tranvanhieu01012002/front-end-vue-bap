import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      isAlert: false,
      timerAlert: 0,
    };
  },
  methods: {
    showAlert() {
      this.isAlert = true;
      this.timerAlert = window.setTimeout(() => {
        this.isAlert = false;
      }, 3000);
    },
  },
});
