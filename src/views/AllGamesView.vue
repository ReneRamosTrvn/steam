<template>
  <main class="min-h-screen">
    <div class="p-5 space-y-5">
      <div class="flex">
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
        <button
          @click="toggleFilters = !toggleFilters"
          class="ml-3 flex items-center justify-center text-white bg-slate-600 hover:bg-slate-700 px-3 rounded-full"
        >
          <i
            class="pi pi-filter text-slate-300 hover:text-slate-400"
            style="font-size: 1.2rem"
          ></i>
        </button>
      </div>
      <div
        v-if="toggleFilters"
        class="flex flex-wrap text-slate-200 bg-slate-800 rounded-xl p-5"
      >
        <div class="w-full lg:w-1/3 flex flex-wrap lg:pr-2">
          <label class="w-full" for="publishers">Publishers</label>
          <select
            v-model="selectedPublisher"
            class="w-full bg-slate-600 rounded-xl p-1"
            name="publishers"
            id="publishers"
          >
            <option
              v-for="(publisher, index) in publishers"
              :key="index"
              :value="publisher.slug"
            >
              {{ publisher.name }}
            </option>
          </select>
        </div>
        <div class="w-full lg:w-1/3 flex flex-wrap lg:px-2">
          <label class="w-full" for="platforms">Platforms</label>
          <select
            v-model="selectedPlatform"
            class="w-full bg-slate-600 rounded-xl p-1"
            name="platforms"
            id="platforms"
          >
            <option
              v-for="(platform, index) in platforms"
              :key="index"
              :value="platform.id"
            >
              {{ platform.name }}
            </option>
          </select>
        </div>
        <div class="w-full lg:w-1/3 flex flex-wrap lg:pl-2">
          <label class="w-full" for="genres">Genres</label>
          <select
            v-model="selectedGenre"
            class="w-full bg-slate-600 rounded-xl p-1"
            name="genres"
            id="genres"
          >
            <option
              v-for="(genre, index) in genres"
              :key="index"
              :value="genre.slug"
            >
              {{ genre.name }}
            </option>
          </select>
        </div>
        <div class="w-full mt-3 flex justify-end space-x-2">
          <button
            @click="clearFilters"
            class="flex items-center justify-center text-white px-3 rounded-full"
          >
            Clear
          </button>
          <button
            @click="fetchFilteredGames"
            class="flex items-center justify-center text-white bg-slate-600 hover:bg-slate-700 px-3 rounded-full"
          >
            Apply
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <GameCard
          v-if="games && !loading"
          v-for="(game, index) in games"
          :key="index"
          :game="game"
          class="m-2"
        />
      </div>
    </div>
    <div class="flex flex-col items-center justify-center p-5">
      <div
        v-if="loading"
        class="w-40 h-40 border-t rounded-full animate-spin"
      />
    </div>
  </main>
</template>

<script setup>
import GameCard from "@/components/GameCard.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

let games = ref("");
let publishers = ref("");
let genres = ref("");
let platforms = ref("");
let loading = ref(true);
let game = ref("");
let toggleFilters = ref(false);
let selectedPublisher = ref("");
let selectedGenre = ref("");
let selectedPlatform = ref("");

onMounted(() => {
  fetchGames();
  fetchPublishers();
  fetchPlatforms();
  fetchGenres();
});

function clearFilters() {
  selectedPublisher.value = "";
  selectedGenre.value = "";
  selectedPlatform.value = "";
}

function fetchFilteredGames() {
  toggleFilters.value = false;
  loading.value = true;

  let url = `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`;

  if (selectedGenre.value) {
    url += `&genres=${selectedGenre.value}`;
  }

  if (selectedPlatform.value) {
    url += `&platforms=${selectedPlatform.value}`;
  }

  if (selectedPublisher) {
    url += `&publishers=${selectedPublisher.value}`;
  }

  axios
    .get(url)
    .then((response) => {
      games.value = response.data.results;
      loading.value = false;
    })
    .catch((error) => {
      console.error(error);
    });
}

function fetchGenres() {
  axios
    .get(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`)
    .then((response) => {
      genres.value = response.data.results;
    })
    .catch((error) => {
      console.error(error);
    });
}

function fetchPublishers() {
  axios
    .get(
      `https://api.rawg.io/api/publishers?key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => {
      publishers.value = response.data.results;
    })
    .catch((error) => {
      console.error(error);
    });
}

function fetchPlatforms() {
  axios
    .get(
      `https://api.rawg.io/api/platforms?key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => {
      platforms.value = response.data.results;
    })
    .catch((error) => {
      console.error(error);
    });
}

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
