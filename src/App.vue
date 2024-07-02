<script setup>
import { computed, ref, watch } from 'vue'

const name = ref('')
const select = ref('')
const checked = ref(false)
const number = ref(0)
const doubleNumber = computed(() => number.value * 2)
const numberAdd = () => {
  number.value++
}
const text = ref('')
const message = ref('')
watch(text, (newValue, oldValue) => {
  message.value = `${oldValue} input change to: ${newValue}`
})
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
    <span>computed demo</span>
    <div>
      <p>原始數字: {{ number }}</p>
      <p>兩倍數字: {{ doubleNumber }}</p>
      <button @click="numberAdd()" class="bg-blue-400 rounded-md p-1 text-white mb-2">
        增加數字
      </button>
    </div>
    <span>watch demo</span>
    <div>
      <input v-model="text" placeholder="input something" class="p-1 rounded-md" />
      <p>{{ message }}</p>
    </div>
  </div>
</template>
