<script setup lang="ts">
import type { IMasteredIcon } from '@/models/masteredIcon'
import PythonIcon from '@/components/Icons/PythonIcon.vue'
import JsIcon from '@/components/Icons/JsIcon.vue'
import SharpIcon from '@/components/Icons/SharpIcon.vue'
import GroovyIcon from '@/components/Icons/GroovyIcon.vue'
import NginxIcon from '@/components/Icons/NginxIcon.vue'
import KafkaIcon from '@/components/Icons/KafkaIcon.vue'
import JiraIcon from '@/components/Icons/JiraIcon.vue'
import ConfluenceIcon from '@/components/Icons/ConfluenceIcon.vue'
import MasteredIcon from '@/components/PageMain/Mastered/MasteredIcon.vue'

const masteredIconList: IMasteredIcon[] = [
  {
    title: 'Python',
    icon: PythonIcon
  },
  {
    title: 'JavaScript',
    icon:  JsIcon
  },
  {
    title: 'C#',
    icon: SharpIcon
  },
  {
    title: 'Groovy',
    icon: GroovyIcon
  },
  {
    title: 'Nginx',
    icon: NginxIcon
  },
  {
    title: 'Kafka',
    icon: KafkaIcon
  },
  {
    title: 'Atlassian Jira',
    icon: JiraIcon
  },
  {
    title: 'Atlassian Confluence',
    icon: ConfluenceIcon
  },
]

</script>

<template>
  <div class="flex gap-2 h-full p-4 flex-wrap">
    <MasteredIcon
      v-for="icon in masteredIconList"
      :key="icon.title"
      :title="icon.title"
      :icon="icon.icon"
    />

  </div>
</template>

<style scoped>

</style>