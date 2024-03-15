<template>
  <main class="lg:hidden w-full">
    <div class="flex items-center justify-center bg-slate-800 py-5">
      <SideButton
        class="text-white"
        text-button="Home"
        icon="pi-home"
        path="/"
      />
      <SideButton
        class="text-white"
        text-button="All games"
        icon="pi-bars"
        path="/all-games"
      />
      <SideButton
        class="text-white"
        text-button="Popular 2024"
        icon="pi-heart"
        path="/popular"
      />
    </div>
  </main>
</template>

<script setup>
import SideButton from "./SideButton.vue";
</script>
