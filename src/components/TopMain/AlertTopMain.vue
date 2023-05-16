<template>
  <div ref="el" class="col-sm-6 col-lg-4">
    <div class="alert-top-main">
      <div class="content row">
        <img src="https://kahoot.com/files/2020/11/Kahoot-1024-rounded.png" />
        <div :class="['content-left col-6']">
          <div>Sign up for a free</div>
          <h6 class="kahoot-account">Kahoot! account</h6>
          <button class="btn btn-secondary">alo alo</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.alert-top-main {
  background-color: #fff;
  height: 13vh;
  border-radius: 8px;
  padding: 10px;
}
.alert-top-main img {
  width: 28%;
  height: 25%;
  border-radius: 50%;
}
@media screen and (max-width: 1400px) {
  .kahoot-account {
    display: none;
  }
}
@media screen and (max-width: 1028px) {
  .content,
  h5 {
    font-size: 13px;
  }
  img {
    width: 50px;
  }
  .col-sm-6 {
    margin-top: 5px;
  }
}
</style>
