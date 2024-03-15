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
        <!-- <ul class="border-y border-slate-800 py-5 my-5">
          <ul v-for="section in sections">
            <p class="text-xl font-semibold text-left px-5 my-5">
              {{ section.title }}
            </p>
            <SideList :items="section.items" />
          </ul>
        </ul> -->
      </div>
    </div>
  </main>
</template>

<script setup>
import SideButton from "./SideButton.vue";
import SideList from "./SideList.vue";
import { ref, onMounted } from "vue";

let openSideBar = ref(false);

onMounted(() => {
  openSideBar.value = false;
});

const sections = [
  {
    title: "Platforms",
    items: [
      {
        name: "Play Station 5",
        icon: "pi-sort-up",
      },
      {
        name: "Xbox Series S/X",
        icon: "pi-microsoft",
      },
      {
        name: "PC",
        icon: "pi-microsoft",
      },
    ],
  },
  {
    title: "Developers",
    items: [
      {
        name: "Bethesda",
      },
      {
        name: "EA",
      },
      {
        name: "Activision",
      },
    ],
  },
  {
    title: "New Releases",
    items: [
      {
        name: "Last 30 days",
        icon: "pi-backward",
      },
      {
        name: "This Week",
        icon: "pi-star",
      },
      {
        name: "Next Week",
        icon: "pi-forward",
      },
      {
        name: "Release Calendar",
        icon: "pi-calendar",
      },
    ],
  },
];
</script>
