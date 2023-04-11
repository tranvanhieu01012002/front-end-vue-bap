<template>
  <b-modal @hidden="hiddenModal" @ok="submit" centered v-model="model">
    <b-form-group label="Input Game ID">
      <div v-if="error.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li class="text-danger">
            {{ error }}
          </li>
        </ul>
      </div>
      <b-form-input id="name-input" v-model="room"></b-form-input>
    </b-form-group>
  </b-modal>
</template>
<script lang="ts">
import { RoomService } from "@/services";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isOpenedModal: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["hiddenModal"],
  data() {
    return {
      model: false,
      room: "",
      error: "",
    };
  },
  watch: {
    isOpenedModal: function (newStatus: boolean) {
      this.model = newStatus;
    },
  },
  methods: {
    hiddenModal: function () {
      this.$emit("hiddenModal", !this.isOpenedModal);
    },
    checkForm: function () {
      if (Number.isNaN(parseInt(this.room))) {
        this.error = "Please enter only number";
        return false;
      } else {
        return true;
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    submit: async function (e: any) {
      if (this.checkForm()) {
        this.error = "";
        const roomService = new RoomService();
        await roomService.openRoom(this.room);
      } else {
        e.preventDefault();
      }
    },
  },
});
</script>
