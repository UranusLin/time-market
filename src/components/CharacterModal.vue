<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  character: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

const handleOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    closeModal()
  }
}
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    @click="handleOverlayClick"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <h2 class="text-2xl font-bold mb-2">{{ character.name }}</h2>
      <img
        :src="character.image"
        :alt="character.name"
        class="w-full h-48 object-scale-down rounded mb-2"
      />
      <p><strong>Status:</strong> {{ character.status }}</p>
      <p><strong>Species:</strong> {{ character.species }}</p>
      <p><strong>Gender:</strong> {{ character.gender }}</p>
      <p><strong>Origin:</strong> {{ character.origin.name }}</p>
      <p><strong>Location:</strong> {{ character.location.name }}</p>
    </div>
  </div>
</template>
