---
title: Generate the documentation
prev:
  text: 'Lab 1: Overview'
next:
  text: 'Lab 2: Overview'
---

## 📦 Clue 1 - The Archive

> *"Every application tells a story. It is all there, sealed inside a single export file — waiting for someone to ask the right question."*

### Background

The **Hiring Sample** (`Hiring_Sample - Responsive_Hiring_Sample_v18001.twx`) is IBM's canonical demo application. It models a complete hiring process: candidates are submitted, screened by HR, interviewed by the hiring manager, and either approved or rejected — with notifications and escalations along the way.

---

### 🔍 Challenge 1 — Confirm the TWX file is in your workspace

1. In the Bob IDE Explorer panel, expand the `lab-1/` folder.
1. Confirm `Hiring_Sample - Responsive_Hiring_Sample_v18001.twx` is present. (Do **not** open, rename, or move it — Bob accesses it directly).

::: info ✅ **Checkpoint**
- The TWX file is visible in the Explorer inside the `lab-1/` folder.
:::

---

### 🤖 Challenge 2 — Ask Bob to generate the documentation

1. Open the Bob Chat Panel with **Option + Cmd + B** (macOS) or **Ctrl + Alt + B** (Windows/Linux), or click the **Bob icon** beside the navigation bar.
1. Start a **new chat** by clicking the **+** (New Chat) icon at the top of the panel.
1. Make sure **IBM BAW Author** mode is selected and enter the following prompt:

   ```
   Help me to generate the documentation for my Hiring Sample application. 
   Store the results in docs/lab1-output/
   ```

1. Press **Enter** and click **Approve skill tools for task** when prompted.
1. Bob asks which audience to target. Choose one of the four options:

   | Option | Best for |
   |--------|----------|
   | **Executive summary** | Stakeholders who need business value, no technical detail |
   | **Knowledge transfer (KT)** | Developers onboarding to the application |
   | **Partner handoff** | External teams receiving the application with improvement notes |
   | **Technical reference** | A complete technical record of every process, service, BO, and coach view |

   ::: tip 💡 **Tip:** Choose **Technical reference** to see the most complete output for this lab.
   :::

   ::: info 👥 **Audience Profile Contrast**
   - **Executive Summary:** Condensed 1–2 page overview highlighting business purpose, high-level SLA milestones, and decision routing without technical code structures.
   - **Technical Reference:** Comprehensive engineering catalog documenting XML IDs, variable types, script task snippets, Ajax services, and Coach View bindings.
   :::

1. Approve each operation individually as Bob unpacks the archive, inspects artifact layers, and generates the Markdown documentation.

::: warning ⚠️ **Why multiple approvals appear**
A BAW `.twx` export is a multi-layered ZIP archive containing dozens of specialized XML and JSON artifacts (BPD flow models, Client-Side Human Services, Coach View layout trees, `twClass` business object definitions, and Ajax service flows). Bob works through each artifact layer in turn — which is why you see several approval requests in sequence. Read each one before approving it.
:::

::: info ✅ **Checkpoint**
- Bob confirms the documentation file has been written and displays a plain-language summary in the chat. The output path — for example `docs/lab1-output/Hiring_Sample-documentation.md` — is shown in the response.
:::

---

### 📖 Challenge 3 — Review the generated documentation

1. In the Explorer, navigate to `docs/lab1-output/` and open the generated `.md` file.
1. Scroll through the document and locate:
   - The **Application Overview** section at the top
   - A **Mermaid process flow diagram** showing the hiring steps as a flowchart
   - The **Business Objects** section listing the data structures used by the process
1. Open the Markdown preview to see the diagrams rendered: right-click the editor tab and choose **Open Preview**. Alternatively, click once inside the document text in the editor, so the editor has focus rather than the Explorer, and press **Cmd + Shift + V** (macOS) / **Ctrl + Shift + V** (Windows/Linux).
1. Confirm the Mermaid diagrams render as visual flowcharts in the preview pane.

::: info ✅ **Final Checkpoint**
- The generated documentation file exists under `docs/lab1-output/`, contains at least one process flow diagram, a Business Objects section, and all content renders correctly in the Markdown preview.
:::