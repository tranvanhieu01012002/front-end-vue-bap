<template>
  <div class="col-md-6 offset-md-3 mt-5 text-center">
    <div class="card">
      <div class="card-header">Start game</div>
      <div class="card-body">
        <b-button @click="toggleModal(!modalShow)">Play game</b-button>
      </div>
    </div>
  </div>
  <DefaultModal @hidden-modal="toggleModal" :is-opened-modal="modalShow">
    <GameIDForm />
  </DefaultModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import DefaultModal from "../Modal/DefaultModal.vue";
import GameIDForm from "../Form/GameIDForm.vue";

export default defineComponent({
  data() {
    return {
      isOpenModal: false,
      modalShow: false,
    };
  },
  components: {
    DefaultModal,
    GameIDForm,
  },
  methods: {
    toggleModal: function (model: boolean) {
      this.modalShow = model;
    },
  },
});
</script>
