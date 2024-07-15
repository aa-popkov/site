<script setup lang="ts">
import AboutSection from '@/components/PageMain/AboutSection/AboutSection.vue'
import CompanyCardList from '@/components/PageMain/CompanyCardList.vue'
import SkillsAndExp from '@/components/PageMain/Skills/SkillsAndExp.vue'
import MasteredSection from '@/components/PageMain/Mastered/MasteredSection.vue'
import ImgPreloader from '@/components/Shared/ImgPreloader.vue'
</script>

<template>
  <main>
    <div class="flex items-center flex-col">
      <h2 class="text-5xl text-center py-8 font-bold">Crafting Robust Web Solutions</h2>
      <ImgPreloader
        min-img-url="./img/me-min.png"
        orig-img-url="./img/me.png"
        :img-width="705"
        img-alt="Me at photo"
      />
    </div>
    <CompanyCardList />
    <AboutSection />
    <SkillsAndExp />
    <MasteredSection />
  </main>
</template>

<style scoped></style>
