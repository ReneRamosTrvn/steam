<script setup>
import { RouterView, useRoute } from "vue-router";
import { watch, ref } from "vue";
import SideBar from "./components/SideBar.vue";
import Topbar from "./components/Topbar.vue";

const route = useRoute();
let routePath = ref("/");

watch(
  () => route.path,
  (newPath, oldPath) => {
    routePath.value = newPath;
    console.log(routePath.value);
  }
);
</script>

<template>
  <div class="flex bg-slate-900">
    <div v-if="routePath !== '/'" class="lg:w-1/4 hidden lg:block">
      <SideBar />
    </div>
    <div
      class="flex flex-wrap w-full"
      :class="routePath == '/' ? 'w-full' : 'lg:w-3/4'"
    >
      <Topbar />
      <RouterView class="w-full" />
    </div>
  </div>
</template>
