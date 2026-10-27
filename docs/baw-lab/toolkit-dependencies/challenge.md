---
title: Assess the toolkit upgrade impact
---

## 📦 Clue 1 - The Dependency Map

> *"Before you change a toolkit, you need to know who relies on it. The answer is already inside the export — you only have to ask for it."*

### Background

The `baw-toolkit-analyzer` skill analyzes the toolkit dependencies of a process application from its TWX export. It does not need a connection to a BAW server. When you give it a TWX file, it:

- Reads the toolkit dependencies that the application declares, with the snapshot of each toolkit.
- Opens the toolkits that are embedded in the TWX and reads which toolkits they depend on in turn.
- Scans the application's artifacts to find which of them use items from each toolkit.
- Checks the result for conflicting snapshots, circular dependencies, unused toolkits, and references to a toolkit that is no longer declared.

To do this, the skill runs a Python script on the TWX and writes the dependency report next to the TWX file: a Markdown report for you to read and a JSON file for further processing. Bob then reads the report and presents it in the chat.

The skill has three analysis modes: a **full** analysis of all toolkit dependencies (the default), **where-used** to find which artifacts use a given toolkit, and **what-uses** to list which toolkit items a given artifact consumes. In this challenge you run the full analysis.

The lab application is `TODO-LAB2-TWX-FILENAME.twx`.

---

### 🤖 Challenge 1 — Ask Bob to analyze the toolkit dependencies

1. In the Bob IDE Explorer panel, expand the `lab-2/` folder and confirm `TODO-LAB2-TWX-FILENAME.twx` is present. Do **not** open, rename, or move it.
1. Open the Bob Chat Panel with **Option + Cmd + B** (macOS) or **Ctrl + Alt + B** (Windows/Linux), or click the **Bob icon** beside the navigation bar.
1. Start a **new chat** by clicking the **+** (New Chat) icon at the top of the panel.
1. Make sure **IBM BAW Author** mode is selected and enter the following prompt:

   ```
   Please analyze the toolkit dependencies of TODO-LAB2-TWX-FILENAME.twx
   ```

1. Press **Enter** and click **Approve skill tools for task** when prompted.
1. Bob now runs the analysis and writes the report. It asks for your approval before each operation — **approve each action individually** as it appears.

::: tip 💡 **Tip:** If Bob asks which analysis mode to use, choose the full analysis. The TWX file is the only input the skill needs.
:::

::: info ✅ **Checkpoint**
- Bob shows a summary of the toolkit dependencies in the chat.
- In the Explorer, the folder `lab-2/TODO-LAB2-TWX-FILENAME.twx - reports` exists and contains `toolkit-dependency-report.md` and `toolkit-dependency-report.json`.
:::
