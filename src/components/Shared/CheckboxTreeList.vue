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
    <div v-for="c in data" :key="c.title" class="rounded hover:bg-blue-900 transition">
      <div
        :style="{ paddingLeft: level ? `${level}rem` : '' }"
        @click="() => toggle(c)"
        :class="!c.children?.length ? 'hover:bg-blue-800 transition rounded' : ''"
      >
        <label for="checkbox" class="flex gap-x-2 cursor-pointer items-center">
          <input
            type="checkbox"
            name="checkbox"
            class="cursor-pointer appearance-none w-4 h-4 rounded-sm bg-white ml-1 shrink-0 checked:bg-blue-800 checked:border-0 relative peer focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
            :checked="c.checked"
          />
          <svg
            class="absolute w-4 h-4 ml-1 hidden peer-checked:block pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
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
