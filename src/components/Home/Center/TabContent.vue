<template>
  <div class="content">
    <div class="text">
      Welcome to Courses! When a course is created, you can create a course
      session, to assign it to learners and start the course!
    </div>
    <button class="btn btn-primary"><strong>Create course</strong></button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped>
.content {
  background-color: #f2f2f2;
  border-radius: 5px;
  border: 1px dotted #555454;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
}
.text {
  width: 80%;
  color: #555454;
}
.btn-primary {
  margin-top: 10px;
}
</style>
