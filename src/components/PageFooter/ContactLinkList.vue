<script setup lang="ts">
import ContactLink from '@/components/PageFooter/ContactLink.vue'
import { mediaIconList } from '@/data/contactLinks'
</script>

<template>
  <div>
    <ul class="flex gap-2">
      <ContactLink
        v-for="media in mediaIconList"
        :key="media.linkUrl"
        :link-url="media.linkUrl"
        :alt="media.alt"
        :icon-url="media.iconUrl"
      />
    </ul>
  </div>
</template>

<style scoped></style>
