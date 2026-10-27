---
title: Trace the dependencies
---

## 📦 Clue 1 - The Data Web

> *"Changing a business object is easy. Knowing everything that breaks when you do is the hard part."*

### Background

The `baw-dependency-mapper` skill analyzes how Business Objects (BOs) and variables are used across a process application from its TWX export. It does not need a connection to a BAW server. When you provide a TWX file without specifying a single Business Object name, Bob discovers all BOs defined in the application and runs a dependency analysis for each one.

For each Business Object, the skill identifies:

- **Declarations:** Where the variable or BO is instantiated across process apps and services.
- **Read & write usages:** Which activities, server scripts, and service steps read or modify it.
- **Service bindings:** Input and output data mappings across service flow boundaries.
- **Coach bindings:** User interface controls and coach views bound directly to the BO or its fields.
- **Issues detected:** Potential data flow anomalies, including over-coupling (a BO mutated across too many writer services), write-only variables, missing output mappings, unused BO types, and stale coach bindings.
- **Impact assessment:** An advisory risk assessment covering field additions, removals, renames, type changes, or full BO deletion.

To do this, the skill executes a static analysis script on the TWX file and writes the reports to the folder you specify: a structured Markdown report (`<BO>-dependency-report.md`) and a companion JSON file (`<BO>-dependency-report.json`) for each Business Object, along with a combined summary in the chat.

The lab application is `TODO-TRACE-TWX-FILENAME.twx`.

---

### 🤖 Challenge 1 — Ask Bob to analyze the Business Object dependencies

1. In the Bob IDE Explorer panel, expand the `lab-4/` folder and confirm `TODO-TRACE-TWX-FILENAME.twx` is present. Do **not** open, rename, or move it.
1. Open the Bob Chat Panel with **Option + Cmd + B** (macOS) or **Ctrl + Alt + B** (Windows/Linux), or click the **Bob icon** beside the navigation bar.
1. Start a **new chat** by clicking the **+** (New Chat) icon at the top of the panel.
1. Make sure **IBM BAW Author** mode is selected and enter the following prompt:

   ```
   Analyze business object dependencies of the following twx file: lab-4/TODO-TRACE-TWX-FILENAME.twx. Write any output to docs/lab4-output/
   ```

1. Press **Enter** and click **Approve skill tools for task** when prompted.
1. Bob discovers all Business Objects in the TWX export, sets up a task list for each BO, and executes the dependency analysis. It asks for your approval before each operation — **approve each action individually** as it appears.

::: info ✅ **Checkpoint**
- Bob lists the Business Objects found in the application and presents a combined dependency summary in the chat.
- In the Explorer, the folder `docs/lab4-output/` exists and contains `<BO>-dependency-report.md` and `<BO>-dependency-report.json` for each Business Object analyzed.
:::

---

### 📊 Challenge 2 — Review and navigate the dependency reports

1. In the Explorer, navigate to `docs/lab4-output/` and open one of the generated `<BO>-dependency-report.md` files.
1. Open the Markdown preview to inspect the rendered diagrams and tables: right-click the editor tab and choose **Open Preview**, or press **Cmd + Shift + V** (macOS) / **Ctrl + Shift + V** (Windows/Linux).
1. Locate the **Dependency graph** section and review the Mermaid flowchart conventions:
   - **Circles (`((BO))`):** The Business Object itself.
   - **Rectangles (`[Process]`):** BPDs or processes referencing the BO.
   - **Flag shapes (`>Service]`):** Service flows and integration services.
   - **Diamonds (`{Coach}`):** Coach views and user interface elements (connected by dashed binding lines).
1. Scroll down to review the detailed usage tables:
   - **Declarations:** Artifacts where the variable is defined.
   - **Read usages** and **Write usages:** Activities and scripts that access or mutate the object.
   - **Service input/output bindings:** Data passed across service boundaries.
   - **Coach bindings:** UI controls bound directly to the object or its nested fields.

::: tip 💡 **Tip:** The Mermaid dependency diagram displays up to 20 key nodes for readability. The usage tables below the diagram contain the complete, exhaustive record of every reference.
:::

::: info ✅ **Checkpoint**
- The dependency report opens cleanly in the Markdown preview with a rendered Mermaid diagram and complete usage tables covering declarations, reads, writes, service bindings, and coach bindings.
:::

---

### 🔍 Challenge 3 — Evaluate detected issues and candidate findings

1. In the open report, scroll to the **Issues detected** section.
1. Review the categories of potential issues flagged by the static analysis:
   - **Over-coupling:** The BO is written or mutated by more services than the threshold (default: 3), indicating high centralization or conflicting update logic across services.
   - **Write-only / Orphaned variables:** Variables written but never read downstream, or declared but never referenced in any step.
   - **Missing output mappings:** Services invoked where output data is not captured or assigned.
   - **Stale coach bindings:** UI controls bound to fields that no longer exist or have been renamed.
1. Note the distinction between confirmed warnings (⚠️) and candidate leads (🔍): the dependency mapper uses static heuristic analysis. Candidate findings should always be verified against the actual artifacts in Process Designer before taking refactoring actions.

::: info ✅ **Checkpoint**
- You can locate the detected issues in the report, distinguish between confirmed warnings and heuristic candidates (🔍), and understand when manual verification in Process Designer is needed.
:::

---

### ⚠️ Challenge 4 — Assess the impact of a proposed change

1. In the report, navigate to the **Impact assessment** section.
1. Review the impact matrix across the five change scenarios:
   - **Add Field:** Generally low risk, but check for consumers that construct or serialize complete BO instances.
   - **Remove Field / Rename Field:** High risk; all services, scripts, and coaches referencing the field must be updated.
   - **Change Field Type:** High risk; data transformations and type compatibility must be verified across all callers.
   - **Delete BO:** Critical risk; lists all direct consumers that require refactoring before the object can be safely removed.
1. In the same Bob Chat session, ask Bob a follow-up question to evaluate a specific change scenario on one of your Business Objects:

   ```
   What artifacts would be affected if I remove or rename a field in this Business Object?
   ```

1. Review Bob's response and verify how it correlates with the impact tables in the generated report.

::: info ✅ **Final Checkpoint**
- The generated reports exist under `docs/lab4-output/`, you have reviewed the dependency graph, usage tables, detected issues, and impact assessment matrix, and you can use Bob to evaluate what breaks before making changes to a Business Object.
:::
