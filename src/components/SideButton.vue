<template>
  <main>
    <router-link :to="path">
      <button
        class="mx-auto flex items-center text-left px-5 py-2 rounded-xl w-full hover:bg-slate-900 transition-colors duration-150"
      >
        <i
          :class="icon ? icon : 'pi-angle-double-right'"
          class="pi mr-2"
          style="font-size: 1.2rem"
        ></i>
        {{ props.textButton }}
      </button>
    </router-link>
  </main>
</template>

<script setup>
const props = defineProps({
  textButton: String,
  icon: String,
  path: {
    type: String,
    default: "/",
  },
});
import { RouterLink } from "vue-router";
</script>
