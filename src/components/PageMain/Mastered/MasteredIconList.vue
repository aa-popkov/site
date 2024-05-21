<script setup lang="ts">
import MasteredIcon from '@/components/PageMain/Mastered/MasteredIcon.vue'
import { masteredData } from '@/data/mastered'
import TooltipElement from '@/components/Shared/TooltipElement.vue'
</script>

<template>
  <div class="flex gap-2 p-4 flex-wrap">
    <TooltipElement v-for="icon in masteredData"
                    :key="icon.title" :title="icon.title">
      <MasteredIcon
        :title="icon.title"
        :icon="icon.icon"
      />
    </TooltipElement>

  </div>
</template>

<style scoped>

</style>