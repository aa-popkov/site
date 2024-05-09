<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

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
    <div v-on:click="toggleShowInfo" class="flex items-center justify-between cursor-pointer hover:underline">
      <h3 class="text-2xl font-bold ">{{ title }}</h3>
      <ChevronDownIcon :style="{rotate: isShowInfo ? '180deg' : '0deg'}"
                       class="size-8 text-grey-500 transition-[rotate]" />
    </div>
    <div :style="{maxHeight: isShowInfo ? '1000px' : 0}"
         class="overflow-hidden transition-[max-height] duration-300">
      <span>{{ description }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>