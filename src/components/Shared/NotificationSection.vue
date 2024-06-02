<script setup lang="ts">
import { useNotifyStore } from '@/utils/store'
import NotificationMessage from '@/components/Shared/NotificationMessage.vue'
import { watch } from 'vue'

const { messages, deleteMessage } = useNotifyStore()

watch(messages, (value) => {
  if (value.length) {
    const el = value[value.length - 1]
    const f = () => {
      deleteMessage(el)
    }
    setTimeout(f, 5000)
  }
})
</script>

<template>
  <div
    class="fixed z-0 top-0 left-0 sm:left-1/2 w-full sm:w-[40rem] sm:-translate-x-1/2 flex flex-col gap-y-2 overflow-y-auto"
  >
    <TransitionGroup>
      <NotificationMessage
        v-for="msg in messages"
        :key="msg.msg"
        @closeMessage="() => deleteMessage(msg)"
        :msg="msg.msg"
        :color="msg.color ?? 'default'"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped></style>
