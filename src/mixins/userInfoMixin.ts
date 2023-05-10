import { defineComponent } from "vue";
import { useUserStore } from "@/store";
import { mapState } from "pinia";
export default defineComponent({
  computed: {
    ...mapState(useUserStore, { user: "getUsername" }),
  },
});
