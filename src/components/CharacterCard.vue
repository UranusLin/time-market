<script setup>
defineProps({
  character: {
    type: Object
  }
})
</script>

<template>
  <div class="bg-gray shadow-md rounded-lg p-4 m-4 flex flex-col items-center">
    <img :src="character.image" :alt="character.name" class="w-24 h-24 rounded-full mb-2" />
    <h2 class="text-xl font-bold">{{ character.name }}</h2>
    <p class="text-gray-700">Status: {{ character.status }}</p>
    <p class="text-gray-700">Species: {{ character.species }}</p>
  </div>
</template>
