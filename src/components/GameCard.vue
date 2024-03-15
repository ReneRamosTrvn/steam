<template>
  <main>
    <div class="grid grid-cols-1 lg:grid-cols-3">
      <div class="relative bg-slate-800 rounded-xl m-2" v-for="game in games">
        <img
          :src="game.background_image"
          alt="game-image"
          class="rounded-t-xl object-cover min-h-40 max-h-40 w-full"
        />
        <div class="p-5">
          <div class="flex w-full justify-between">
            <div class="flex flex-wrap">
              <span
                class="text-gray-400 mx-1"
                v-for="platform in game.parent_platforms"
              >
                {{ platform.platform.name }}
              </span>
            </div>
            <div v-if="game.metacritic">
              <GameMetacritic :score="game.metacritic" />
            </div>
          </div>
          <h1 class="text-white font-semibold text-3xl mt-5 mb-20">
            {{ game.name }}
          </h1>
          <div class="text-right">
            <router-link :to="`/game/${game.id}`">
              <button
                class="absolute bottom-5 right-5 border rounded-full px-5 py-2 text-white hover:bg-slate-700 transition-colors duration-150"
              >
                Read More
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import GameMetacritic from "./GameMetacritic.vue";
import { RouterLink } from "vue-router";

const props = defineProps(["games"]);
</script>
