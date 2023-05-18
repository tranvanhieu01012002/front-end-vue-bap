<template>
  <div class="setting d-flex">
    <div class="show-user g-bg">
      <strong
        ><font-awesome-icon :icon="['fas', 'user']" /> <slot></slot
      ></strong>
    </div>
    <div class="setting-detail g-bg">
      <font-awesome-icon
        :onclick="updateShowVolume"
        class="volume-icon"
        :icon="['fas', showVolume]"
      />
      <input
        v-if="isShowVolume"
        type="range"
        v-model="volume"
        id="volume"
        name="volume"
        min="0"
        max="100"
      />
      <font-awesome-icon class="icon-setting" :icon="['fas', 'gear']" />
      <font-awesome-icon class="icon-setting" :icon="['fas', 'expand']" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
const volume = ref(100);
const isShowVolume = ref(false);
// const audio = ref(new Audio("/audio/song.mp3"));
const updateShowVolume = () => {
  isShowVolume.value = !isShowVolume.value;
};
// watch(volume, (newValue: number) => {
//   audio.value.volume = newValue / 100;
// });
const showVolume = computed(() => {
  if (volume.value == 0) {
    return "volume-mute";
  } else if (volume.value < 50) {
    return "volume-low";
  } else return "volume-high";
});
onMounted(() => {
  const audio = new Audio("/audio/song.mp3");
  audio.play();
  audio.muted = true;
  // audio.volume = volume.value / 100;
});
</script>
<style scoped>
.setting {
  color: #fff;
  font-size: 24px;
}
.show-user {
  margin-right: 10px;
}
.g-bg {
  background-color: #603936;
  padding: 5px 10px;
  border-radius: 10px;
}
.icon-setting {
  padding: 0px 5px;
}
.volume-icon {
  width: 50px;
}
</style>
