<script setup lang="ts">
import AboutSection from '@/components/PageMain/AboutSection/AboutSection.vue'
import CompanyCardList from '@/components/PageMain/CompanyCardList.vue'
import SkillsAndExp from '@/components/PageMain/Skills/SkillsAndExp.vue'
import MasteredSection from '@/components/PageMain/Mastered/MasteredSection.vue'
</script>

<template>
  <main>
    <div class="flex items-center flex-col">
      <h2 class="text-5xl text-center py-8 font-bold">Crafting Robust Web Solutions</h2>
      <img src="/img/me.png" alt="logo" width="705">
    </div>
    <CompanyCardList />
    <AboutSection />
    <SkillsAndExp />
    <MasteredSection/>
  </main>
</template>

<style scoped>

</style>