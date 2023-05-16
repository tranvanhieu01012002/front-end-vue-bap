<template>
  <div :class="showCss">
    <div class="checkbox d-flex flex-column justify-content-center">
      <input
        :checked="setQuestion.isChecked"
        @input="$emit('clickCheckBox', index)"
        type="checkbox"
        class="input-checkbox"
      />
    </div>
    <div class="img img-cover-question d-flex justify-content-center">
      <QuestionNumber>{{ setQuestion.questions_count }}</QuestionNumber>
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
            @click="$emit('showListQuestions', setQuestion.id)"
          >
            <font-awesome-icon class="icon" :icon="['fas', 'pen']" />
          </button>
          <button class="btn-unset">
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'ellipsis-vertical']"
            />
          </button>
        </div>
        <div class="bottom-right-content d-flex">
          <div class="left-g-button d-flex">
            <div class="time">Updated at: {{ setQuestion.updated_at }}</div>
            <div class="plays"><li>3 plays</li></div>
          </div>
          <div class="g-button">
            <button
              @click="$emit('startGame', setQuestion.id)"
              class="btn btn-dark"
            >
              Assign
            </button>
            <button class="btn btn-primary">Start</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent } from "vue";
import QuestionNumber from "../Home/MyKahoot/QuestionNumber.vue";
import { SetQuestionResponse } from "@/interfaces";
export default defineComponent({
  components: {
    QuestionNumber,
  },
  props: {
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
  },
  emits: ["clickCheckBox", "showListQuestions", "startGame"],
  computed: {
    showCss: function (): string {
      let isChecked = "";
      if (this.setQuestion.isChecked) {
        isChecked = "checked";
      }
      return `${isChecked} set-question-container d-flex`;
    },
  },
});
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
</style>
