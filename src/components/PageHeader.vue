<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <header class="flex justify-between items-center">
    <div>
      <h2 class="text-2xl cursor-pointer hover:-translate-y-1 hover:underline transition font-bold">Alexey Popkov</h2>
    </div>
    <div class="flex gap-8 mx-auto">
      <span>Pricing</span>
      <span>Contact</span>
    </div>
    <div>
      <a href="#">
        <UserCircleIcon class="size-8 text-blue-500" />
      </a>
    </div>
  </header>
</template>

<style scoped>

</style>