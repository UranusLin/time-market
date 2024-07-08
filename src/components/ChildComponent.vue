<script setup>
defineProps({
  message: String
})
</script>

<template>
  <div>
    <h1 class="text-red-500 text-xl">Child Component</h1>
    <p>{{ message }}</p>
  </div>
</template>
