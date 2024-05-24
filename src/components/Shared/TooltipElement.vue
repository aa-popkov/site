<script setup lang="ts">

interface IProps {
  title: string | HTMLElement
}

defineProps<IProps>()

</script>

<template>
  <div class="relative">
    <div class="peer/tooltip">
      <slot />
    </div>
    <div class="absolute z-50 bg-opacity-70 min-w-24 sm:min-w-52 w-fit text-center p-1 left-1/2 -translate-x-1/2 hidden peer-hover/tooltip:block bg-gray-700 text-red-50 rounded">
      {{ title }}
    </div>
  </div>
</template>

<style scoped>

</style>