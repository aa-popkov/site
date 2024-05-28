<script setup lang="ts">
import MessageForm from '@/components/PageContact/MessageForm.vue'
import { provide, ref } from 'vue'
import { masteredData } from '@/data/mastered'

const checkedList = ref(masteredData)

provide('checkedList', checkedList.value)
</script>

<template>
  <div class="w-full p-4">
    <h2 class="text-3xl font-bold text-center pb-4">Contact Me</h2>
    <div class="flex justify-center w-full">
      <MessageForm />
    </div>
  </div>
</template>

<style scoped></style>
