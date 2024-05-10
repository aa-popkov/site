<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({
  title: String,
  percent: Number
})
const defaultPercent = ref(0)

onMounted(async ()=>{
  const percent = props.percent ?? 0
  for (let i = 0; i < percent; i++) {
    await new Promise((r) => setTimeout(r, 10))
    defaultPercent.value = i
  }
})

</script>

<template>
  <div class="flex flex-col w-full px-0 sm:px-2 py-2 sm:w-1/2">
    <label for="skill-range-{{title}}" class="text-gray-50">{{title}}</label>
    <div class="w-full bg-gray-200 rounded-full h-2.5">
      <div class="bg-blue-600 h-2.5 rounded-full" :style="{width: `${defaultPercent}%`}"></div>
    </div>
  </div>
</template>

<style scoped>

</style>