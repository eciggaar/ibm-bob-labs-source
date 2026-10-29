---
title: Assess the toolkit upgrade impact
prev:
  text: 'Lab 2: Overview'
next:
  text: 'Lab 3: Overview'
---

## 🧱 Clue 1 - The Shared Foundation

> *"Toolkits make reuse simple. But when different parts of your application quietly depend on different versions of the same foundation, upgrading becomes a minefield."*

### Background

The `baw-toolkit-analyzer` skill analyzes the toolkit dependencies of a process application from its TWX export. It does not need a connection to a BAW server. When you give it a TWX file, it:

- Reads the toolkit dependencies that the application declares, with the snapshot of each toolkit.
- Opens the toolkits that are embedded in the TWX and reads which toolkits they depend on in turn.
- Scans the application's artifacts to find which of them use items from each toolkit.
- Checks the result for conflicting snapshots, unused toolkits, and references to a toolkit that is no longer declared.

Bob combines deterministic static dependency scanning of the TWX with natural language reasoning, allowing you to not only generate comprehensive dependency graphs but also query complex impact questions conversationally.

The skill has three analysis modes: a **full** analysis of all toolkit dependencies (the default), **where-used** to find which artifacts use a given toolkit, and **what-uses** to list which toolkit items a given artifact consumes. In this challenge you run the full analysis.

The lab application is `ClaimsProcessing.twx`, an insurance claims process application. It declares four toolkits: System Data (`TWSYS`), ClaimsUtilities (`CU`), RulesEngine (`RE`), and LegacyReports (`LR`).

---

### 🤖 Challenge 1 — Ask Bob to analyze the toolkit dependencies

1. In the Bob IDE Explorer panel, expand the `lab-2/` folder and confirm `ClaimsProcessing.twx` is present. Do **not** open, rename, or move it.
1. Open the Bob Chat Panel with **Option + Cmd + B** (macOS) or **Ctrl + Alt + B** (Windows/Linux), or click the **Bob icon** beside the navigation bar.
1. Start a **new chat** by clicking the **+** (New Chat) icon at the top of the panel.
1. Make sure **IBM BAW Author** mode is selected and enter the following prompt:

   ```
   Please analyze the toolkit dependencies of ClaimsProcessing.twx
   ```

1. Press **Enter** and click **Approve skill tools for task** when prompted. Approve each action individually as Bob runs the analysis and writes the report.

::: tip 💡 **Tip:** The TWX file is the only input the skill needs. Bob defaults to full analysis automatically.
:::

::: info ✅ **Checkpoint**
- Bob shows a summary of the toolkit dependencies in the chat.
- In the Explorer, the folder `lab-2/ClaimsProcessing.twx - reports` exists and contains `toolkit-dependency-report.md` and `toolkit-dependency-report.json`.
:::

---

### 📖 Challenge 2 — Read the report and judge the upgrade impact

Imagine you are about to promote `ClaimsProcessing` to production. Before you change or upgrade any toolkit, read the report to find out what is at risk.

1. In the Explorer, expand `lab-2/ClaimsProcessing.twx - reports` and open `toolkit-dependency-report.md`.
1. Open the Markdown preview to see the dependency graph rendered: right-click the editor tab and choose **Open Preview**. Alternatively, click once inside the report text in the editor, so the editor has focus rather than the Explorer, and press **Cmd + Shift + V** (macOS) / **Ctrl + Shift + V** (Windows/Linux).
1. Locate these sections of the report:
   - **1. Executive Summary** — the number of direct and transitive dependencies and the list of detected issues
   - **2. Direct Dependencies Overview** — one row per declared toolkit, with its snapshot and usage status
   - **3. Toolkit Usage Breakdown** — for each toolkit, the artifacts that use it and what they use
   - **4. Visual Dependency Graph** — the Mermaid graph of direct and transitive dependencies
   - **5. Transitive Dependencies** — the toolkits that come in through `CU`, `RE`, and `LR`
   - **6. Recommendations & Action Items** — what to do about each issue
1. Use the report to answer these questions:
   - How many issues does the Executive Summary list, and of which types?
   - Which toolkit has no references from any artifact, and is therefore a candidate to remove?
   - Which two artifacts contain a reference that cannot be resolved to a declared toolkit?
   - Which toolkit is referenced at two different snapshots, and through which direct toolkits?
1. In the dependency graph, follow the lines from `ClaimsProcessing` through `CU` and `RE` and confirm where the two snapshots meet.

::: info ✅ **Checkpoint**
- The Executive Summary lists **4 issues**: two dangling references, one snapshot conflict, and one unused toolkit.
- `LegacyReports` (`LR`) is shown as having no direct references, and the recommendations advise verifying and then removing it.
- The two dangling references are in `Run Fraud Detection` and `Notify Supervisor Adjuster Overdue`.
- `SharedTypes` (`ST`) appears at snapshot `2024-03` via `CU` and at `2025-01` via `RE`.
- The dependency graph renders as a diagram in the Markdown preview.
:::

---

### 🔎 Challenge 3 — Drill down into a toolkit

Before you upgrade `RulesEngine`, you need to know exactly which artifacts depend on it. Ask Bob in the same chat.

1. Stay in the same chat in **IBM BAW Author** mode and enter the following prompt:

   ```
   Which artifacts in ClaimsProcessing.twx use the RulesEngine toolkit?
   ```

1. Press **Enter** and approve each action as it appears.

   ::: tip ℹ️ **NOTE** 
   Notice how you stayed in the same chat and asked in plain language. Bob maintains conversation context, recognizing the target toolkit and automatically switching from the initial `full` analysis mode to a targeted `where-used` drill-down without requiring CLI flags or manual reconfiguration.
   :::

1. Read Bob's answer and review the regenerated report:
   - In the chat, Bob provides a detailed analysis naming the declared dependency on `RulesEngine` (`RE`) and each artifact using it (`ClaimRequest` and `Calculate Settlement Amount`).
   - Open `toolkit-dependency-report.md` in the Explorer to confirm the report has been dynamically regenerated and ends with a **Where Used: `RE`** section recording the drill-down target.

::: info ✅ **Final Checkpoint**
- Bob lists two artifacts that use `RulesEngine`: the business object `ClaimRequest` and the service flow `Calculate Settlement Amount` (which uses `CalculateDeductible`).
- You can state the upgrade impact: a change to `RulesEngine` affects those two artifacts, and updating it also touches the `SharedTypes` snapshot conflict you found in Challenge 2.
:::
