import type { Component } from 'vue'

export type TTreeChecked = {
  title: string,
  checked?: boolean,
  icon?: Component,
  children?: TTreeChecked[]
}