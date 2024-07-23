<script setup>
import { isAuthenticated } from '@/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  isAuthenticated.value = false
  router.push('/')
}
</script>

<template>
  <div class="flex items-center justify-center flex-col bg-gray-100">
    <!-- <router-link to="/" class="text-4xl font-bold">This is header</router-link> -->
    <nav class="flex flex-row space-x-8">
      <router-link
        to="/"
        class="flex justify-center px-4 py-2 my-4 bg-blue-500 hover:bg-blue-700 text-white rounded-full"
        >Home</router-link
      >
      <router-link
        v-if="!isAuthenticated"
        to="/login"
        class="flex justify-center px-4 py-2 my-4 bg-blue-500 hover:bg-blue-700 text-white rounded-full"
        >Login</router-link
      >
      <button
        v-else
        @click="logout"
        class="flex justify-center px-4 py-2 my-4 bg-blue-500 hover:bg-blue-700 text-white rounded-full"
      >
        LogOut
      </button>
    </nav>
    <router-view> </router-view>
  </div>
</template>
