<script setup>
import { isAuthenticated } from '@/auth'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const login = () => {
  isAuthenticated.value = true
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
