<script setup lang="ts">
import type { IExperienceCard } from '@/models/experienceCard'
import ExpCard from '@/components/PageMain/Skills/ExpCard.vue'
import SkillSlidersList from '@/components/PageMain/Skills/SkillSlidersList.vue'

const experienceCards: IExperienceCard[] = [
  {
    position: 'Network Support Engineer',
    companyName: 'ПАО Ростелеком',
    description: 'Working with network equipment and protocols'
  },
  {
    position: 'Cloud Client Support Engineer',
    companyName: 'ГК СервисКлауд',
    description: 'Virtualization VMware, Cloud Computing, Databases, Monitoring, 1С'
  },
  {
    position: 'Employee Support Engineer',
    companyName: 'ПАО Росгосстрах',
    description: 'Active Directory, VBScript, PowerShell, MS Office'
  },
  {
    position: 'Software Engineer',
    companyName: 'ПАО Росгосстрах',
    description: 'System development and support: Atlassian, Naumen Service Desk, IDM OneIdentity. Custom projects based on C#, Python, JavaScript and oth.'
  }
]

</script>

<template>
    <div class="bg-gray-800 2xl:rounded-2xl p-4">
      <div class="flex flex-col xl:flex-row justify-between items-center gap-4 text-gray-50">
        <h2 class="text-4xl font-bold w-full xl:w-1/2 text-center">My Skills and Expertise</h2>
        <span class="w-full xl:w-1/2">My expertise lies in web development, software engineering, and problem-solving. With years of experience in these fields, I have honed my skills to deliver cutting-edge solutions backed by the latest technologies and design trends. My focus on quality and performance ensures that your web solutions are optimized for success.</span>
      </div>
      <div class="flex justify-start gap-2 flex-wrap mt-4">
        <ExpCard
          v-for="card in experienceCards"
          :key="`${card.position}${card.companyName}`"
          :position="card.position"
          :company-name="card.companyName"
          :description="card.description"
        />
      </div>
      <SkillSlidersList/>
    </div>
</template>

<style scoped>

</style>