---
title: Generate the documentation
---

## 📦 Clue 1 - The Archive

> *"Every application tells a story. It is all there, sealed inside a single export file — waiting for someone to ask the right question."*

### Background

The `baw-project-doc` skill is a reusable instruction set that tells Bob exactly how to read a TWX export and turn it into structured Markdown documentation. It extracts processes, services, business objects, coach views, and environment variables — without any manual steps on your part. You pick the target audience; Bob drives the rest.

The **Hiring Sample** (`Hiring_Sample - Responsive_Hiring_Sample_v18001.twx`) is IBM's canonical demo application. It models a complete hiring process: candidates are submitted, screened by HR, interviewed by the hiring manager, and either approved or rejected — with notifications and escalations along the way.

---

### 🔍 Challenge 1 — Confirm the TWX file is in your workspace

1. In the Bob IDE Explorer panel, expand the `lab-1/` folder.
1. Confirm `Hiring_Sample - Responsive_Hiring_Sample_v18001.twx` is present.
1. Do **not** open, rename, or move it — the skill locates it automatically.

::: info ✅ **Checkpoint**
- The TWX file is visible in the Explorer inside the `lab-1/` folder.
:::

---

### 🤖 Challenge 2 — Ask Bob to generate the documentation

1. Open the Bob Chat Panel with **Option + Cmd + B** (macOS) or **Ctrl + Alt + B** (Windows/Linux), or click the **Bob icon** beside the navigation bar.
1. Start a **new chat** by clicking the **+** (New Chat) icon at the top of the panel.
1. Make sure **BAW Author** mode is selected and enter the following prompt:

   ```
   Help me to generate the documentation for my Hiring Sample application. 
   Store the results in docs/baw/Hiring_Sample.
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

1. Bob will now parse the TWX archive and generate the documentation. It will ask for your approval before each operation — **approve each action individually** as it appears.

::: info ✅ **Checkpoint** 
- Bob confirms the documentation file has been written and displays a plain-language summary in the chat. The output path — for example `docs/baw/Hiring_Sample/Hiring_Sample-documentation.md` — is shown in the response.
:::

---

### 📖 Challenge 3 — Review the generated documentation

1. In the Explorer, navigate to `docs/baw/Hiring_Sample/` and open the generated `.md` file.
1. Scroll through the document and locate:
   - The **Application Overview** section at the top
   - A **Mermaid process flow diagram** showing the hiring steps as a flowchart
   - The **Business Objects** section listing the data structures used by the process
1. Open the Markdown preview to see the diagrams rendered: right-click the editor tab and choose **Open Preview**, or press **Cmd + Shift + V** (macOS) / **Ctrl + Shift + V** (Windows/Linux).
1. Confirm the Mermaid diagrams render as visual flowcharts in the preview pane.

::: info ✅ **Final Checkpoint**
- The generated documentation file exists under `docs/baw/Hiring_Sample/`, contains at least one process flow diagram, a Business Objects section, and all content renders correctly in the Markdown preview.
:::