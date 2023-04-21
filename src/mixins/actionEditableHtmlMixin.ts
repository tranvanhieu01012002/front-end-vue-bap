import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    onStop() {
      (this.$refs.index as HTMLElement).blur();
    },
  },
});
