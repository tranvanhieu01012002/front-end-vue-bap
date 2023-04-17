<template>
  <div class="col-md-6 offset-md-3 mt-5 text-center">
    <div class="card">
      <div class="card-header">Start game</div>
      <div class="card-body d-flex flex-column">
        <b-button class="m-2" @click="toggleModal(!modalShow)"
          >Play game</b-button
        >
        <button @click="createRoom" class="btn btn-success m-2">
          Create new room
        </button>
        <button @click="createRoom" class="btn btn-warning m-2">
          Create set questions
        </button>
      </div>
    </div>
  </div>
  <DefaultModal @hidden-modal="toggleModal" :is-opened-modal="modalShow">
  </DefaultModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import RoomService from "@/services/roomService";
import DefaultModal from "../Modal/DefaultModal.vue";
export default defineComponent({
  data() {
    return {
      isOpenModal: false,
      modalShow: false,
    };
  },
  components: {
    DefaultModal,
  },
  methods: {
    toggleModal: function (model: boolean) {
      this.modalShow = model;
    },
    createRoom: async function () {
      await new RoomService().createRoom();
    },
  },
});
</script>
