<template>
  <CenterText>
    <h4>
      Play engaging learning games at school, at home and at work, create your
      own kahoots and learn something new every day with the Kahoot! app for iOS
      and Android!
    </h4>
  </CenterText>
  <div class="text-center padding-t">
    <iframe class="padding-t" width="100%" :src="link"> </iframe>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CenterText from "./CenterText.vue";
export default defineComponent({
  data() {
    return {
      link: "https://www.youtube-nocookie.com/embed/4JC8h4Id_5k?enablejsapi=1",
    };
  },
  components: { CenterText },
});
</script>
<style scoped>
iframe {
  height: 80vh;
}
</style>
