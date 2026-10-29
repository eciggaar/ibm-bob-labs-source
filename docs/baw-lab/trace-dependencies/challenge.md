---
title: Trace the dependencies
prev:
  text: 'Lab 4: Overview'
---

## 🌊 Clue 1 - The Ripple Effect

> *"Changing a business object is easy. Knowing everything that breaks when you do is the hard part."*

### Background

The `baw-dependency-mapper` skill analyzes how Business Objects (BOs) and variables are used across a process application from its TWX export. It does not need a connection to a BAW server. When you provide a TWX file without specifying a single Business Object name, Bob discovers all BOs defined in the application and runs a dependency analysis for each one.

For each Business Object, the skill identifies:

- **Declarations:** Where the variable or BO is instantiated across process apps and services.
- **Read & write usages:** Which activities, server scripts, and service steps read or modify it.
- **Service bindings:** Input and output data mappings across service flow boundaries.
- **Coach bindings:** User interface controls and coach views bound directly to the BO or its fields.
- **Issues detected:** Potential data flow anomalies, including circular references between BOs, over-coupling (a BO mutated across too many writer services), write-only variables, missing output mappings, unused BO types, and stale coach bindings.
- **Impact assessment:** An advisory risk assessment covering field additions, removals, renames, type changes, or full BO deletion.

To do this, the skill executes a static analysis script on the TWX file and writes the reports to the folder you specify: a structured Markdown report (`<BO>-dependency-report.md`) and a companion JSON file (`<BO>-dependency-report.json`) for each Business Object, along with a combined summary in the chat.

The lab application is `OrderFulfillment.twx`, an order fulfillment process application modeling an end-to-end order lifecycle with order placement, validation, inventory check, warehouse operator review, payment processing, and shipment creation. It defines five Business Objects: `Address`, `Customer`, `Order`, `OrderLine`, and `ShipmentDetails`.

---

### 🤖 Challenge 1 — Ask Bob to analyze the Business Object dependencies

1. In the Bob IDE Explorer panel, expand the `lab-4/` folder and confirm `OrderFulfillment.twx` is present. Do **not** open, rename, or move it. The folder also contains a README file. Please don't open it yet, because it contains the answers to the later challenges.
1. Open the Bob Chat Panel with **Option + Cmd + B** (macOS) or **Ctrl + Alt + B** (Windows/Linux), or click the **Bob icon** beside the navigation bar.
1. Start a **new chat** by clicking the **+** (New Chat) icon at the top of the panel.
1. Make sure **IBM BAW Author** mode is selected and enter the following prompt:

   ```
   Analyze business object dependencies of the following twx file: 
   lab-4/OrderFulfillment.twx. 
   
   Write any output to docs/lab4-output/
   ```

   ::: warning ℹ️ **NOTE**
   Bob doesn't analyze the TWX file itself. It runs an analysis script that is part of the skill and then explains the results. The report files are reproducible. Bob's wording in the chat may vary from run to run.
   :::

1. Press **Enter** and click **Approve skill tools for task** when prompted.
1. Watch Bob work in the chat panel. Approve actions as prompted, and wait until Bob presents the combined dependency summary before starting another prompt or closing the chat.

::: info ✅ **Checkpoint**
- Bob lists the five Business Objects found in the application (`Address`, `Customer`, `Order`, `OrderLine`, and `ShipmentDetails`) and presents a combined dependency summary in the chat.
- In the Explorer, the folder `docs/lab4-output/` exists and contains `<BO>-dependency-report.md` and `<BO>-dependency-report.json` for each Business Object analyzed (for example, `Order-dependency-report.md` and `Order-dependency-report.json`). Bob may also create an additional summary file. That's fine.
:::

---

### 📊 Challenge 2 — Review and navigate the dependency reports

1. In the Explorer, navigate to `docs/lab4-output/` and open `Order-dependency-report.md`.
1. Open the Markdown preview to inspect the rendered diagrams and tables: right-click the editor tab and choose **Open Preview**. Alternatively, click once inside the report text in the editor, so the editor has focus rather than the Explorer, and press **Cmd + Shift + V** (macOS) / **Ctrl + Shift + V** (Windows/Linux).
1. Read the **Summary** at the top of the report. It states how many places in the application use `Order`: **47 locations**.
1. Scroll to the **Dependency graph**. In the preview you see these shapes:
   - **Rectangle:** The subject of the report. Every arrow starts or ends here.
   - **Circle:** The Business Object definition. Its `declares` arrow points to the rectangle.
   - **Flag shape:** A service or a coach that takes `Order` as an input or output (for example `ValidateOrder`, `CheckInventory`, `ProcessPayment`, `CreateShipment`, `ReviewOrder`, `ResolveShipmentDelay`, and `HandlePaymentFailure`). Read the label inside the box, `[service]` or `[coach]`, to tell them apart.
   - **Diamond:** A coach with field-level bindings, drawn with a dashed arrow. Because the diagram shows only 20 nodes, you may not see diamonds in the `Order` diagram. You can see them in the `Customer` report.
   - **Arrows and their labels:** Each arrow is one relationship (`declares`, `written by`, `input to`, `outputs`). A service such as `ValidateOrder` has several arrows to and from `Order`, one for each relationship, so the labels can overlap and the diagram looks crowded. The tables further down list each relationship on its own row and are easier to read.
   - **"... and N more node(s) omitted for readability":** A note box, not an artifact. It tells you how many nodes did not fit in the diagram.
1. Scroll down to review the detailed usage tables:
   - **Declarations:** 4 rows. The first row is the `Order` BO definition. Its Detail column says it has 11 fields but lists only the first 8 (the list ends with "…"). The other 3 rows are the `order : Order` variables declared in `ValidateOrder`, `CheckInventory`, and `ProcessPayment`.
   - **Write usages:** The services whose script steps change `Order` data. Here these are `ValidateOrder` (sets the order status), `CheckInventory` (sets the inventory status), and `ProcessPayment` (sets the payment status). This tells you which services you have to look at if an `Order` field ends up with an unexpected value.
   - **Service input/output bindings:** Which services and coaches receive `Order` as an input parameter (`dataInput`) and which ones return it as an output parameter (`dataOutput`). Think of the input and output mappings you define on a service or coach in Process Designer. This tells you which interfaces to check when the structure of `Order` changes, for example if a field is added, renamed, or removed.
   - **Coach bindings:** The individual fields of `Order` that are bound to controls in a coach, for example `orderId`, `status`, `totalAmount`, `inventoryStatus`, and `paymentStatus`. Each row is one control on a coach that shows or edits a field, such as `tw.local.order.totalAmount`. This tells you which screens a person would notice if a field changes.

   ::: tip 💡 **Tip** 
   The dependency diagram displays up to 20 nodes for readability. The usage tables below the diagram contain the complete record of every reference. Use the tables when you need the full list.
   :::

1. Use the report to answer the first two questions:
   - Which three services write to the `Order` Business Object? *(Write usages table)*
   - Which coaches bind to fields of `Order`? *(Coach bindings table)*

1. For the third question, **ask Bob** in the same chat session:

   ```
   Which fields of the Order Business Object are themselves Business Objects, 
   and what are their types?
   ```

   Expected answer: `customer : Customer` and `lines : OrderLine` (a list).

   ::: warning ℹ️ **NOTE**
   The report shortens the BO definition to the first 8 of the 11 fields, so the nested Business Objects aren't listed in the file. This is your first example of asking Bob a follow-up question about the analysis. Bob's wording will differ from the example, but the field names and types should match.
   :::

::: info ✅ **Checkpoint**
- `Order-dependency-report.md` opens cleanly in the Markdown preview with a rendered Mermaid diagram and complete usage tables.
- You can identify the three writer services (`ValidateOrder`, `CheckInventory`, `ProcessPayment`) and the four coaches (`PlaceOrder`, `ReviewOrder`, `ResolveShipmentDelay`, `HandlePaymentFailure`) binding to `Order` fields.
- Bob's answer names the nested Business Objects (`customer : Customer`, `lines : OrderLine`), and you noticed the report alone doesn't show them.
:::

---

### 🔍 Challenge 3 — Evaluate detected issues and design defects

1. In the open `Order-dependency-report.md`, scroll to the **Issues detected** section.
1. Review the specific issues flagged by the static analysis:
   - ⚠️ **Circular BO reference:** `OrderLine → Order → OrderLine`. `Order.lines` is typed as `OrderLine`, and `OrderLine.orderRef` points back to `Order`, so the two types contain each other. The tool flags a loop like this for review. The report notes that such loops can cause problems at runtime, so check that against how your own applications use the type.
   - ⚠️ **Stale coach bindings:** `PlaceOrder` and `ReviewOrder` both bind a UI control to `tw.local.order.discount`. However, `discount` does not exist on the `Order` BO definition (for example, `totalAmount` exists, but there is no `discount` field). At runtime, such a control will most likely show nothing, because the field it points to doesn't exist. A binding to a field that doesn't exist is easy to overlook when you review coaches one by one. The dependency map finds it in seconds.
1. In the **Service input bindings** table, find `ValidateOrder` and `CheckInventory`. Both receive `order : Order` as `dataInput`. That alone doesn't tell you whether one call is unnecessary, so **ask Bob** in the same chat session:

   ```
   In the OrderFulfillment process, look at ValidateOrder and CheckInventory. 
   Both receive the Order. Is the second call redundant? Check the process 
   flow and the scripts.
   ```

   In Bob's answer, look for what each service reads from the order and what it changes, and where the process uses those changed values later.

   Bob's analysis gives you a list of findings to look at. In this lab you only read the results and ask questions, so nothing in the application changes. In a real project, you decide what to change and check each finding in your own application first.
1. **Optional:** Open `Customer-dependency-report.md` and look at the **Issues detected** section. Besides the circular reference, it contains a **Read before write** finding for the activity `Check Shipping Region` in `ValidateOrder`. Ask Bob in the same chat session:

   ```
   In ValidateOrder, the Check Shipping Region step reads the customer's 
   shipping address. Is the customer data set before that step runs, and does 
   this need fixing?
   ```

   Bob can check the scripts and the Coach bindings in the TWX for you.

::: info ✅ **Checkpoint**
- You can locate the circular reference warning (`OrderLine ↔ Order`) and the two stale coach binding warnings (`order.discount` in `PlaceOrder` and `ReviewOrder`).
- You understand what the circular reference means (the two BOs contain each other) and why a binding to a field that doesn't exist is worth fixing.
- You asked Bob whether the second call is needed, and you can explain Bob's answer from what each service reads and changes.
:::

---

### ⚠️ Challenge 4 — Assess the impact of a proposed change

1. In `Order-dependency-report.md`, navigate to the **Impact assessment** section.
1. Read the risk assessment for each change scenario:
   - **🟢 Add Field (Low risk):** Adding a field is backward-compatible; existing consumers are unaffected.
   - **🔴 Remove Field / Rename Field (High risk):** Breaks any service, script, or coach referencing the field. Lists artifacts that must be updated (`CheckInventory`, `HandlePaymentFailure`, `PlaceOrder`, `ProcessPayment`, `ResolveShipmentDelay`, `ReviewOrder`, `ValidateOrder`). This list is for any field of `Order`, so it is a starting point rather than the answer for one specific field.
   - **🔴 Delete BO (High risk):** Lists everything that uses `Order`: services, coaches, and the BO itself.
   - **🔴 Change Field Type (High risk):** Affects the data mapping of every service and coach that uses the field.

   The scenarios apply to any field of `Order`. To find out what a specific change affects, **ask Bob** in the same chat session what breaks if you rename the `totalAmount` field:

   ```
   I want to rename the totalAmount field to orderTotal in the Order 
   Business Object. What artifacts would break and need to be updated?
   ```

1. Review Bob's response:
   - Bob names the three coaches that bind to `totalAmount`: `PlaceOrder`, `ReviewOrder`, and `HandlePaymentFailure`.
   - Bob also finds two services whose scripts use the field: `ValidateOrder` and `ProcessPayment`. The report doesn't show this, because it lists which services use `Order`, not which fields they use. Bob had to look inside the application.
   - Bob may point out that `ValidateOrder` checks `totalAmount < 10`. After a rename, that check would no longer work as intended unless the script is updated, and the report doesn't list it.
   - Bob may also mention the `Order` BO definition itself, and the documents attached to the application that mention the field. That's correct.
   - Compare Bob's answer with the **Coach bindings** table in the report. The three coaches should match.

1. Ask Bob to turn the analysis into a plan, in the same chat session:

   ```
   In what order should I make these changes, and what should I test 
   afterwards?
   ```

   Bob proposes an order, typically the Business Object first, then the services, then the coaches, and lists what to test. For example, an order below 10 is still rejected, the payment log shows the amount, and the three coaches show the total. This isn't in the report. Bob turns the analysis into a work plan.

::: info ✅ **Final Checkpoint**
- The generated reports exist under `docs/lab4-output/` for all five Business Objects.
- You have reviewed the dependency graph, usage tables, detected issues (circular reference, stale bindings), and impact assessment matrix.
- Bob's answer named services (`ValidateOrder`, `ProcessPayment`) that the report doesn't list for the field.
- You can use Bob to evaluate exactly what breaks before modifying, renaming, or deleting a Business Object or its fields.
:::
