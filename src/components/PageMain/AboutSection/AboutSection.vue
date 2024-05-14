<script setup lang="ts">

import AboutInfoCardList from '@/components/PageMain/AboutSection/AboutInfoCardList.vue'

</script>

<template>
    <h2 class="text-5xl font-bold text-center py-8">Innovative Solutions for Digital World</h2>
    <div class="flex justify-center items-center gap-10">
          <div class="w-1/2 hidden md:block">
            <img src="/img/me.png" alt="me" class="transform -scale-x-100">
          </div>
          <div class="w-full md:w-1/2">
            <AboutInfoCardList/>
          </div>
    </div>
</template>

<style scoped>

</style>