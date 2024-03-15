<template>
  <main>
    <div
      class="bg-gradient-to-b from-slate-950 to-slate-900 text-white min-h-screen p-5"
    >
      <div class="border-b py-5" v-if="route.name != 'home'">
        <div class="text-slate-200 font-light text-center">
          <h1 class="text-xl mb-10">
            <span class="font-semibold underline">Thank you</span> for checking
            on my Steam inspired
            <span
              class="font-bold bg-gradient-to-r from-green-400 to-blue-500 inline-block text-transparent bg-clip-text"
            >
              Vue3
            </span>
            project
          </h1>
        </div>
        <div class="w-full flex items-center my-3 space-x-2">
          <img
            src="../assets/reneramosprofile.png"
            alt="me"
            class="object-cover shadow-xl rounded-full h-16"
          />
          <div>
            <p class="text-lg font-bold">René Ramos</p>
            <p class="underline">
              <a href="mailto:reneramostrvn@gmail.com"
                >reneramostrvn@gmail.com</a
              >
            </p>
          </div>
        </div>
        <div class="mt-5 grid grid-cols-3 text-center w-full mb-10">
          <a href="https://www.linkedin.com/in/reneramosdev/"
            ><i class="pi pi-linkedin auto" style="font-size: 1.5rem"></i
          ></a>
          <a href="mailto:reneramostrvn@gmail.com"
            ><i class="pi pi-inbox auto" style="font-size: 1.5rem"></i
          ></a>
          <a href="https://github.com/ReneRamosTrvn/">
            <i class="pi pi-github auto" style="font-size: 1.5rem"></i>
          </a>
        </div>
      </div>
      <div class="space-y-3 my-5">
        <SideButton
          class="text-xl font-semibold"
          text-button="Home"
          icon="pi-home"
          path="/"
        />
        <SideButton
          class="text-xl font-semibold"
          text-button="All games"
          icon="pi-bars"
          path="/all-games"
        />
        <SideButton
          class="text-xl font-semibold"
          text-button="Popular 2024"
          icon="pi-heart"
          path="/popular"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import SideButton from "./SideButton.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
