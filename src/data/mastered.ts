import type { IMasteredIcon } from '@/models/masteredIcon'
import PythonIcon from '@/components/Icons/PythonIcon.vue'
import JsIcon from '@/components/Icons/JsIcon.vue'
import SharpIcon from '@/components/Icons/SharpIcon.vue'
import GroovyIcon from '@/components/Icons/GroovyIcon.vue'
import NginxIcon from '@/components/Icons/NginxIcon.vue'
import KafkaIcon from '@/components/Icons/KafkaIcon.vue'
import JiraIcon from '@/components/Icons/JiraIcon.vue'
import ConfluenceIcon from '@/components/Icons/ConfluenceIcon.vue'

export const masteredData: IMasteredIcon[] = [
  {
    title: 'Python',
    icon: PythonIcon
  },
  {
    title: 'JavaScript',
    icon: JsIcon
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
  }
]