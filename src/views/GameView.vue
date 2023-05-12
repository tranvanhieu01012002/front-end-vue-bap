<template>
  <div class="container-game">
    <div class="top"></div>
    <div class="center">
      <div class="open-game">
        <img src="@/assets/images/kahoot_logo.svg" />
        <form @submit="submit" class="game">
          <div class="input-div">
            <input
              v-model="room"
              :placeholder="placeholder"
              :class="showInputCss"
              ref="input"
              @focus="resetData"
            />
          </div>
          <button type="submit" class="button">Enter</button>
        </form>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { openRoomMixin } from "@/mixins";

export default defineComponent({
  mixins: [openRoomMixin],
  data() {
    return {
      placeholder: "game PIN",
    };
  },
  computed: {
    showInputCss(): string {
      if (this.error.length > 0) {
        return "input error-input";
      } else return "input";
    },
  },
  watch: {
    error: function (newValue: string): boolean {
      if (newValue.length > 0) {
        this.room = "";
        this.placeholder = newValue;
      } else this.placeholder = "game PIN";
      return true;
    },
  },
  methods: {
    resetData: function () {
      this.error = "";
    },
  },
});
</script>
<style scoped>
.container-game {
  background-color: #381272;
  height: 94vh;
  position: relative;
  overflow: hidden;
}
.bottom {
  position: absolute;
  width: 40vw;
  height: 40vw;
  background-color: #321067;
  border-radius: 50%;
  bottom: -10vw;
  right: -10vw;
}
.top {
  position: absolute;
  width: 40vw;
  height: 40vw;
  background-color: #321067;
  top: -10vw;
  left: -10vw;
  transform: rotate(45deg);
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.open-game {
  width: 320px;
  height: 300px;
  /* background-color: #12723a; */
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.open-game img {
  width: 80%;
}
.game {
  margin-top: 10px;
  width: 320px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 2px;
}
.input-div {
  position: relative;
  margin-bottom: 10px;
  height: 45px;
}
.input {
  height: 45px;
  border: 2px solid #cccccc;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  font-weight: bolder;
  position: absolute;
}
.error-input {
  background-color: #fef2f4;
  border: 2px solid #f93355;
  animation: error-input 0.5s 2;
}
.button {
  height: 45px;
  background-color: #333333;
  color: #fff;
  font-weight: bolder;
  border-radius: 5px;
}

@keyframes error-input {
  0% {
    left: 0px;
  }
  14.5% {
    left: 2.5px;
  }
  25% {
    left: -5px;
  }
  34.5% {
    left: -2.5px;
  }
  50% {
    left: 0px;
  }
  62.5% {
    right: -2.5px;
  }
  75% {
    right: -5px;
  }
  100% {
    right: 0px;
  }
}
</style>
