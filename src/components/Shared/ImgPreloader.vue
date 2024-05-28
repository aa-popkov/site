<script setup lang="ts">
import { ref } from 'vue'

interface IProps {
  minImgUrl: string
  origImgUrl: string
  imgAlt: string
  imgWidth: number
}

defineProps<IProps>()

const imgIsLoad = ref(false)
const imgLoaded = (e: Event) => {
  const target = e.target as HTMLElement
  imgIsLoad.value = true
  target.classList.toggle('hidden')
}
</script>

<template>
  <div>
    <img
      v-if="!imgIsLoad"
      :src="minImgUrl"
      class="blur-2xl"
      :alt="imgAlt"
      :width="imgWidth"
      height="auto"
    />
    <img :src="origImgUrl" @load="imgLoaded" :width="imgWidth" :alt="imgAlt" class="hidden" />
  </div>
</template>

<style scoped></style>
