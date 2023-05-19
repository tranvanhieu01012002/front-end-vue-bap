<template>
  <button @click="chooseAnswer" class="btn-unset">
    <div class="d-flex">
      <div
        :class="[
          showCssBg,
          'd-flex',
          editable.status ? 'justify-content-between' : '',
        ]"
      >
        <div class="share-area"><div class="shape" :class="showCss"></div></div>
        <div class="text">
          <div>
            <small :contenteditable="editable.status" @blur="onInput">{{
              answer.content ?? "Input the answer"
            }}</small>
          </div>
        </div>
        <div v-if="editable.status" class="share-area">
          <button @click="updateCorrectAnswer" class="btn-unset">
            <div
              :class="[
                'checked shape d-flex justify-content-center align-items-center',
                answer.isCorrect ? 'checked-correct' : '',
              ]"
            >
              <strong v-if="answer.isCorrect"
                ><font-awesome-icon
                  class="checked-icon"
                  :icon="['fas', 'check']"
              /></strong>
            </div>
          </button>
        </div>
      </div>
    </div>
  </button>
</template>
<script setup lang="ts">
import { PropType, defineProps, computed, ref } from "vue";
import { AnswerWithShapeInterface } from "@/interfaces";
import { useQuestionStore } from "@/store";
import { EnableEditQuestion } from "@/services";
import { useNextQuestion, useRoomOwner } from "@/hooks";

const props = defineProps({
  answer: {
    type: Object as PropType<AnswerWithShapeInterface>,
    required: true,
  },
});
const { answerQuestionWithTime } = useNextQuestion();
const { isRoomOwner } = useRoomOwner();
const { updateAnswer } = useQuestionStore();

const editable = ref(new EnableEditQuestion());

const showCss = computed((): string => {
  return `shape ${props.answer.shape}`;
});
const showCssBg = computed(() => {
  return `p-3 answer bg-${props.answer.shape}`;
});

const onInput = (e: Event) => {
  updateAnswer({
    ...props.answer,
    questionId: props.answer.question_id,
    content: (e.target as HTMLElement).innerText,
    character: "A",
    bgColor: "blue",
  });
};

const updateCorrectAnswer = () => {
  if (editable.value.status) {
    updateAnswer({
      ...props.answer,
      questionId: props.answer.question_id,
      is_correct: true,
      isCorrect: true,
      character: "A",
      bgColor: "blue",
    });
  }
};

const chooseAnswer = () => {
  if (!isRoomOwner.value && !editable.value.status) {
    answerQuestionWithTime(props.answer.isCorrect ?? false);
  }
};
</script>
<style scoped>
.text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.answer {
  height: 76px;
  width: 100%;
  border-radius: 5px;
  color: #fff;
}
.answer:hover {
  cursor: pointer;
}
.shape {
  margin: 0px 8px;
}
.shape-cycle {
  border-radius: 50%;
  background-color: #fff;
  width: 40px;
  height: 40px;
}

.shape-square {
  background-color: #fff;
  width: 40px;
  height: 40px;
}

.shape-rectangle {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 35px solid #fff;
}

.shape-diamond {
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-bottom-color: #fff;
  position: relative;
  top: -20px;
}
.shape-diamond:after {
  content: "";
  position: absolute;
  left: -20px;
  top: 20px;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-top-color: #fff;
}

.bg-shape-rectangle {
  background-color: #e21b3c;
  box-shadow: 0px 4px 5px 0px #a9152d;
}
.bg-shape-square {
  background-color: #26890c;
  box-shadow: 0px 4px 5px 0px #1c660c;
}

.bg-shape-diamond {
  background-color: #1768ce;
  box-shadow: 0px 4px 5px 0px #0e4e9b;
}

.bg-shape-cycle {
  background-color: #d09f37;
  box-shadow: 0px 4px 5px 0px #9b7729;
}
.checked {
  border-radius: 50%;
  width: 45px;
  height: 45px;
  border: 4px solid #fff;
}
.checked-icon {
  font-size: 30px;
}
.checked-correct {
  background-color: #66bf39;
}
</style>
