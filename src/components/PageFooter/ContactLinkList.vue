<script setup lang="ts">
import type { IMediaIcon } from '@/models/mediaIcon'
import ContactLink from '@/components/PageFooter/ContactLink.vue'

const mediaIconList: IMediaIcon[] = [
  {
    iconUrl: './icon/tg_icon.svg',
    alt: 'tg-icon',
    linkUrl: 'https://t.me/aapopkov'
  },
  {
    iconUrl: './icon/in_icon.svg',
    alt: 'in-icon',
    linkUrl: 'https://www.linkedin.com/in/aapopkov/'
  },
  {
    iconUrl: './icon/github_icon.svg',
    alt: 'github-icon',
    linkUrl: 'https://github.com/aa-popkov'
  },
  {
    iconUrl: './icon/inst_icon.svg',
    alt: 'inst-icon',
    linkUrl: 'https://www.instagram.com/alexey_it'
  },
]
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

<style scoped>

</style>