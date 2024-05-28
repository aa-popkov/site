<script setup lang="ts">
import { type PropType } from 'vue'
import type { ICompanyModel } from '@/models/company'

defineProps({
  company: Object as PropType<ICompanyModel>
})
</script>

<template>
  <div class="flex items-center gap-5 py-5">
    <div class="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] flex justify-center items-center">
      <img :src="company?.imgUrl" alt="rtk-logo" width="150" />
    </div>
    <div class="flex flex-col">
      <span class="font-bold text-white text-lg sm:text-2xl">{{ company?.name }}</span>
      <span class="font-mono text-white text-md sm:text-lg">{{ company?.experienceText }}</span>
    </div>
  </div>
</template>

<style scoped></style>
