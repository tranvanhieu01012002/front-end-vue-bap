<template>
  <div class="p-2">
    <div class="container-profile-component">
      <div class="center-component">
        <div>
          <b-card no-body>
            <b-tabs card>
              <b-tab title="Course sessions" active>
                <TabContent />
              </b-tab>
              <b-tab title="Courses">
                <TabContent />
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TabContent from "./Center/TabContent.vue";
export default defineComponent({
  components: {
    TabContent,
  },
});
</script>
<style scoped>
.center-component {
  padding-bottom: 30px;
}
.p-2 {
  margin-top: 20px;
}
</style>
