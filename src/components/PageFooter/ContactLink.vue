<script setup lang="ts">
defineProps({
  iconUrl: String,
  alt: String,
  linkUrl: String
})
</script>

<template>
  <a :href="linkUrl"
     target="_blank"
     class="border-solid border-2 border-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-600 hover:-translate-y-1 transition">
    <img class="m-1" :src="iconUrl" alt="{{alt}}" width="20" height="20">
  </a>
</template>

<style scoped>

</style>