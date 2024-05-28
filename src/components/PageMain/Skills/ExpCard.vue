<script setup lang="ts">
defineProps({
  position: String,
  companyName: String,
  description: String
})
</script>

<template>
  <div
    class="mx-auto appearance-none flex flex-col gap-2 self-stretch p-5 rounded-xl bg-gray-600 hover:shadow-blue-400 hover:shadow-2xl hover:-translate-y-1 transition w-full xl:w-72"
  >
    <span class="text-blue-400">{{ position }}</span>
    <span class="text-2xl font-bold text-gray-50">{{ companyName }}</span>
    <p class="text-gray-50">{{ description }}</p>
  </div>
</template>

<style scoped></style>
