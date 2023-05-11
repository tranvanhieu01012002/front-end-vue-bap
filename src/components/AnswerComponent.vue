<template>
  <div class="col-3 d-flex align-content-center flex-wrap">
    <div :class="showCssBg">
      <div class="shape" :class="showCss"></div>
      <div class="text align-middle">{{ answer.content }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { AnswerWithShapeInterface } from "@/interfaces";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    answer: {
      type: Object as PropType<AnswerWithShapeInterface>,
      required: true,
    },
  },
  computed: {
    showCss() {
      return `shape ${this.answer.shape}`;
    },
    showCssBg() {
      return `p-3 answer bg-${this.answer.shape}`;
    },
  },
});
</script>
<style scoped>
.answer {
  height: 76px;
  width: 335px;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
}
.answer:hover {
  cursor: pointer;
}
.shape {
  margin: 0px 10px;
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
</style>
