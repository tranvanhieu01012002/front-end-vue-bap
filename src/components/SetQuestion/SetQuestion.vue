<template>
  <div ref="el" :class="showCss">
    <div class="checkbox d-flex flex-column justify-content-center">
      <input
        :checked="setQuestion.isChecked"
        @input="emits('clickCheckBox', index)"
        type="checkbox"
        class="input-checkbox"
      />
    </div>
    <div :class="hideSmall">
      <div class="img img-cover-question d-flex justify-content-center">
        <QuestionNumber>{{ setQuestion.questions_count }}</QuestionNumber>
      </div>
    </div>
    <div class="data-content d-flex justify-content-between">
      <div class="left-content d-flex flex-column justify-content-between">
        <div>
          <strong>{{ setQuestion.name }}</strong>
        </div>
        <div class="author d-flex">
          <font-awesome-icon :icon="['fas', 'circle-user']" />
          <div class="author-text">{{ author }}</div>
        </div>
      </div>
      <div class="right-content d-flex flex-column justify-content-between">
        <div class="top-right-content d-flex justify-content-end">
          <button
            class="btn-unset"
            @click="emits('showListQuestions', setQuestion.id)"
          >
            <font-awesome-icon class="icon" :icon="['fas', 'pen']" />
          </button>
          <b-dropdown
            size="lg"
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content>
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'ellipsis-vertical']"
              />
            </template>
            <b-dropdown-item>
              <button @click="updateFavorite" class="btn-unset">
                <font-awesome-icon
                  :class="showFavorite.isFavorite ? 'star-favorite' : ''"
                  :icon="['fas', 'star']"
                />
                {{ showFavorite.text }} favorite
              </button></b-dropdown-item
            >
            <!-- <b-dropdown-item>Another action</b-dropdown-item> -->
            <!-- <b-dropdown-item>Something else here...</b-dropdown-item> -->
          </b-dropdown>
        </div>
        <div class="bottom-right-content d-flex">
          <div :class="[leftGBtn]">
            <div class="time">Updated at: {{ setQuestion.updated_at }}</div>
            <div class="plays"><li>3 plays</li></div>
          </div>
          <div class="g-button d-flex">
            <button :class="['btn btn-dark', btnSize]">Assign</button>
            <button
              @click="emits('startGame', setQuestion.id)"
              :class="['btn btn-primary', btnSize]"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, computed, PropType, defineEmits, ref } from "vue";
import QuestionNumber from "../Home/MyKahoot/QuestionNumber.vue";
import { SetQuestionResponse } from "@/interfaces";
import { useResizeObserver } from "@vueuse/core";
import { Favorite } from "@/interfaces";
const props = defineProps({
  setQuestion: {
    type: Object as PropType<SetQuestionResponse>,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
const el = ref();
const leftGBtn = ref("left-g-button d-flex");
const btnSize = ref("");
const hideSmall = ref("hide-small");
const showCss = computed(() => {
  let isChecked = "";
  if (props.setQuestion.isChecked) {
    isChecked = "checked";
  }
  return `${isChecked} set-question-container d-flex justify-content-center`;
});

const showFavorite = computed((): Favorite => {
  return props.setQuestion.favorite
    ? { text: "Remove from", isFavorite: false }
    : { text: "Add to", isFavorite: true };
});

useResizeObserver(el, (entries) => {
  const entry = entries[0];
  const { width } = entry.contentRect;
  if (width <= 1200) {
    leftGBtn.value = "left-g-button-hide";
    btnSize.value = "btn-sm";
    if (width <= 550) {
      hideSmall.value = "hide-small";
    }
  } else {
    leftGBtn.value = "left-g-button d-flex";
    btnSize.value = "";
    hideSmall.value = "";
  }
});

const updateFavorite = () => {
  emits("updateFavorite", props.setQuestion.id, props.setQuestion.favorite);
};
const emits = defineEmits([
  "clickCheckBox",
  "showListQuestions",
  "startGame",
  "updateFavorite",
]);
</script>
<style scoped>
.set-question-container {
  background-color: #fff;
  width: 100%;
  height: 125px;
  margin-top: 20px;

  transition: transform 0.25s;
}
.set-question-container:hover {
  transform: scale(1.02);
}
.data-content {
  padding: 17px 5px 5px 20px;
  width: calc(100% - 175px);
}
.left-content {
  height: 100%;
}
.img {
  height: 100%;
  width: 175px;
}
.top-right-content {
  font-size: 20px;
  padding-top: 5px;
}
.top-right-content .icon {
  padding-right: 15px;
}
.author svg {
  color: #46178f;
  font-size: 25px;
}
.author-text {
  padding: 0px 10px;
}
.btn-dark {
  margin-right: 5px;
}
.left-g-button {
  padding: 7px 5px 0px 0px;
}
.left-g-button-hide {
  display: none;
}
.plays {
  margin-left: 5px;
}
.checkbox {
  padding: 0px 10px;
}
.checked {
  border: 2px solid #46178f;
}
.btn-unset {
  all: unset;
  cursor: pointer;
}
.star-favorite {
  color: yellow;
}
</style>
