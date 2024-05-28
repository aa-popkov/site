import type { Component } from 'vue'

export interface IMasteredIcon {
  title: string
  checked?: boolean
  icon: Component
  children?: IMasteredIcon[]
}
