<script setup lang="ts">
import { ref } from 'vue'
import ChevronUpIcon from '@/components/Icons/ChevronUpIcon.vue'

defineProps({
  title: String,
  description: String
})

const isShowInfo = ref(false)
const toggleShowInfo = () => {
  isShowInfo.value = !isShowInfo.value
}
</script>

<template>
  <div class="py-4 border-b border-gray-300">
    <div
      v-on:click="toggleShowInfo"
      class="flex items-center justify-start cursor-pointer hover:underline relative"
    >
      <h3 class="text-2xl font-bold mr-8">{{ title }}</h3>
      <ChevronUpIcon
        class="size-6 fill-gray-500 transition absolute right-0"
        :class="isShowInfo ? 'rotate-0' : 'rotate-180'"
      />
    </div>
    <div
      :style="{ maxHeight: isShowInfo ? '1000px' : 0 }"
      class="overflow-hidden transition-[max-height] duration-300"
    >
      <span>{{ description }}</span>
    </div>
  </div>
</template>

<style scoped></style>
