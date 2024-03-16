<template>
  <main class="lg:hidden w-full">
    <div
      :class="routePath == '/' ? 'bg-black' : 'bg-slate-800'"
      class="flex items-center justify-center py-5"
    >
      <SideButton
        class="text-white"
        text-button="Home"
        icon="pi-home"
        path="/"
      />
      <SideButton
        class="text-white"
        text-button="Games"
        icon="pi-bars"
        path="/all-games"
      />
      <SideButton
        class="text-white"
        text-button="Popular"
        icon="pi-heart"
        path="/popular"
      />
    </div>
  </main>
</template>

<script setup>
import SideButton from "./SideButton.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
let routePath = ref("/");

watch(
  () => route.path,
  (newPath, oldPath) => {
    routePath.value = newPath;
  }
);
</script>
