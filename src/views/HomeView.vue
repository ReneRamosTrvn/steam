<template>
  <main class="bg-[url('../assets/bg-home.png')] p-5 lg:p-10 min-h-screen">
    <div class="text-slate-200 font-light text-center my-10">
      <h1 class="text-4xl">
        <span class="font-semibold underline">Thank you</span> for checking on
        my Steam inspired
        <span
          class="font-bold bg-gradient-to-r from-green-400 to-blue-500 inline-block text-transparent bg-clip-text"
        >
          Vue3
        </span>
        project
      </h1>
    </div>
    <div class="flex flex-wrap justify-center items-center">
      <div
        class="p-3 lg:p-5 flex flex-wrap justify-center items-center w-full lg:w-2/3 text-slate-200 bg-black-trans rounded-xl min-h-60"
      >
        <h2 class="w-full text-xl text-slate-200 font-semibold">
          A little bit about me:
        </h2>
        <p class="text-lg mb-5">
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
          <span class="font-bold underline">6 years</span> of experience in web
          development, I thrive on turning complex ideas into user-friendly
          interfaces. From front-end design to back-end development, I excel in
          delivering high-quality, scalable applications that meet client needs
          and exceed expectations.
          <span class="font-bold underline"
            >Let's collaborate and bring your digital vision to life!</span
          >
        </p>
        <img
          src="../assets/reneramosprofile.png"
          alt="me"
          class="object-cover shadow-xl rounded-full max-h-60"
        />
      </div>
    </div>
    <div class="flex flex-wrap my-10 justify-center items-center">
      <router-link to="/all-games">
        <button
          class="m-3 border border-slate-200 text-slate-200 flex items-center text-left px-5 py-2 rounded-xl hover:bg-slate-900 transition-colors duration-150"
        >
          <i class="pi pi-bars mr-2" style="font-size: 1.2rem"></i>
          Check All Games
        </button>
      </router-link>
      <router-link to="/popular">
        <button
          class="m-3 border border-slate-200 text-slate-200 flex items-center text-left px-5 py-2 rounded-xl hover:bg-slate-900 transition-colors duration-150"
        >
          <i class="pi pi-heart mr-2" style="font-size: 1.2rem"></i>
          Check Popular Games in 2024
        </button>
      </router-link>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
