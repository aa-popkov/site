<script setup lang="ts">
import type { Component } from 'vue'

interface IProps {
  title: string
  icon: Component
}

defineProps<IProps>()

</script>

<template>
  <div :title="title" class="hover:shadow-blue-800 hover:shadow-2xl bg-gray-700 rounded-full p-2 md:p-5 h-12 w-12 md:h-24 md:w-24 cursor-pointer hover:-translate-y-1 transition">
    <component :is="icon"/>
  </div>
</template>

<style scoped>

</style>