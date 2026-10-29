---
title: Validate the endpoints
prev:
  text: 'Lab 3: Overview'
next:
  text: 'Lab 4: Overview'

---

## 🏷️ Clue 1 - The Old Address

> *"The application is ready to move. The question is whether it still remembers where it came from."*

### Background

The `baw-endpoint-validation` skill compares the endpoints of the environment you are leaving (the **source**) with the environment you are moving to (the **target**), and scans a TWX export for hardcoded references to the source. It does not need a connection to a BAW server when you give it a local TWX file and the environment settings as files.

Unlike a one-question skill, it is designed to be interactive. Your prompt contains only the TWX file, so Bob needs the following from you:

- **Deployment type:** traditional on-premises BAW or CP4BA containerized.
- **Source endpoints:** a BPMConfig `.properties` file for the source environment.
- **Target endpoints:** a `.properties` file for the target environment, or just its hostname.

Bob does not assume which environment a block belongs to. It reads your labels, so state clearly what is source and what is target — a swapped assignment produces an inverted endpoint map and wrong findings.

Once the inputs are known, Bob builds a map of the source hostnames, database hosts, and install paths, and scans the XML in the TWX for those source values only. Target values are never searched. Each finding is assigned a severity (🔴 Critical, 🟡 Warning, or ℹ️ Info) based on the context in which the source value appears.

Bob then writes a Markdown report and summarizes it in the chat, with fix guidance for each critical finding. The skill reports and explains. It does not patch the TWX or change any configuration.

The lab application is `OrderManagement.twx` — an order fulfilment process that takes an order from placement through inventory check, reviewer inspection, payment, and shipment to closure. It is moving from a source BAW server (`baw-source.mycompany.com`) to a production server (`baw-prod.mycompany.com`). The source and target environments are described in `source.properties` and `target.properties`.

::: tip 💡 **Working with Bob — what to expect**
- **A skill is a repeatable procedure.** `baw-endpoint-validation` encodes the steps an experienced administrator would follow. Findings come from a deterministic scan of the TWX XML for 100% precision.
- **Bob's wording and presentation adapt dynamically.** While phrasing or grouping may vary naturally, the underlying facts and detected endpoints remain deterministic.
- **Approvals are your control point.** Bob asks before reading files or writing reports. Review each request before approving.
- **Combine AI speed with expert oversight.** You know your deployment topology best—use Challenge 2 to verify that environment mappings are confirmed before promoting artifacts.
:::

---

### 🤖 Challenge 1 — Start the validation and answer Bob's questions

1. In the Bob IDE Explorer panel, expand the `lab-3/` folder and confirm that `OrderManagement.twx`, `source.properties`, and `target.properties` are present. Do **not** open, rename, or move them.
1. Open the Bob Chat Panel with **Option + Cmd + B** (macOS) or **Ctrl + Alt + B** (Windows/Linux), or click the **Bob icon** beside the navigation bar.
1. Start a **new chat** by clicking the **+** (New Chat) icon at the top of the panel.
1. Click the **+** at the bottom left of the chat input, select **IBM BAW Author** under **Modes**, and enter the following prompt:

   ```
   I want to validate my process app before moving it to a new server.
   My twx file is lab-3/OrderManagement.twx. Write any output to
   docs/lab3-output/

   Ask me for anything else you need, one question at a time.
   Do not search the workspace for other files.
   ```

   ::: info 🧠 **Why the last two lines?**
   Bob can see your workspace. Without these lines it may notice `source.properties` and `target.properties` next to the TWX and use them without asking. That is a reasonable shortcut in daily work, but in this lab you want to see how Bob gathers its inputs. Telling Bob how you want to work together is a normal part of prompting.
   :::

1. Press **Enter** and click **Approve skill tools for task** when prompted.
1. Bob asks for the information your prompt did not contain, **one question at a time**. Answer each question as follows, and approve file generation as Bob runs the scan and writes `docs/lab3-output/endpoint-validation-report.md`:

   | When Bob asks about… | Answer |
   |----------------------|--------|
   | The deployment type | **Traditional BAW on-premises / VM installation** |
   | The source endpoints | The **source** environment is described in `lab-3/source.properties` |
   | The target endpoints | The **target** environment is described in `lab-3/target.properties` |

   ::: tip 💡 **Tip**
   Always label each file as source or target in your answer. If you give a file without a label, Bob asks which environment it belongs to.
   :::

::: info ✅ **Checkpoint**
- Bob asked you for the deployment type, the source endpoints, and the target endpoints.
- Bob has stated which file it uses as the source and which as the target.
- The scan has run and Bob has written an endpoint validation report. The report path is shown in Bob's response.
:::

---

### 🧭 Challenge 2 — Check that Bob understood the environments

Every finding depends on Bob having the source and target the right way round. Verify this before you trust the results.

1. In the Explorer panel, right-click the generated report, `docs/lab3-output/endpoint-validation-report.md`, and choose **Open Preview** to read it rendered. Alternatively, click once inside the report text in the editor, so the editor has focus rather than the Explorer, and press **Cmd + Shift + V** (macOS) / **Ctrl + Shift + V** (Windows/Linux).
1. Locate the **Environment Transition Summary** and the **Source → Target Endpoint Mapping** tables.
1. Compare them with the two environment files you supplied:
   - The *source* column must contain `baw-source.mycompany.com` (BAW hostname), `db-source.mycompany.com` (database hostname), and `C:\IBM\BAW26` (install path).
   - The *target* column must contain `baw-prod.mycompany.com`, `db-prod.mycompany.com`, and `C:\IBM\BAW26_PROD`.
1. Check one value that did **not** change, for example the database port `50000` or the HTTPS port `9443`. Bob should show it as unchanged, not as a change.

::: info ✅ **Checkpoint**
- Source and target are the right way round in both tables, and all three source hostnames and the install path appear in the mapping.
:::

---

### 🔍 Challenge 3 — Triage the findings

1. In the report, locate **TWX Hardcoded Reference Findings**. Find the totals for each group: 🔴 Critical, 🟡 Warning, and ℹ️ Info.

   ::: tip 💡 Why there are more hits than problems
   BAW stores each service flow script in three places inside the TWX: the editable script block, a `jsonData` snapshot, and a `bpmn2Model` block. One hardcoded URL in one script task therefore produces up to three raw hits in the scan — one actionable, two auto-generated echoes that disappear when you re-save the artifact in Designer.

   There are **five distinct problems** across **four artifacts** in this TWX. Look for all five in the findings table. Bob may surface the echo hits as separate rows or collapse them into notes — either way is correct. What matters is that all five problems are present, not the total row count.
   :::

1. For each **Critical** finding in the report, verify the artifact name, its type, what is hardcoded, and the **Where to fix** value. Use the table below as a checklist — confirm each row against what you see in the report:

   | Artifact | Type | What is hardcoded | Where to fix |
   |---|---|---|---|
   | `Check Inventory and Pricing` | *(confirm)* | *(confirm — how many script tasks?)* | *(confirm — which tab in Workflow Designer?)* |
   | `Send Order Confirmation` | *(confirm)* | *(confirm — which service and URL?)* | *(confirm — which tab?)* |
   | `Order Management Environment Variables` | *(confirm)* | *(confirm — which variable types?)* | *(confirm — Workflow Designer tab, and what else?)* |

   The fourth artifact, `Submit Payment`, is flagged as a conditional blocker. You deal with it in step 4.

   ::: details ✅ Expected values (check after completing the table)
   | Artifact | Type | What is hardcoded | Where to fix |
   |---|---|---|---|
   | `Check Inventory and Pricing` | Service Flow | `baw-source.mycompany.com` in two script tasks — one builds an `InventoryService` URL, one a `PricingService` URL | Workflow Designer → open the service flow → each script task → **Script** tab |
   | `Send Order Confirmation` | Service Flow | `http://baw-source.mycompany.com:9443/NotificationService/…` in a script task | Workflow Designer → open the service flow → the `NotificationService` script task → **Script** tab |
   | `Order Management Environment Variables` | Environment Variable Set | a variable holding `http://baw-source…` and a variable holding `jdbc:db2://db-source…` | Workflow Designer → process app **Variables** tab → update the default values; then override on the target via Process Admin Console |
   :::

   ::: info 🔎 **Why not the Servers tab?**
   A URL typed into a script is a plain string — it is not a REST server entry. The fix path depends on where the value lives: some findings need a code change in Workflow Designer and a new snapshot, others can be updated via Process Admin Console without a new snapshot. Challenge 4 walks through the distinction.
   :::

1. Review the **Warning** finding. Find the one annotated *BAW-internal — resolves locally, no change needed* (Bob may word the note slightly differently). This is a `localhost/portal` URL in the `Notify Customer Order Ready` service flow — a link to the BAW Portal task view that resolves correctly on any stand-alone BAW server and does **not** block the migration.

1. Now find the **Critical** finding in `Submit Payment`. It uses `localhost:8080/PaymentGateway` — a non-BAW context root. On the source server the payment gateway ran as a co-located sidecar. Whether this breaks depends on the target topology, so Bob flags it as a **conditional blocker**. Bob cannot know your topology, so you tell it. In the same chat, send:

   ```
   The payment gateway is not co-located on the target BAW server — it runs on 
   a dedicated host. Please update the report: reclassify the Submit Payment 
   finding and the overall readiness.
   ```

   Bob should now treat the finding as a definite blocker, update the report, and explain how to fix it: replace the hardcoded URL with the dedicated host, preferably through a REST server entry in Process App Settings. If Bob asked you this question earlier, your earlier answer already applies. Reply with the same information and check that the report reflects it.

1. Answer these questions from your own report — read the findings table yourself, or ask Bob in the same chat:
   - Which artifact contains the `jdbc:db2://` URL, and in which tab is it fixed?
   - Which artifact hardcodes a notification service URL in a script step, which step is it, and what is the fix path?
   - Which `localhost` warning needs **no** change, and why?
   - The notification URL uses `http://` on port 9443. What should you check when you edit it?

::: info ✅ **Checkpoint**
- You can name each artifact with a critical finding, its type, and where it is fixed, and you can explain why the `localhost/portal` warning needs no change.
- The `Submit Payment` finding is now a definite blocker in the updated report.
:::

---

### ✅ Challenge 4 — Decide readiness and get fix guidance

1. In the report, read **Overall Readiness** and the **Recommended Actions** — **Blockers** list. The `OrderManagement` app has critical findings; the overall status is 🔴.
1. In the **same Bob chat session**, ask a follow-up question:

   ```
   The snapshot is already installed on the target and REST calls fail 
   because the server URL still points to baw-source.mycompany.com. How do I 
   update it without re-importing the TWX?
   ```

1. Review Bob's answer. It should point you to the **Process Admin Console** → **Installed Apps** → the snapshot's overflow menu → **App Details** → **Servers** tab, where you update the hostname, port, and secure server setting of each REST server binding.

   ::: tip 💡 **Tip** 
   Bob explains where to make each change. You make it yourself in Workflow Designer, the Process Admin Console, or on the target server — the skill never edits your TWX.
   :::

1. Compare this answer with Challenge 3. The Process Admin Console changes **REST server bindings** on an installed snapshot. It does not change URLs typed into scripts. Which of the findings in your report could be fixed this way, and which still need a new snapshot built in Workflow Designer?

::: info ✅ **Final Checkpoint**
- The validation report exists, source and target are correct in the endpoint mapping, you have triaged all Critical and Warning findings, and you know whether the `OrderManagement` process app is ready to install on `baw-prod.mycompany.com` and where each blocker is fixed.
- You can explain which fixes need a code change and a new snapshot, and which can be made on the installed app.
:::
