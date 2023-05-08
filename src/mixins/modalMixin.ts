import { defineComponent } from "vue";
import { useModalStore } from "@/store";
import { mapActions } from "pinia";
export default defineComponent({
  methods: {
    ...mapActions(useModalStore, ["openModal"]),
  },
});
