<template>
  <main>
    <p
      class="p-3 text-2xl border-2 rounded-md"
      :class="
        score <= 50
          ? 'text-red-700  border-red-700'
          : score > 50 && score < 85
          ? 'text-yellow-500  border-yellow-500'
          : score >= 85
          ? 'text-green-600 border-green-600'
          : 'text-white'
      "
    >
      {{ score }}
    </p>
  </main>
</template>

<script setup>
const props = defineProps(["score"]);
</script>
