<template>
  <div class="profile-nav col-md-3">
    <div class="panel">
      <div class="user-heading round">
        <a href="#">
          <img
            :src="`https://bootdey.com/img/Content/avatar/avatar${image}.png`"
            alt=""
          />
        </a>
        <h1>Camila Smith</h1>
        <p>deydey@theEmail.com</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      image: Math.floor(Math.random() * 8) + 1,
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    warn: function (message: string, event: any) {
      console.log(22);
      // now we have access to the native event
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
  },
});
</script>
<style scoped>
.profile-nav,
.profile-info {
  margin-top: 30px;
  animation-name: example;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.profile-nav .user-heading {
  background: #fbc02d;
  color: #fff;
  border-radius: 4px 4px 0 0;
  -webkit-border-radius: 4px 4px 0 0;
  padding: 30px;
  text-align: center;
}

.profile-nav .user-heading.round a {
  border-radius: 50%;
  -webkit-border-radius: 50%;
  border: 10px solid rgba(255, 255, 255, 0.3);
  display: inline-block;
}

.profile-nav .user-heading a img {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
}

.profile-nav .user-heading h1 {
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 5px;
}

.profile-nav .user-heading p {
  font-size: 12px;
}

.profile-nav ul {
  margin-top: 1px;
}

.profile-nav ul > li {
  border-bottom: 1px solid #ebeae6;
  margin-top: 0;
  line-height: 30px;
}

.profile-nav ul > li:last-child {
  border-bottom: none;
}

.profile-nav ul > li > a {
  border-radius: 0;
  -webkit-border-radius: 0;
  color: #89817f;
  border-left: 5px solid #fff;
}

.profile-nav ul > li > a:hover,
.profile-nav ul > li > a:focus,
.profile-nav ul li.active a {
  background: #f8f7f5 !important;
  border-left: 5px solid #fbc02d;
  color: #89817f !important;
}

.profile-nav ul > li:last-child > a:last-child {
  border-radius: 0 0 4px 4px;
  -webkit-border-radius: 0 0 4px 4px;
}

.profile-nav ul > li > a > i {
  font-size: 16px;
  padding-right: 10px;
  color: #bcb3aa;
}

@keyframes example {
  from {
    top: 500px;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }
}
</style>
