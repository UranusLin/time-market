<script setup>
import { ref } from 'vue'
const count = ref(0)
const emit = defineEmits(['update-count'])
const incrementCount = () => {
  count.value++
  emit('update-count', count.value)
}
</script>

<template>
  <button @click="incrementCount" class="bg-blue-400 p-2 rounded-xl text-white">增加計數</button>
  <p>Child count: {{ count }}</p>
</template>
