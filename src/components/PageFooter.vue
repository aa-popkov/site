<script setup lang="ts">

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
      <div>
        <ul class="flex gap-2">
          <li
            class="border-solid border-2 border-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-600 hover:-translate-y-1 transition">
            <img class="m-1" src="/tg_icon.svg" alt="tg_icon" width="20" height="20">
          </li>
          <li
            class="border-solid border-2 border-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-600 hover:-translate-y-1 transition">
            <img class="m-1" src="/in_icon.svg" alt="in_icon" width="20" height="20">
          </li>
          <li
            class="border-solid border-2 border-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-600 hover:-translate-y-1 transition">
            <img class="m-1" src="/inst_icon.svg" alt="inst_icon" width="20" height="20">
          </li>
          <li
            class="border-solid border-2 border-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-600 hover:-translate-y-1 transition">
            <img class="m-1" src="/email_icon.svg" alt="email_icon" width="20" height="20">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>