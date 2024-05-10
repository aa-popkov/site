<script setup lang="ts">

import SkillsSlider from '@/components/PageMain/Skills/SkillsSlider.vue'
import type { ISkillSlider } from '@/models/skillSlider'

const skillSliderList: ISkillSlider[] = [
  {
    title: 'Web Development',
    percent: 70
  },
  {
    title: 'Problem Solving',
    percent: 80
  },
  {
    title: 'Software Engineering',
    percent: 75
  },
  {
    title: 'CI/CD',
    percent: 50
  }
]


</script>

<template>
  <div class="flex items-center flex-wrap px-4 justify-between">
      <SkillsSlider
        v-for="item in skillSliderList"
        :key="item.title"
        :title="item.title"
        :percent="item.percent" />
  </div>
</template>

<style scoped>

</style>