<script setup lang="ts">

import ContactLinkList from '@/components/PageFooter/ContactLinkList.vue'
</script>

<template>
  <div class="relative">
    <div class="2xl:hidden absolute h-full w-screen bg-gray-800 z-10 top-0 left-[-16px]">
    </div>
    <div
      class="z-20 flex flex-col md:flex-row gap-2 md:gap-0 mt-5 bg-gray-800 rounded-t-2xl p-4 justify-center items-center relative">
      <div class="hidden md:block">
        <h2 class="text-2xl text-gray-50 cursor-pointer hover:-translate-y-1 hover:underline transition font-bold">
          Alexey
          Popkov</h2>
      </div>
      <div class="flex gap-4 grow justify-center">
        <span class="text-gray-50">Pricing</span>
        <span class="text-gray-50">Contact</span>
      </div>
      <ContactLinkList/>
    </div>
  </div>
</template>

<style scoped>

</style>