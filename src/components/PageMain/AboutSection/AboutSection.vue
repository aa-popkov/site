<script setup lang="ts">
import AboutInfoCardList from '@/components/PageMain/AboutSection/AboutInfoCardList.vue'
import ImgPreloader from '@/components/Shared/ImgPreloader.vue'
</script>

<template>
  <div class="px-4">
    <h2 class="text-5xl font-bold text-center py-8">Innovative Solutions for Digital World</h2>
    <div class="flex justify-center items-center gap-10">
      <div class="w-1/2 hidden md:block">
        <ImgPreloader
          class="transform -scale-x-100"
          min-img-url="./img/me-min.png"
          orig-img-url="./img/me.png"
          :img-width="705"
          img-alt="Me at photo"
        />
      </div>
      <div class="w-full md:w-1/2">
        <AboutInfoCardList />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
