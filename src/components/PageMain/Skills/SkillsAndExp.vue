<script setup lang="ts">
import type { IExperienceCard } from '@/models/experienceCard'
import ExpCard from '@/components/PageMain/Skills/ExpCard.vue'
import SkillsSlider from '@/components/PageMain/Skills/SkillsSlider.vue'

const experienceCards: IExperienceCard[] = [
  {
    position: 'Network Support Engineer',
    companyName: 'ПАО Ростелеком',
    description: 'Working with network equipment and protocols'
  },
  {
    position: 'Cloud Client Support Engineer',
    companyName: 'ГК СервисКлауд',
    description: 'Virtualization, Cloud Computing, Databases, Monitoring, 1С'
  },
  {
    position: 'Employee Support Engineer',
    companyName: 'ПАО Росгосстрах',
    description: 'Active Directory, VBScript, MS Office'
  },
  {
    position: 'Software Engineer',
    companyName: 'ПАО Росгосстрах',
    description: 'System development and support: Atlassian, Naumen Service Desk, IDM OneIdentity. Custom projects based on C#, Python, JavaScript and oth.'
  }
]
/*
* В компании Ростелеком я работал на позиции Network Support Engineer, где получил ценный опыт работы с сетями. За время моей работы я приобрел глубокие знания в области сетевых технологий и протоколов, таких как TCP/IP, OSPF, BGP и MPLS. Я также освоил навыки конфигурации и мониторинга сетевого оборудования, включая маршрутизаторы и коммутаторы. Этот опыт позволил мне развить аналитические способности и научиться быстро решать возникающие проблемы. Кроме того, работа в команде профессионалов дала мне понимание важности коллективной работы и эффективного общения.
* */
</script>

<template>
  <div class="relative bg-gray-800 rounded-xl p-4">
    <div class="2xl:hidden absolute h-full w-screen bg-gray-800 z-10 top-0 left-[-16px]">
    </div>
    <div class="z-20 relative">
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
      <div class="flex items-center flex-wrap px-4 justify-between">
        <SkillsSlider title="Web Development" :percent="70" />
        <SkillsSlider title="Problem Solving" :percent="80" />
        <SkillsSlider title="Software Engineering" :percent="75" />
        <SkillsSlider title="CI/CD" :percent="50" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>