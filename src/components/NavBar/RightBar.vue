<template>
  <b-navbar-nav class="ml-auto" right>
    <b-nav-form>
      <b-form-input
        size="sm"
        class="mr-sm-2"
        placeholder="Search"
      ></b-form-input>
      <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>

    <b-nav-item-dropdown text="Lang" right>
      <b-dropdown-item href="#">EN</b-dropdown-item>
      <b-dropdown-item href="#">ES</b-dropdown-item>
      <b-dropdown-item href="#">RU</b-dropdown-item>
      <b-dropdown-item href="#">FA</b-dropdown-item>
    </b-nav-item-dropdown>
    <UserInfo />
    <ToggleTheme />
  </b-navbar-nav>
</template>
<script setup lang="ts">
import UserInfo from "./UserInfo.vue";
import ToggleTheme from "../ToggleTheme.vue";
</script>
