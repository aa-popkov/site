<script setup lang="ts">

import CompanyCardList from '@/components/PageMain/CompanyCardList.vue'
import AboutSection from '@/components/PageMain/AboutSection/AboutSection.vue'
import SkillsAndExp from '@/components/PageMain/Skills/SkillsAndExp.vue'
</script>

<template>
  <main>
    <div class="flex items-center flex-col">
      <h2 class="text-5xl text-center py-8 font-bold">Crafting Robust Web Solutions</h2>
      <img src="/img.png" alt="logo" width="705">
    </div>
    <CompanyCardList/>
    <AboutSection/>
    <SkillsAndExp/>
  </main>
</template>

<style scoped>

</style>