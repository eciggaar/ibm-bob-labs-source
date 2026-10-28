---
title: Validate the endpoints
prev:
  text: 'Lab 3: Overview'
next:
  text: 'Lab 4: Overview'

---

## 📦 Clue 1 - The Old Address

> *"The application is ready to move. The question is whether it still remembers where it came from."*

### Background

The `baw-endpoint-validation` skill compares the endpoints of the environment you are leaving (the **source**) with the environment you are moving to (the **target**), and scans a TWX export for hardcoded references to the source. It does not need a connection to a BAW server when you give it a local TWX file and the environment settings as files.

Unlike a one-question skill, it is interactive. Your prompt contains only the TWX file, so Bob asks for what is missing:

- **Deployment type:** traditional on-premises BAW or CP4BA containerized.
- **Source endpoints:** a BPMConfig `.properties` file for the source environment.
- **Target endpoints:** a `.properties` file for the target environment, or just its hostname.

Bob does not assume which environment a block belongs to. It reads your labels, so state clearly what is source and what is target — a swapped assignment produces an inverted endpoint map and wrong findings.

Once the inputs are known, Bob builds a map of the source hostnames, database hosts, and install paths, and scans the XML in the TWX for those source values only. Target values are never searched. Each finding gets a severity:

- **🔴 Critical:** a source value in a URL, `urlTemplate`, WSDL, or `jdbc:` line.
- **🟡 Warning:** a source value in a script, default value, or parameter. BAW-internal `localhost` URLs (for example `/portal`, `/teamworks`, `/rest/bpm`) are also warnings, annotated *BAW-internal — resolves locally, no change needed*.
- **ℹ️ Info:** low priority.

Bob then writes a Markdown report and summarizes it in the chat, with fix guidance for each critical finding. The skill reports and explains. It does not patch the TWX or change any configuration.

The lab application is `TODO-ENDPOINTS-TWX-FILENAME.twx`. The source and target environments are described in `TODO-SOURCE-PROPERTIES-FILENAME` and `TODO-TARGET-PROPERTIES-FILENAME`.

---

### 🤖 Challenge 1 — Start the validation and answer Bob's questions

1. In the Bob IDE Explorer panel, expand the `lab-3/` folder and confirm that `TODO-ENDPOINTS-TWX-FILENAME.twx`, `TODO-SOURCE-PROPERTIES-FILENAME`, and `TODO-TARGET-PROPERTIES-FILENAME` are present. Do **not** open, rename, or move them.
1. Open the Bob Chat Panel with **Option + Cmd + B** (macOS) or **Ctrl + Alt + B** (Windows/Linux), or click the **Bob icon** beside the navigation bar.
1. Start a **new chat** by clicking the **+** (New Chat) icon at the top of the panel.
1. Make sure **IBM BAW Author** mode is selected and enter the following prompt:

   ```
   I want to validate my process app before moving it to a new server. My twx file is lab-3/TODO-ENDPOINTS-TWX-FILENAME.twx. Write any output to docs/lab3-output/
   ```

1. Press **Enter** and click **Approve skill tools for task** when prompted.
1. Bob asks for the information your prompt did not contain. Answer each question as follows:

   | When Bob asks about… | Answer |
   |----------------------|--------|
   | The deployment type | **Traditional on-premises BAW** |
   | The source endpoints | The **source** environment is described in `lab-3/TODO-SOURCE-PROPERTIES-FILENAME` |
   | The target endpoints | The **target** environment is described in `lab-3/TODO-TARGET-PROPERTIES-FILENAME` |

   ::: tip 💡 **Tip:** Always label each file as source or target in your answer. If you give a file without a label, Bob asks which environment it belongs to.
   :::

1. Bob now reads the environment files, scans the TWX, and writes the report. Several approvals appear — for example for temporary working files, the scan, and the report. **Approve each action individually** as it appears.

::: info ✅ **Checkpoint**
- Bob has stated which file it uses as the source and which as the target.
- The scan has run and Bob has written an endpoint validation report. The report path is shown in Bob's response.
:::

---

### 🧭 Challenge 2 — Check that Bob understood the environments

Every finding depends on Bob having the source and target the right way round. Verify this before you trust the results.

1. Open the generated report. Open the Markdown preview to see it rendered: right-click the editor tab and choose **Open Preview**, or press **Cmd + Shift + V** (macOS) / **Ctrl + Shift + V** (Windows/Linux).
1. Locate the **Environment Transition Summary** and the **Source → Target Endpoint Mapping** tables.
1. Compare them with the two environment files you supplied:
   - The *source* column contains the hostnames, database hosts, and install paths from `TODO-SOURCE-PROPERTIES-FILENAME`.
   - The *target* column contains the values from `TODO-TARGET-PROPERTIES-FILENAME`.

::: info ✅ **Checkpoint**
- Source and target are the right way round in both tables, and every old host from the source file appears in the mapping.
:::

---

### 🔍 Challenge 3 — Triage the findings

1. In the report, locate **TWX Hardcoded Reference Findings** and count the findings in each group: 🔴 Critical, 🟡 Warning, and ℹ️ Info.
1. For each **Critical** finding, note the artifact name, its type, the step or variable, and the **Where to fix** value.
1. Review the **Warning** findings. Find any that are annotated *BAW-internal — resolves locally, no change needed*. These are `localhost` references to BAW itself and do not block the migration.
1. If a `localhost` URL points to a custom API rather than to BAW itself, it may be a blocker depending on where that API runs on the target. If Bob asks about the deployment topology, tell it that the custom API **TODO-ENDPOINTS-TOPOLOGY-ANSWER**.
1. Answer these questions from your own report:
   - Which artifact contains the JDBC URL, and where is it fixed?
   - Which artifact uses a hardcoded REST server URL, and where is it fixed?
   - Which warnings need no change, and why?

::: info ✅ **Checkpoint**
- You can name each artifact with a critical finding, its type, and where it is fixed, and you can explain why BAW-internal `localhost` warnings need no change.
:::

---

### ✅ Challenge 4 — Decide readiness and get fix guidance

1. In the report, read **Overall Readiness** and the **Recommended Actions**, which lists blockers and warnings.
1. In the same Bob Chat session, ask a follow-up question:

   ```
   The snapshot is already installed on the target and REST calls fail because the server URL still points to the old host. How do I update it without re-importing the TWX?
   ```

1. Review Bob's answer. It should point you to the **Process Admin Console** → **Installed Apps** → the snapshot's overflow menu → **App Details** → **Servers** tab, where you update the hostname, port, and secure server setting of each REST server binding.

   ::: tip 💡 **Tip:** Bob explains where to make each change. You make it yourself in Workflow Designer, the Process Admin Console, or on the target server — the skill never edits your TWX.
   :::

::: info ✅ **Final Checkpoint**
- The validation report exists, Source and Target are correct in the endpoint mapping, you have triaged the Critical and Warning findings, and you know whether the process app is ready to install on the new server and where each blocker is fixed.
:::
