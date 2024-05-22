<script setup lang="ts">
import MasteredIcon from '@/components/PageMain/Mastered/MasteredIcon.vue'
import { masteredData } from '@/data/mastered'
import TooltipElement from '@/components/Shared/TooltipElement.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { onIntersect } from '@/utils/observer'

const iconContainer = ref()
const iconIsShow = ref(false)
const observer = ref()

const showIcon = () => {
  iconIsShow.value = true
}

const hideIcon = () => {
  iconIsShow.value = false
}

onMounted(() => {
  observer.value = onIntersect(
    {
      elementToWatch: iconContainer.value,
      callback: () => showIcon()
      ,
      outCallback: () => hideIcon()
      ,
      once: false,
      options: { threshold: 0.8, rootMargin: '50px 0px 50px 0px' }
    }
  )
})

onUnmounted(() => {
  observer.value.disconnect()
})

</script>

<template>
  <div class="flex gap-2 p-4 flex-wrap" ref="iconContainer">
    <TooltipElement v-for="icon in masteredData"
                    :key="icon.title"
                    :title="icon.title"
    >
      <Transition name="list" :duration="700">
        <MasteredIcon
          v-if="iconIsShow"
          :title="icon.title"
          :icon="icon.icon"
        />
      </Transition>
    </TooltipElement>

  </div>
</template>

<style scoped>

</style>