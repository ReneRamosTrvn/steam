<template>
  <main>
    <div class="text-white">
      <ul class="px-3">
        <SideButton
          v-for="item in items"
          :text-button="item.name"
          :icon="item.icon"
        />
      </ul>
    </div>
  </main>
</template>

<script setup>
import SideButton from "./SideButton.vue";

const props = defineProps(["items"]);
</script>
