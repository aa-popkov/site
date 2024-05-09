<script setup lang="ts">
import type { IExperienceCard } from '@/models/experienceCard'
import ExpCard from '@/components/PageMain/Skills/ExpCard.vue'

const experienceCards: IExperienceCard[] = [
  {
    position: 'Network Support Engineer',
    companyName: 'ПАО Ростелеком',
    description: 'Что-то'
  },
  {
    position: 'Cloud Client Support Engineer',
    companyName: 'ГК СервисКлауд',
    description: 'ыфвф'
  },
  {
    position: 'Employee Support Engineer',
    companyName: 'ПАО Росгосстрах',
    description: 'sada'
  },
  {
    position: 'Atlassian Engineer',
    companyName: 'ПАО Росгосстрах',
    description: 'sada'
  },
  {
    position: 'Software Engineer',
    companyName: 'ПАО Росгосстрах',
    description: 'sadada'
  }
]
</script>

<template>
  <div class="flex flex-col sm:flex-row justify-between items-center gap-4 py-4">
    <h2 class="text-4xl font-bold w-full sm:w-1/2 text-center">My Skills and Expertise</h2>
    <span class="w-full sm:w-1/2">My expertise lies in web development, software engineering, and problem-solving. With years of experience in these fields, I have honed my skills to deliver cutting-edge solutions backed by the latest technologies and design trends. My focus on quality and performance ensures that your web solutions are optimized for success.</span>
  </div>
  <div class="flex justify-start gap-4 flex-wrap">
    <ExpCard
      v-for="card in experienceCards"
      :key="`${card.position}${card.companyName}`"
      :position="card.position"
      :company-name="card.companyName"
      :description="card.description"
    />
  </div>
</template>

<style scoped>

</style>