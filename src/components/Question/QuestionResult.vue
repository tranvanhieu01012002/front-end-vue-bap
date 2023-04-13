<template>
  <div v-show="!isRoomOwner">
    <h1>hello: Your answer is: {{ showResult.text }}</h1>
    <img :src="showResult.image" class="img-thumbnail" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { RoomOwnerService } from "@/services";
import isRoomOwnerMixin from "@/mixins/isRoomOwnerMixin";
export default defineComponent({
  props: {
    correct: {
      type: Boolean,
      required: true,
    },
  },
  mixins: [isRoomOwnerMixin],
  computed: {
    showResult() {
      return this.correct
        ? {
            text: "correct",
            image:
              "https://www.shutterstock.com/image-vector/checkmark-icon-symbol-vector-260nw-1297014874.jpg",
          }
        : {
            text: "wrong",
            image:
              "https://www.sfu.ca/content/sfu/archaeology/museum/tse-k-wa/photo-matching-game/wrong-answer/jcr:content/main_content/textimage/image.img.640.medium.gif/1635280502560.gif",
          };
    },
  },
});
</script>
<style scoped>
.img-thumbnail {
  width: 300px;
}
</style>
