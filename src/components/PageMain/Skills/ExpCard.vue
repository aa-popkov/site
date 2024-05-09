<script setup lang="ts">
defineProps({
  position: String,
  companyName: String,
  description: String
})
</script>

<template>
  <div class="mx-auto p-5 rounded-xl bg-gray-200 hover:shadow-2xl hover:-translate-y-1 transition w-full sm:w-72">
    <div class="flex flex-col items-start gap-4">
      <span class="text-blue-600">{{position}}</span>
      <span class="text-2xl font-bold">{{companyName}}</span>
      <span class="text-gray-500">{{description}}</span>
    </div>
  </div>
</template>

<style scoped>

</style>