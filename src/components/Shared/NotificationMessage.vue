<script setup lang="ts">
import CancelIcon from '@/components/Icons/CancelIcon.vue'
import { onMounted, ref } from 'vue'
import type { INotifyMessage } from '@/models/notifyMessage'

const borderWidth = ref(100)

const props = defineProps<INotifyMessage>()

onMounted(async () => {
  await new Promise((r) => setTimeout(r, 100))
  borderWidth.value = 0
})

const msgColor = (msg: INotifyMessage) => {
  switch (msg.color) {
    case 'success':
      return 'bg-green-700'
    case 'error':
      return 'bg-red-500'
    default:
      return 'bg-gray-700'
  }
}
</script>

<template>
  <div
    class="w-full min-h-12 overflow-y-auto text-wrap z-50 mx-auto text-gray-50 p-4 rounded relative shadow-2xl"
    :class="msgColor(props)"
  >
    <span>{{ msg }}</span>
    <CancelIcon
      class="w-4 h-4 fill-gray-50 absolute top-2 right-2 cursor-pointer"
      @click="$emit('closeMessage')"
    />
    <div
      class="absolute top-0 left-0 border-blue-500 border transition-[width] duration-[5000ms] ease-linear"
      :style="{ width: `${borderWidth}%` }"
    ></div>
  </div>
</template>

<style scoped></style>
