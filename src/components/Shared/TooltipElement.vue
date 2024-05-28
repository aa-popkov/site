<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(false)
const tooltipStyle = ref({ top: '0px', left: '0px' })

const showTooltip = () => {
  isVisible.value = true
}

const hideTooltip = () => {
  isVisible.value = false
}

const updateTooltipPosition = (event: MouseEvent) => {
  const margin = 10 // отступ от курсора

  // Позиция тултипа относительно курсора мыши
  let top = event.clientY + margin
  let left = event.clientX + margin

  // Проверяем, выходит ли тултип за пределы окна, и корректируем позицию
  if (event.clientY + margin > window.innerHeight) {
    top = event.clientY - margin
  }

  if (event.clientX + margin > window.innerWidth) {
    left = event.clientX - margin
  }

  tooltipStyle.value = {
    top: `${top}px`,
    left: `${left}px`
  }
}
</script>

<template>
  <div
    class="relative"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    @mousemove="updateTooltipPosition"
  >
    <slot></slot>
    <Transition>
      <div
        v-if="isVisible"
        class="fixed z-50 p-2 bg-gray-700 bg-opacity-85 text-white rounded shadow-lg"
        :style="tooltipStyle"
      >
        <slot name="content"></slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped></style>
