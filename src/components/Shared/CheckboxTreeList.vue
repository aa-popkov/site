<script setup lang="ts">
import { inject } from 'vue'
import type { TTreeChecked } from '@/models/treeChecked'

interface IProps {
  data: TTreeChecked[]
  level: number
}

defineProps<IProps>()

const toggle = inject('toggle') as (e: TTreeChecked) => {}
</script>

<template>
  <div>
    <div v-for="c in data" :key="c.title" class="rounded hover:bg-blue-100 transition">
      <div
        :style="{ paddingLeft: level ? `${level}rem` : '' }"
        @click="() => toggle(c)"
        :class="!c.children?.length ? 'hover:bg-blue-200 transition' : ''"
      >
        <label for="checkbox" class="flex gap-x-2 cursor-pointer">
          <input type="checkbox" name="checkbox" class="cursor-pointer" :checked="c.checked" />
          <span>
            {{ c.title }}
          </span>
        </label>
      </div>
      <CheckboxTreeList v-if="c.children?.length" :data="c.children" :level="level + 1" />
    </div>
  </div>
</template>

<style scoped></style>
