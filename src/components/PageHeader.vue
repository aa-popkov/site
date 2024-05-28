<script setup lang="ts">
import { Bars3Icon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const showDrop = ref(false)
const toggleDrop = () => {
  showDrop.value = !showDrop.value
  const body = document.querySelector('body')
  const bodyScrollWidth = window.innerWidth - document.documentElement.clientWidth
  if (!showDrop.value && body) {
    body.className = ''
    return
  }
  body?.classList.toggle('overflow-hidden')
  body?.classList.toggle(`mr-[${bodyScrollWidth}px]`)
}
</script>

<template>
  <header class="flex justify-between items-center bg-gray-800 p-4 2xl:rounded-b-2xl z-20">
    <div>
      <RouterLink
        to="/"
        active-class="border-b-blue-800 border-b-2"
        class="text-2xl cursor-pointer hover:-translate-y-1 transition text-gray-50 font-bold"
      >
        Alexey Popkov
      </RouterLink>
    </div>
    <div class="relative hidden sm:block">
      <Bars3Icon class="size-8 text-gray-50" @click="toggleDrop" />
      <button
        v-if="showDrop"
        @click="toggleDrop"
        class="fixed bg-black opacity-30 w-full inset-0 h-full cursor-default"
      ></button>
      <Transition name="drop">
        <div
          v-if="showDrop"
          class="absolute right-0 py-2 bg-gray-700 shadow-2xl text-gray-50 rounded flex flex-col w-48"
        >
          <RouterLink @click="toggleDrop" class="px-4 py-1 hover:bg-blue-600" to="/pricing"
            >Pricing</RouterLink
          >
          <RouterLink @click="toggleDrop" class="px-4 py-1 hover:bg-blue-600" to="/contact"
            >Contact</RouterLink
          >
        </div>
      </Transition>
    </div>
    <div class="relative block sm:hidden [overflow:overlay]">
      <ChevronDownIcon
        class="size-8 text-gray-50 transition"
        :class="showDrop ? 'rotate-180' : ''"
        @click="toggleDrop"
      />
      <button
        v-if="showDrop"
        @click="toggleDrop"
        class="z-10 fixed bg-black opacity-30 w-full inset-0 h-full cursor-default"
      ></button>
      <Transition name="drop">
        <div
          v-if="showDrop"
          class="z-20 fixed left-0 top-16 w-screen h-fit bg-gray-700 text-gray-50 flex flex-col items-center"
        >
          <RouterLink @click="toggleDrop" class="px-4 py-1 hover:bg-blue-600" to="/pricing"
            >Pricing</RouterLink
          >
          <RouterLink @click="toggleDrop" class="px-4 py-1 hover:bg-blue-600" to="/contact"
            >Contact</RouterLink
          >
        </div>
      </Transition>
    </div>
  </header>
</template>

<style scoped></style>
