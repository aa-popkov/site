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
const emit = defineEmits(['clear'])

const closeMessage = () => {
  emit('clear')
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
          class="w-4 h-4 transition cursor-pointer fill-gray-500 stroke-gray-700"
          :class="isShowSectionDetails ? '' : 'rotate-180'"
        />
        <slot name="title" />
      </div>
      <CancelIcon
        v-if="closable"
        @click="closeMessage"
        class="w-4 h-4 cursor-pointer fill-gray-500 stroke-gray-700"
      />
    </div>
    <Transition name="from-top">
      <slot v-if="isShowSectionDetails" name="body" />
    </Transition>
  </div>
</template>

<style scoped></style>
