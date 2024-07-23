import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCharacterStore = defineStore('character', () => {
  const characters = ref([])
  const currentPage = ref(1)
  const totalPages = ref(0)
  const showModal = ref(false)
  const selectedCharacter = ref(null)

  // 獲取角色列表的函數
  const fetchCharacters = async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
      characters.value = []
    } else {
      const data = await response.json()
      characters.value = data.results || []
      totalPages.value = data.info.pages || 1
    }
  }

  const fetchCharacterById = async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await response.json()
    selectedCharacter.value = data
    showModal.value = true
  }

  return {
    characters,
    currentPage,
    totalPages,
    showModal,
    selectedCharacter,
    fetchCharacters,
    fetchCharacterById
  }
})
