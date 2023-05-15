import { defineStore } from "pinia";
export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    text: "",
  }),
  actions: {
    input(text: string) {
      this.text = text;
    },
  },
});
