import process from 'node:process'
import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import ccx from './products/ccx'
import baw from './products/baw'

const products = { ccx, baw }
const key = (process.env.WORKSHOP ?? 'ccx') as keyof typeof products
const p = products[key]

export default defineConfig({
  title: 'IBM Client Engineering',
  description: p.description,
  base: p.base,
  srcExclude: p.srcExclude,
  rewrites: { [`home/${key}.md`]: 'index.md' },
  ignoreDeadLinks: false,
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lab Materials', link: '/ibm-bob/' },
    ],
    sidebar: p.sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/eciggaar/ibm-bob-labs-source' },
    ],
  },
})