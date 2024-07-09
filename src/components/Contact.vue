<script setup>
defineProps({
  contact: Object
})
</script>

<template>
  <div class="bg-gray shadow-md rounded-lg p-4 mb-4 w-48">
    <div class="flex items-center mb-2">
      <div class="text-gray-600 font-medium mr-2 w-14">ID:</div>
      <div class="text-gray-800">{{ contact.id }}</div>
    </div>
    <div class="flex items-center mb-2">
      <div class="text-gray-600 font-medium mr-2 w-14">Name:</div>
      <div class="text-gray-800">{{ contact.name }}</div>
    </div>
    <div class="flex items-center mb-2">
      <div class="text-gray-600 font-medium mr-2 w-14">Phone:</div>
      <div class="text-gray-800">{{ contact.phone }}</div>
    </div>
  </div>
</template>
