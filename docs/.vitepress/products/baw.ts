import { bobSection, type ProductConfig } from './common.js'

const baw: ProductConfig = {
  description: 'IBM Bob and IBM Business Automation Workflow',
  base: '/ibm-bob-labs-baw/',
  srcExclude: ['documentalist-lab/**', 'home/ccx.md'],
  sidebar: [
    bobSection,

    {
      text: 'Lab 1: Title',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/baw-lab/lab-1/' },
        { text: 'Step 1', link: '/baw-lab/lab-1/01-step-one' },
        { text: 'Step 2', link: '/baw-lab/lab-1/02-step-two' },
        { text: 'Step 3', link: '/baw-lab/lab-1/03-step-three' },
      ],
    },

    {
      text: 'Lab 2: Title',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/baw-lab/lab-2/' },
        { text: 'Step 1', link: '/baw-lab/lab-2/01-step-one' },
        { text: 'Step 2', link: '/baw-lab/lab-2/02-step-two' },
        { text: 'Step 3', link: '/baw-lab/lab-2/03-step-three' },
      ],
    },

    {
      text: 'Lab 3: Title',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/baw-lab/lab-3/' },
        { text: 'Step 1', link: '/baw-lab/lab-3/01-step-one' },
        { text: 'Step 2', link: '/baw-lab/lab-3/02-step-two' },
        { text: 'Step 3', link: '/baw-lab/lab-3/03-step-three' },
      ],
    },

    {
      text: 'Lab 4: Title',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/baw-lab/lab-4/' },
        { text: 'Step 1', link: '/baw-lab/lab-4/01-step-one' },
        { text: 'Step 2', link: '/baw-lab/lab-4/02-step-two' },
        { text: 'Step 3', link: '/baw-lab/lab-4/03-step-three' },
      ],
    },

    {
      text: 'Lab 5: Title',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/baw-lab/lab-5/' },
        { text: 'Step 1', link: '/baw-lab/lab-5/01-step-one' },
        { text: 'Step 2', link: '/baw-lab/lab-5/02-step-two' },
        { text: 'Step 3', link: '/baw-lab/lab-5/03-step-three' },
      ],
    },
  ],
}

export default baw