<template>
  <main>
    <div class="px-6 flex mt-5">
      <input
        class="w-full lg:w-2/3 rounded-l-full bg-slate-800 text-slate-200 px-3 py-1"
        v-model="game"
        type="text"
        placeholder="Grand Theft..."
      />
      <button
        type="submit"
        @click="searchGame(game)"
        class="text-white bg-slate-600 hover:bg-slate-700 px-3 rounded-r-full"
      >
        Search
      </button>
    </div>
    <div class="min-h-screen flex flex-col items-center justify-center p-5">
      <div
        v-if="loading"
        class="w-40 h-40 border-t rounded-full animate-spin"
      />

      <GameCard v-if="games && !loading" :games="games" />
    </div>
  </main>
</template>

<script setup>
import GameCard from "@/components/GameCard.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

let games = ref("");
let loading = ref(true);
let game = ref("");

onMounted(() => {
  fetchGames();
});

function fetchGames() {
  loading.value = true;
  const params = {
    page_size: 9,
  };

  axios
    .get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`, {
      params,
    })
    .then((response) => {
      games.value = response.data.results;
      console.log(games.value);
      loading.value = false;
    })
    .catch((error) => {
      console.error(error);
    });
}
function searchGame(game) {
  loading.value = true;
  axios
    .get(
      `https://api.rawg.io/api/games?key=${
        import.meta.env.VITE_API_KEY
      }&search=${game}`
    )
    .then((response) => {
      games.value = response.data.results;
      console.log(games.value);
      loading.value = false;
    })
    .catch((error) => {
      console.error(error);
    });
}
</script>
