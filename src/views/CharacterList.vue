<!-- get character list forom api -->
<script setup>
import { ref } from 'vue'
import CharacterCard from '@/components/CharacterCard.vue'

const characters = ref([])
const currentPage = ref(1)
const totalPage = ref(0)

const fetchCharacters = async (page = 1) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
  const data = await response.json()
  characters.value = data.results || []
  totalPage.value = data.info.pages || 1
}

const nextPage = () => {
  if (currentPage.value < totalPage.value) {
    currentPage.value++
    fetchCharacters(currentPage.value)
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    fetchCharacters(currentPage.value)
  }
}

fetchCharacters(currentPage.value) // 呼叫api 取得角色
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="flex items-center justify-center text-3xl font-bold mb-4">
      Rick & Morty Characters
    </h1>
    <div
      v-if="characters.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-100 overflow-y-auto"
    >
      <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
    </div>
    <div v-if="characters.length" class="flex justify-between mt-4">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        上一頁
      </button>
      <span>Page {{ currentPage }} / {{ totalPage }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPage"
        class="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        下一頁
      </button>
    </div>
    <div v-else>
      <p>找不到角色</p>
    </div>
  </div>
</template>
