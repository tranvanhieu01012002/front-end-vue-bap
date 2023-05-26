<template>
  <div class="more-info">
    <h5>Connect to Bitmoji</h5>
    <div class="content d-flex">
      <div class="img-content">
        <img src="@/assets/images/bitmoji_appicon-691d008d.svg" alt="" />
      </div>
      <div class="text">
        <div>
          Connect to Bitmoji to use it as your Kahoot! profile picture and add a
          personal touch to your experience.
          <router-link to="library"> Connect to Bitmoji</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.more-info {
  margin-top: 25px;
}
.img-content {
  margin-right: 10px;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}
</style>
