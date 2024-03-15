<script setup>
import { RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
import Topbar from "./components/Topbar.vue";
</script>

<template>
  <div class="flex bg-slate-900">
    <div class="lg:w-1/4 hidden lg:block">
      <SideBar />
    </div>
    <div class="w-full lg:w-3/4 flex flex-wrap">
      <Topbar />
      <RouterView class="w-full" />
    </div>
  </div>
</template>
