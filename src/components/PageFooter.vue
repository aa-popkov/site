<script setup lang="ts">

import ContactLinkList from '@/components/PageFooter/ContactLinkList.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { onIntersect } from '@/utils/observer'

const footerEl = ref<HTMLElement>()
const parentFooterEl = ref<HTMLElement>()
const observer = ref()
const showFooter = () => {
  footerEl.value?.classList.remove('translate-y-full')
}

const hideFooter = () => {
  footerEl.value?.classList.add('translate-y-full')
}

onMounted(() => {
  observer.value = onIntersect({
    elementToWatch: parentFooterEl.value,
    callback: () => showFooter(),
    outCallback: () => hideFooter(),
    once: false,
    options: {
      rootMargin: '0px 0px 20px 0px',
      threshold: 1.0
    }
  })
})

onUnmounted(() => {
  observer.value.disconnect()
})


</script>

<template>
  <div ref="parentFooterEl">
    <footer ref="footerEl"
            v-on:click="showFooter"
            class="translate-y-full transition duration-500 fixed bottom-0 z-50 w-full 2xl:container flex flex-col md:flex-row gap-2 md:gap-0 mt-5 bg-gray-800 2xl:rounded-t-2xl p-4 justify-between items-center">
      <div class="hidden md:block">
        <h2 class="text-2xl text-gray-50 cursor-pointer hover:-translate-y-1 hover:underline transition font-bold">
          Alexey
          Popkov</h2>
      </div>
      <div class="flex gap-4 justify-center">
        <span class="text-gray-50">Pricing</span>
        <span class="text-gray-50">Contact</span>
      </div>
      <ContactLinkList />
    </footer>
  </div>
</template>

<style scoped>

</style>