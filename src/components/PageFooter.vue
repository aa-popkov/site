<script setup lang="ts">

import ContactLinkList from '@/components/PageFooter/ContactLinkList.vue'
</script>

<template>
  <div
    class="fixed bottom-0 z-50 w-full 2xl:container flex flex-col md:flex-row gap-2 md:gap-0 mt-5 bg-gray-800 2xl:rounded-t-2xl p-4 justify-between items-center">
    <div class="hidden md:block">
      <h2 class="text-2xl text-gray-50 cursor-pointer hover:-translate-y-1 hover:underline transition font-bold">
        Alexey
        Popkov</h2>
    </div>
    <div class="flex gap-4 justify-center">
      <span class="text-gray-50">Pricing</span>
      <span class="text-gray-50">Contact</span>
    </div>
    <ContactLinkList />
  </div>
</template>

<style scoped>

</style>