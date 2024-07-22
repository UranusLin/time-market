<script setup></script>

<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="space-y-4">
      <h1 class="text-4xl font-bold mb-6 text-center">Rick & Morty Navigation</h1>
      <router-link
        to="/character"
        class="block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Characters
      </router-link>
      <router-link
        to="/location"
        class="block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Locations
      </router-link>
      <router-link
        to="/episode"
        class="block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Episodes
      </router-link>
    </div>
  </div>
</template>
