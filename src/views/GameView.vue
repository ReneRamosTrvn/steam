<template>
  <main>
    <div
      v-if="loading"
      class="min-h-screen flex flex-col items-center justify-center p-5 lg:p-10"
    >
      <div class="w-40 h-40 border-t rounded-full animate-spin"></div>
    </div>
    <div class="w-full p-5">
      <img
        class="max-h-96 w-full object-cover rounded-xl mb-5"
        :class="`shadow-2xl shadow-[${game.dominant_color}]`"
        :src="game.background_image"
        :alt="game.name"
      />
      <h1 class="text-4xl font-bold text-white mb-2">{{ game.name }}</h1>
      <div class="flex flex-wrap mb-1">
        <div
          v-for="genre in game.genres"
          class="bg-slate-600 text-white py-1 px-2 rounded-xl mx-1"
        >
          {{ genre.name }}
        </div>
      </div>
      <div class="flex space-x-1">
        <span
          v-for="developer in game.developers"
          class="text-sm font-light text-slate-500 mb-1"
        >
          {{ developer.name }}
        </span>
      </div>
      <h1 class="text-sm font-light text-slate-500 mb-5">
        Release date {{ game.released }}
      </h1>
      <div class="flex flex-wrap border-b border-slate-400">
        <div class="w-full">
          <div class="grid grid-cols-3">
            <button
              @touchend="toggleTabs(index + 1)"
              v-for="(tab, index) in tabs"
              type="button"
              :key="index"
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              @click="toggleTabs(index + 1)"
              :class="{
                'text-slate-400 ': openTab !== index + 1,
                'text-white bg-slate-800': openTab === index + 1,
              }"
            >
              {{ tab }}
            </button>
          </div>
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6">
            <div class="lg:px-4 py-5 flex-auto">
              <div class="tab-content tab-space">
                <div
                  :class="{
                    hidden: openTab !== 1,
                    block: openTab === 1,
                  }"
                >
                  <p
                    class="text-gray-400 leading-10"
                    v-html="game.description"
                  ></p>
                </div>
                <div
                  :class="{
                    hidden: openTab !== 2,
                    block: openTab === 2,
                  }"
                >
                  <div
                    class="flex flex-wrap items-center border-b border-slate-600 pb-5"
                  >
                    <p class="text-2xl font-semibold text-white mr-2">
                      Avarage metascore:
                    </p>
                    <GameMetacritic :score="game.metacritic" />
                  </div>
                  <p
                    class="text-center lg:text-left text-2xl font-semibold text-white mr-2 mt-5"
                  >
                    Metascore per platform
                  </p>
                  <div class="grid grid-cols-1 lg:grid-cols-3">
                    <div
                      v-for="platform in game.metacritic_platforms"
                      class="grid grid-cols-2 items-center border border-slate-700 rounded-xl m-2 p-8 justify-between"
                    >
                      <p class="text-white text-xl font-bold mr-3">
                        {{ platform.platform.name }}:
                      </p>
                      <div class="flex">
                        <GameMetacritic :score="platform.metascore" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  :class="{
                    hidden: openTab !== 3,
                    block: openTab === 3,
                  }"
                >
                  <div class="text-white grid grid-cols-1 lg:grid-cols-3">
                    <div
                      v-for="store in game.stores"
                      class="border rounded-xl p-10 m-5 flex justify-between items-center"
                    >
                      <p>{{ store.store.name }}</p>
                      <i class="pi pi-shopping-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap space-x-2 mt-2">
        <p
          v-for="tag in game.tags"
          class="text-slate-400 font-extralight text-sm"
        >
          {{ tag.name }}
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import GameMetacritic from "../components/GameMetacritic.vue";

const game = ref("");
let gameId = useRoute();
const loading = ref(false);
let openTab = ref(1);
const tabs = ["Description", "Critics", "Buy"];

onMounted(() => {
  fetchGame();
});

function fetchGame() {
  loading.value = true;
  axios
    .get(
      `https://api.rawg.io/api/games/${gameId.params.id}?key=b7c5c6b89bcf4a3093097d8eba0f708a`
    )
    .then((response) => {
      game.value = response.data;
      loading.value = false;
    })
    .catch((error) => {
      console.error(error);
    });
}

function toggleTabs(tabNumber) {
  openTab.value = tabNumber;
}
</script>
