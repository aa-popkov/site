<script setup lang="ts">
import type { ICompanyModel } from '@/models/company'
import CompanyCard from '@/components/PageMain/CompanyCard.vue'

const companyList: ICompanyModel[] = [
  {
    name: 'ПАО Ростелеком',
    experienceText: '4 years experience',
    imgUrl: './img/rtk_logo.png'
  },
  {
    name: 'ГК СервисКлауд',
    experienceText: '6 month experience',
    imgUrl: './img/scloud_logo.svg'
  },
  {
    name: 'ПАО Росгосстрах',
    experienceText: '5+ years experience',
    imgUrl: './img/rgs_logo.png'
  }
]
</script>

<template>
  <div
    class="flex justify-center lg:justify-between items-center gap-5 flex-wrap bg-gray-800 px-8 2xl:rounded-xl"
  >
    <CompanyCard v-for="company in companyList" :key="company.name" :company="company" />
  </div>
</template>

<style scoped></style>
