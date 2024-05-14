<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <header class="flex justify-between items-center bg-gray-800 p-4 2xl:rounded-b-2xl z-20">
      <div>
        <RouterLink
          to="/"
          active-class="border-b-blue-800 border-b-2"
          class="text-2xl cursor-pointer hover:-translate-y-1 transition text-gray-50 font-bold">
          Alexey Popkov
        </RouterLink>
      </div>
      <div class="flex gap-4">
        <RouterLink to="/pricing" class="text-gray-50" active-class="border-b-blue-800 border-b-2">Pricing</RouterLink>
        <RouterLink to="/contact" class="text-gray-50" active-class="border-b-blue-800 border-b-2">Contact</RouterLink>
      </div>
      <div>
        <RouterLink to="/admin">
          <UserCircleIcon class="size-8 text-gray-50" />
        </RouterLink>
      </div>
    </header>
</template>

<style scoped>

</style>