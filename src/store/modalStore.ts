import { defineStore } from "pinia";
export const useModalStore = defineStore("modalStore", {
  state: () => ({ isOpen: false, name: "", isOk: false, isCancel: false }),
  getters: {},
  actions: {
    openModal(name: string) {
      this.isOpen = true;
      this.name = name;
    },
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
    closeModal() {
      this.isOpen = false;
      // this.isCancel = false;
      // this.isOk = false;
    },
  },
});
