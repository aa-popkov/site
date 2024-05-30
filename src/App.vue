<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import PageLoader from '@/components/Shared/PageLoader.vue'
import { useUserStore } from '@/utils/store'

const store = useUserStore()

</script>

<template>
  <div id="root" class="2xl:container mx-auto w-full">
    <PageLoader v-if="store.loading"/>
    <PageHeader />
    <div class="pb-32 md:pb-24">
      <RouterView />
    </div>
    <PageFooter />
  </div>
</template>

<style scoped></style>
