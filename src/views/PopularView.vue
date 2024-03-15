<template>
  <main>
    <div
      class="min-h-screen flex flex-col items-center justify-center p-5 lg:p-5"
    >
      <div
        v-if="loading"
        class="w-40 h-40 border-t rounded-full animate-spin"
      ></div>
      <div
        v-if="!loading"
        class="mx-10 rounded-xl bg-gradient-to-t from-slate-900 to-slate-950 w-full h-40 flex items-center justify-center"
      >
        <h1 class="text-slate-200 font-black text-5xl">
          Most popular games in 2024
        </h1>
      </div>
      <GameCard :games="games" />
    </div>
  </main>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import GameCard from "@/components/GameCard.vue";

let games = ref("");
let loading = ref(true);

onMounted(() => {
  fetchPopularGames();
});

function fetchPopularGames() {
  axios
    .get(
      `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added&key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    .then((response) => {
      console.log(response.data);
      games.value = response.data.results;
      loading.value = false;
    })
    .catch((error) => {
      console.error(error);
    });
}
</script>
