<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>

<template>
  <div id="root" class="2xl:container mx-auto w-full">

    <PageHeader />
    <div class="pb-32 md:pb-24">
      <RouterView/>
    </div>
    <PageFooter/>

  </div>
</template>

<style scoped>

</style>
