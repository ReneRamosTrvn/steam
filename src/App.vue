<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import SideBar from "./components/SideBar.vue";

const router = useRouter();

function goBack() {
  router.go(-1);
}
</script>

<template>
  <header>
    <link href="/node_modules/primeicons/primeicons.css" rel="stylesheet" />
  </header>

  <div class="flex bg-slate-900">
    <div class="lg:w-1/4 hidden lg:block">
      <SideBar />
    </div>
    <div class="w-full lg:w-3/4 flex flex-wrap">
      <button
        :onclick="goBack"
        class="mx-6 mt-5 bg-slate-500 hover:bg-slate-600 text-white rounded-full flex justify-center items-center p-2 m-2"
      >
        <i class="pi pi-angle-left" style="font-size: 1.1rem"></i>
        Go back
      </button>
      <RouterView class="w-full" />
    </div>
  </div>
</template>
