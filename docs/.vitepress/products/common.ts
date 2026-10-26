import type { DefaultTheme } from 'vitepress'

export interface ProductConfig {
  description: string
  base: string
  srcExclude: string[]
  sidebar: DefaultTheme.SidebarItem[]
}

export const bobSection: DefaultTheme.SidebarItem = {
  text: 'IBM Bob',
  items: [
    { text: 'Getting Started', link: '/ibm-bob/' },
    { text: 'Installation', link: '/ibm-bob/installation' },
    { text: 'IDE Scavenger Hunt', link: '/ibm-bob/ide-scavenger-hunt' },
  ],
}