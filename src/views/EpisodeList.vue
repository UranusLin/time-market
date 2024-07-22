<script setup>
import { ref } from 'vue'
import RickApiCard from '@/components/RickApiCard.vue'
import Header from '@/components/Header.vue'

const characters = ref([])
const currentPage = ref(1)
const totalPages = ref(0)
const title = 'Rick & Morty Episode'

// 新增過濾條件
const searchName = ref('')

// 獲取Episode列表的函數
const fetchEpisode = async (page = 1) => {
  let url = `https://rickandmortyapi.com/api/episode/?page=${page}`
  if (searchName.value) {
    url += `&name=${searchName.value}`
  }

  const response = await fetch(url)
  if (!response.ok) {
    characters.value = []
  } else {
    const data = await response.json()
    characters.value = data.results || []
    totalPages.value = data.info.pages || 1
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    fetchEpisode(currentPage.value)
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    fetchEpisode(currentPage.value)
  }
}

const searchCharacters = () => {
  currentPage.value = 1
  fetchEpisode(currentPage.value)
}

const clearFilters = () => {
  searchName.value = ''
  searchCharacters()
}

fetchEpisode(currentPage.value) // 初始化時加載第一頁數據
</script>

<template>
  <div class="container mx-auto p-4">
    <Header :title="title" />
    <!-- 過濾條件輸入框 -->
    <div class="mb-4 flex flex-col md:flex-row gap-4 justify-center">
      <input
        v-model="searchName"
        type="text"
        placeholder="Name"
        class="shadow appearance-none border rounded w-full md:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <div class="mb-4 flex justify-center gap-4">
      <button
        @click="searchCharacters"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Search
      </button>
      <button
        @click="clearFilters"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Clear
      </button>
    </div>

    <!-- 角色列表 -->
    <div v-if="characters.length">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-128 overflow-y-auto"
      >
        <RickApiCard v-for="character in characters" :key="character.id" :character="character">
          <template #default>
            <h2 class="text-xl font-bold text-center">{{ character.name }}</h2>
            <p class="text-gray-700">Air Date: {{ character.air_date }}</p>
            <p class="text-gray-700">Episode: {{ character.episode }}</p>
          </template>
        </RickApiCard>
      </div>

      <!-- 分頁按鈕 -->
      <div class="flex justify-between mt-4">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
    <div v-else>
      <p class="text-center">No Episode found</p>
    </div>
  </div>
</template>
