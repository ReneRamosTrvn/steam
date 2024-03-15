<template>
  <main>
    <div
      class="bg-gradient-to-b from-slate-950 to-slate-900 text-white min-h-screen p-5"
    >
      <div class="space-y-3">
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
      <div v-if="route.name != 'home'">
        <div class="text-slate-200 font-light text-center my-10">
          <h1 class="text-xl">
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
        <div class="flex flex-wrap mt-3 justify-center items-center">
          <div class="w-full text-slate-200">
            <p class="text-md bg-slate-700 p-3 lg:p-5 rounded-xl">
              I'm a passionate
              <span class="font-bold underline">Full Stack Web Developer</span>
              proficient in
              <span
                class="font-bold bg-gradient-to-r from-green-400 to-blue-500 inline-block text-transparent bg-clip-text"
                >Vue.js,</span
              >
              <span
                class="font-bold bg-gradient-to-r from-blue-400 to-blue-500 inline-block text-transparent bg-clip-text"
              >
                ReactJS,</span
              >
              <span
                class="font-bold bg-gradient-to-r from-blue-500 to-yellow-400 inline-block text-transparent bg-clip-text"
              >
                and Python (Django)</span
              >
              with a keen eye for crafting elegant and efficient solutions.
              Leveraging
              <span class="font-bold underline">6 years</span> of experience in
              web development, I thrive on turning complex ideas into
              user-friendly interfaces. From front-end design to back-end
              development, I excel in delivering high-quality, scalable
              applications that meet client needs and exceed expectations.
              <span class="font-bold underline"
                >Let's collaborate and bring your digital vision to life!</span
              >
            </p>
          </div>
          <div class="w-full flex justify-center items-center mt-3">
            <img
              src="../assets/reneramosprofile.png"
              alt="me"
              class="object-cover shadow-xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import SideButton from "./SideButton.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
