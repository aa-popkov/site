import type { TTreeChecked } from '@/models/treeChecked'

export const isCheckedRecursive = (node: TTreeChecked): boolean => {
  if (node.checked) return true
  if (node.children) {
    for (const child of node.children) {
      if (isCheckedRecursive(child)) return true
    }
  }
  return false
}
export const generateCheckedTreeString = (tree: TTreeChecked[], depth: number = 0): string => {
  let result = ''

  for (const node of tree) {
    if (
      node.checked ||
      (node.children && node.children.some((child) => isCheckedRecursive(child)))
    ) {
      const spaceSymbol = depth > 0 ? ' ⎿ ' : '• '
      result += '  '.repeat(depth) + spaceSymbol + node.title + '\n'
      if (node.children) {
        result += generateCheckedTreeString(node.children, depth + 1)
      }
    }
  }

  return result
}
