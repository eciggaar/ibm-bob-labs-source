---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "IBM Bob and IBM Business Automation Workflow"
  text: ""
  tagline: ""
  actions:
    - theme: brand
      text: Start Here →
      link: /baw-lab/install-baw-modes/

features:
  - title: 🛠️ Get Started with IBM Bob
    details: Install IBM Bob, set up your environment, and learn the IDE basics — including modes, MCP servers, and skills — before diving into the labs.
    link: /ibm-bob/
  - title: "🧩 Pre-lab — Install the BAW modes and skills"
    details: Mandatory set-up for all labs. Prepare your lab folder, open it as a Bob workspace, and install the IBM BAW Author and IBM BAW Admin modes and the BAW skills globally.
    link: /baw-lab/install-baw-modes/
  - title: 🗂️ Generate current project documentation
    details: Turn a TWX, BPMN + XSD pair, or ZIP archive into comprehensive documentation covering processes, services, integrations, business objects, and other artifacts.
    link: /baw-lab/generate-docs/
  - title: 📦 Assess toolkit upgrade impact
    details: Analyze a TWX export to map direct and transitive toolkit dependencies and flag missing, conflicting, circular, outdated, or unused dependencies.
    link: /baw-lab/toolkit-dependencies/
  - title: 🔌 Validate endpoints before migration
    details: Compare source and target endpoint settings, scan a TWX for hardcoded references to the old server, and produce a focused validation report.
    link: /baw-lab/validate-endpoints/
  - title: 🔎 Understand dependencies before change
    details: Trace where a variable or Business Object is declared, read, written, and bound across the application, with risks such as circular references highlighted.
    link: /baw-lab/trace-dependencies/
---