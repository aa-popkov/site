<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import PageLoader from '@/components/Shared/PageLoader.vue'
import { useUserStore } from '@/utils/store'
import NotificationSection from '@/components/Shared/NotificationSection.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const { loading } = useUserStore()
const router = useRouter()

onMounted(() => {
  router.afterEach((to) => {
    if (document) {
      document.title = (to.meta.title as string) || 'My Portfolio'
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          'content',
          (to.meta.description as string) || 'Description of my portfolio site'
        )
      document
        .querySelector('meta[name="keywords"]')
        ?.setAttribute('content', (to.meta.keywords as string) || 'portfolio, vue, developer')
    }
  })
})
</script>

<template>
  <div id="root" class="2xl:container mx-auto w-full">
    <PageLoader v-if="loading" />
    <PageHeader />
    <div class="pb-32 md:pb-24">
      <RouterView />
    </div>
    <PageFooter />
    <NotificationSection />
  </div>
</template>

<style scoped></style>
