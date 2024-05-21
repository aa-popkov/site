<script setup lang="ts">
import { masteredData } from '@/data/mastered'
import MasteredIcon from '@/components/PageMain/Mastered/MasteredIcon.vue'
import type { IMasteredIcon } from '@/models/masteredIcon'
import { ref, watch } from 'vue'
import CheckIcon from '@/components/Icons/CheckIcon.vue'
import TooltipElement from '@/components/Shared/TooltipElement.vue'
import SendIcon from '@/components/Icons/SendIcon.vue'

const selectedIcon = ref<Set<IMasteredIcon>>(new Set())
const textArea = '' +
  'Hi Alexey 👋\n' +
  'I\'m need your expertise, for next:\n'

const text = ref(textArea)
const iconClick = (icon: IMasteredIcon) => {
  if (selectedIcon.value.has(icon)) {
    selectedIcon.value.delete(icon)
    return
  }
  selectedIcon.value.add(icon)
}

watch(selectedIcon.value, () => {
  text.value = textArea.concat([...selectedIcon.value].map(item => `- ${item.title}`).join('\n'))
})

</script>

<template>
  <div class="w-full p-4">
    <h2 class="text-3xl font-bold text-center pb-4">Contact Me</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div class="flex flex-col">
        <h3 class="text-2xl font-light">Please, select one more:</h3>
        <div class="flex gap-2 p-4 flex-wrap">
          <div v-for="icon in masteredData"
               :key="icon.title"
               class="relative rounded-full transition"
               :class="selectedIcon.has(icon) ? 'shadow-green-600 shadow-2xl' : ''">
            <TooltipElement :title="icon.title">
              <MasteredIcon
                :icon="icon.icon"
                v-on:click="() => iconClick(icon)"
              />
            </TooltipElement>
            <div v-if="selectedIcon.has(icon)"
                 class="absolute top-0 right-0 h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-green-800">
              <CheckIcon />
            </div>
          </div>
        </div>
      </div>
      <div class=" bg-gray-800 rounded-2xl flex flex-col p-4 gap-2">
        <label for="name" class="text-gray-50 flex-col flex items-start">
          <span>Enter your name</span>
          <input
            placeholder="Donald Trump"
            type="text" name="name" id="name" required
            maxlength="50"
            minlength="3"
            class="placeholder:italic py-2 px-3 rounded w-full text-gray-950">
        </label>
        <label for="msg-body" class="text-gray-50 flex-col flex items-start">
          <span>Message text</span>
          <textarea
            name="msg-body" id="msg-body"
            rows="6"
            disabled
            placeholder="Dear Alexey, ..."
            class="w-full h-full rounded text-gray-950 px-3 py-2 disabled:bg-gray-200 cursor-not-allowed"
            v-model="text"
          ></textarea>
        </label>
        <TooltipElement title="Temporarily unavailable 😭" class="mx-auto">
          <button
            disabled
                  class="flex items-center px-2 py-1 disabled:bg-gray-500 disabled:cursor-not-allowed transition duration-500 bg-blue-600 text-red-50 rounded w-52 h-8 mx-auto">
            <span class="flex-grow">Send</span>
            <SendIcon class="h-6 w-6"/>
          </button>
        </TooltipElement>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>