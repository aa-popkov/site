<script setup lang="ts">

import AboutInfoCard from '@/components/PageMain/AboutSection/AboutInfoCard.vue'
import type { IAboutCard } from '@/models/aboutCard'

const aboutInfoCards: IAboutCard[] = [
  {
    title: 'My Vision for Web Solutions',
    description: 'My vision is to provide innovative web solutions that empower businesses to achieve their digital aspirations, leveraging the latest technologies and design trends to create a seamless user experience that drives growth and engagement.'
  },
  {
    title: 'My Mission in Delivering Quality Web Solutions',
    description: 'To deliver top-notch web solutions that cater to client needs, all while staying at the forefront of the latest technologies and industry trends. I strive to create intuitive, user-friendly interfaces that prioritize functionality and usability, all while maintaining the highest standards of quality and performance.'
  }
]

</script>

<template>
    <h2 class="text-4xl font-bold py-4 text-balance">Building Web Solutions with Cutting-edge Technologies</h2>
    <span class="font-mono text-gray-500 py-4 text-balance">With 5+ years of experience in web development, I have mastered the art of building web solutions that cater to a diverse range of business needs. My work focuses on custom web development, software engineering, and problem-solving, all backed by the latest technologies and industry standards.</span>
    <AboutInfoCard
      v-for="card in aboutInfoCards"
      :key="card.title"
      :title="card.title"
      :description="card.description" />
</template>

<style scoped>

</style>