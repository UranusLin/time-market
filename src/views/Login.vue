<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const login = () => {
  authStore.login()
  const redirectTo = route.query.redirect || '/'
  router.push(redirectTo)
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-center">Login Page</h1>
    <button
      @click="login"
      class="flex justify-center px-4 py-2 m-4 bg-blue-500 hover:bg-blue-700 text-white rounded-full"
    >
      Login
    </button>
  </div>
</template>
