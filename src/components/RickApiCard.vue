<script setup>
const emit = defineEmits(['click'])
</script>

<template>
  <div
    @click="$emit('click')"
    class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center transition-colors duration-300 hover:bg-gray-100"
  >
    <slot></slot>
  </div>
</template>
