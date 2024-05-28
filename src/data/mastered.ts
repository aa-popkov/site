import type { IMasteredIcon } from '@/models/masteredIcon'
import PythonIcon from '@/components/Icons/PythonIcon.vue'
import JsIcon from '@/components/Icons/JsIcon.vue'
import SharpIcon from '@/components/Icons/SharpIcon.vue'
import GroovyIcon from '@/components/Icons/GroovyIcon.vue'
import NginxIcon from '@/components/Icons/NginxIcon.vue'
import KafkaIcon from '@/components/Icons/KafkaIcon.vue'
import JiraIcon from '@/components/Icons/JiraIcon.vue'
import ConfluenceIcon from '@/components/Icons/ConfluenceIcon.vue'
import FastApiIcon from '@/components/Icons/FastApiIcon.vue'
import AiogramIcon from '@/components/Icons/AiogramIcon.vue'
import VueIcon from '@/components/Icons/VueIcon.vue'
import ReactIcon from '@/components/Icons/ReactIcon.vue'
import InstallIcon from '@/components/Icons/InstallIcon.vue'
import CodeIcon from '@/components/Icons/CodeIcon.vue'

export const masteredData: IMasteredIcon[] = [
  {
    title: 'Python',
    icon: PythonIcon,
    children: [
      {
        title: 'Fast API',
        icon: FastApiIcon
      },
      {
        title: 'Aiogram',
        icon: AiogramIcon,
        children: [
          {
            title: 'Fast API',
            icon: FastApiIcon
          }
        ]
      }
    ]
  },
  {
    title: 'JavaScript',
    icon: JsIcon,
    children: [
      {
        title: 'Vue 3',
        icon: VueIcon
      },
      {
        title: 'React',
        icon: ReactIcon
      },
      {
        title: 'Vanila',
        icon: JsIcon
      }
    ]
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
    icon: JiraIcon,
    children: [
      {
        title: 'Installation and initial setup',
        icon: InstallIcon
      },
      {
        title: 'Scripting & Automation',
        icon: CodeIcon
      }
    ]
  },
  {
    title: 'Atlassian Confluence',
    icon: ConfluenceIcon,
    children: [
      {
        title: 'Installation and initial setup',
        icon: InstallIcon
      },
      {
        title: 'Scripting & Automation',
        icon: CodeIcon
      }
    ]
  }
]