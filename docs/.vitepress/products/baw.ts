import { bobSection, type ProductConfig } from './common.js'

const baw: ProductConfig = {
  description: 'IBM Bob and IBM Business Automation Workflow',
  base: '/ibm-bob-labs-baw/',
  srcExclude: ['documentalist-lab/**', 'home/ccx.md'],
  sidebar: [
    bobSection,

    {
      text: 'Pre-Lab: Install BAW Modes and Skills',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/baw-lab/install-baw-modes/' },
        { text: 'Instructions', link: '/baw-lab/install-baw-modes/instructions' },
      ],
    },

    {
      text: 'Lab 1: Generate Project Documentation',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/baw-lab/generate-docs/' },
        { text: 'The Challenge', link: '/baw-lab/generate-docs/challenge' },
      ],
    },

    {
      text: 'Lab 2: Assess Toolkit Upgrade Impact',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/baw-lab/toolkit-dependencies/' },
        { text: 'The Challenge', link: '/baw-lab/toolkit-dependencies/challenge' },
      ],
    },

    {
      text: 'Lab 3: Validate Endpoints Before Migration',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/baw-lab/validate-endpoints/' },
        { text: 'The Challenge', link: '/baw-lab/validate-endpoints/challenge' },
      ],
    },

    {
      text: 'Lab 4: Understand Dependencies Before Change',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/baw-lab/trace-dependencies/' },
        { text: 'The Challenge', link: '/baw-lab/trace-dependencies/challenge' },
      ],
    },
  ],
}

export default baw