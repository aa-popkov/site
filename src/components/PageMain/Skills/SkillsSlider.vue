<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { onIntersect } from '@/utils/observer'

const props = defineProps({
  title: String,
  percent: Number
})

const defaultPercent = ref(0)
const observer = ref()
const skillsSlider = ref({})

const fillSlider = async () => {
  const percent = props.percent ?? 0
  for (let i = 0; i < percent; i++) {
    defaultPercent.value = i
  }
}

onMounted(() => {
  observer.value = onIntersect({
    elementToWatch: skillsSlider.value,
    callback: () => fillSlider(),
    outCallback: () => (defaultPercent.value = 0),
    once: false,
    options: { threshold: 0.8, rootMargin: '50px 0px 50px 0px' }
  })
})
onUnmounted(() => {
  observer.value.disconnect()
})
</script>

<template>
  <div class="flex flex-col w-full px-0 sm:px-2 py-2 sm:w-1/2" ref="skillsSlider">
    <label for="skill-range-{{title}}" class="text-gray-50">{{ title }}</label>
    <div class="w-full bg-gray-200 rounded-full h-2.5">
      <div
        class="bg-blue-600 h-2.5 rounded-full transition-[width] duration-1000"
        :style="{ width: `${defaultPercent}%` }"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
