<script setup>
import { computed, ref, watch } from 'vue'
import ChildCompontent from '@/components/ChildComponent.vue'
import Counter from '@/components/Counter.vue'
import Contact from '@/components/Contact.vue'

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
const count = ref(0)
const updateCount = (newCount) => {
  count.value = newCount
}
const contacts_list = [
  {
    id: 1,
    name: 'Morris',
    phone: '0912123123'
  },
  {
    id: 2,
    name: 'KK',
    phone: '09111111'
  }
]
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
    <ChildCompontent :message="text" />
    <Counter @update-count="updateCount" />
    <p>Parent count: {{ count }}</p>
    <div v-for="conact of contacts_list" :key="conact.id">
      <p>id: {{ conact.id }}</p>
      <p>name: {{ conact.name }}</p>
      <p>phone: {{ conact.phone }}</p>
    </div>
    <li v-for="(value, key) in contacts_list" :key="key">
      <ul>
        <p>{{ key }}, {{ value }}</p>
      </ul>
    </li>
    <div v-for="conact of contacts_list" :key="conact.id" class="mt-4">
      <Contact :contact="conact" />
    </div>
  </div>
</template>
