<script setup lang="ts">

import CheckboxTreeList from '@/components/Shared/CheckboxTreeList.vue'
import { inject, provide } from 'vue'
import type { TTreeChecked } from '@/models/treeChecked'

const data = inject('checkedList') as TTreeChecked[]

const findParent = (el: TTreeChecked, parents: TTreeChecked[] = data): TTreeChecked | null => {
  for (const parent of parents) {
    if (parent.children?.length && parent.children.includes(el)) {
      return parent
    }
    if (parent.children?.length) {
      const p = findParent(el, parent.children)
      if (p) return p
    }
  }
  return null
}

const updateParent = (node: TTreeChecked) => {
  const parent = findParent(node)
  if (parent) {
    const allChildChecked = parent?.children?.every(v => v.checked === true)
    parent.checked = !!allChildChecked
    updateParent(parent)
  }
}

const updateElement = (el: TTreeChecked, ch: boolean = false, fromChild: boolean = false) => {
  el.checked = fromChild ? ch : !el.checked
  if (el.children?.length) {
    el.children.forEach((value) => updateElement(value, el.checked, true))
  }
}

const toggleChecked = (el: TTreeChecked) => {
  updateElement(el)
  updateParent(el)
}

provide('toggle', toggleChecked)

</script>

<template>
  <div class="p-4">
    <CheckboxTreeList :data="data" :level="0" />
  </div>
</template>

<style scoped>

</style>