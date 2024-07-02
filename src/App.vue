<script setup>
import { ref } from 'vue'

const name = ref('')
const select = ref('')
const checked = ref(false)
</script>

<template>
  <div class="flex items-center justify-center flex-col bg-gray-100">
    <div v-if="checked">
      <input
        v-model="name"
        type="text"
        id="name"
        class="shadow appearance-none border rounded w-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="輸入姓名"
      />
      <p>你輸入的是: {{ name }}</p>
    </div>
    <div v-else>
      <select v-model="select">
        <option disabled value="">choose one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
      </select>
      <p>你選擇的是: {{ select }}</p>
    </div>
    <div>
      <input type="checkbox" v-model="checked" />
      <p>checkbox status: {{ checked }}</p>
    </div>
  </div>
</template>
