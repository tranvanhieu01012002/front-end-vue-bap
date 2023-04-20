<template>
  <div>question views</div>
  <div>
    <div class="m-2">
      <ProgressBar />
    </div>
    <div class="row" v-if="getListCurrentAnswers.length !== 0">
      <QuestionLeft class="col-6" :question="getContentQuestion" />
      <ListAnswers class="col-6" :answers="getListCurrentAnswers" />
      <!-- <QuestionLeft :question="question" />
      <ListAnswers :answers="answers" /> -->
    </div>
    <NextQuestionButton @next="showResult">Stop</NextQuestionButton>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useQuestionStore } from "@/store/questionStore";
import QuestionLeft from "./QuestionLeft.vue";
import ListAnswers from "./ListAnswers.vue";
import NextQuestionButton from "../Button/NextQuestionButton.vue";
import { isRoomOwnerMixin, nextQuestionMixin } from "@/mixins";
import ProgressBar from "./ProgressBar.vue";
export default defineComponent({
  name: "PageQuestion",
  props: {
    questionId: {
      type: String,
      required: true,
    },
  },
  mixins: [nextQuestionMixin, isRoomOwnerMixin],
  components: {
    QuestionLeft,
    ListAnswers,
    NextQuestionButton,
    ProgressBar,
  },
  computed: {
    ...mapState(useQuestionStore, [
      "getContentQuestion",
      "getListCurrentAnswers",
    ]),
  },
  // https://www.vecteezy.com/vector-art/6140087-design-of-quiz-in-gradient-color-question-and-answers-template-quiz-game-in-tv-show
  data() {
    return {
      question: {
        id: "22",
        content: "Fasdfsdf",
        image:
          "https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo-2013.png",
        answers: [{ character: ":adsfdas", bgColor: "Fasdfdsf" }],
      },
      answers: [
        {
          character: "A",
          bgColor: "alert alert-" + "primary",
          content:
            "loremfasd fasd fsd dsf sdf sdf sdf dsf dsf dsf sd asd sdf sdf",
        },
        {
          character: "B",
          bgColor: "alert alert-" + "secondary",
          content:
            "loremfasd fasd fsd dsf sdf sdf sdf dsf dsf dsf sd asd sdf sdf",
        },
        {
          character: "C",
          bgColor: "alert alert-" + "warning",
          content:
            "loremfasd fasd fsd dsf sdf sdf sdf dsf dsf dsf sd asd sdf sdf",
        },
        {
          character: "D",
          bgColor: "alert alert-" + "dark",
          content:
            "loremfasd fasd fsd dsf sdf sdf sdf dsf dsf dsf sd asd sdf sdf",
        },
      ],
    };
  },
});
</script>
