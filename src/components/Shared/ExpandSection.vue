<script setup lang="ts">
import CancelIcon from '@/components/Icons/CancelIcon.vue'
import { ref } from 'vue'
import ChevronUpIcon from '@/components/Icons/ChevronUpIcon.vue'

interface IProps {
  closable?: boolean
}

defineProps<IProps>()

const isShowSection = ref(true)
const isShowSectionDetails = ref(false)

const closeMessage = () => {
  isShowSection.value = false
}

const toggleDetails = () => {
  isShowSectionDetails.value = !isShowSectionDetails.value
}
</script>

<template>
  <div v-if="isShowSection" class="flex flex-col relative py-1 px-2">
    <div class="flex items-start justify-start gap-2 py-1">
      <div class="flex-grow flex gap-x-2">
        <ChevronUpIcon
          @click="toggleDetails"
          class="w-4 h-4 transition cursor-pointer"
          :class="isShowSectionDetails ? '' : 'rotate-180'"
        />
        <slot name="title" />
      </div>
      <CancelIcon v-if="closable" @click="closeMessage" class="w-6 h-6 cursor-pointer" />
    </div>
    <Transition name="from-top">
      <slot v-if="isShowSectionDetails" name="body" />
    </Transition>
  </div>
</template>

<style scoped></style>
