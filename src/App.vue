<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <header class="bg-white shadow">
      <div class="container mx-auto py-6 px-4">
        <h1 class="text-3xl font-bold">通訊錄管理頁面</h1>
      </div>
    </header>
    <main class="container mx-auto flex-1 p-4">
      <form id="contactForm" class="mb-4">
        <div class="mb-4">
          <label for="name" class="block text-gray-700">姓名:</label>
          <input
            type="text"
            id="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="輸入姓名"
          />
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-gray-700">電話:</label>
          <input
            type="text"
            id="phone"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="輸入電話"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          新增聯絡人
        </button>
      </form>

      <input
        type="text"
        id="search"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        placeholder="搜尋聯絡人"
      />

      <ul id="contactList" class="list-none p-0">
        <!-- show contacts -->
      </ul>
    </main>
    <footer class="bg-gray-200 py-4 text-center">
      <p class="text-gray-600">&copy; 2023 Your Company</p>
    </footer>
  </div>
</template>
