## 📋 The Situation

Bob has diagnosed the problem. Now you'll ask him to fix it — reclassifying the document and setting all the correct properties.

## 💬 Prompt to Bob
::: warning ⚠️ Important

- Replace the document reference `xxxxxx` with the document ID or name from the previous step.

- Keep the chat open and **approve each step** when prompted. Bob will ask for confirmation before e.g. invoking skills, executing commands and creating files.

:::


1. Click the **+** at the bottom left of the chat input, select **Agent** under **Modes**, and enter the following prompt:

    ```
    Go ahead and fix document xxxxxx. Reclassify it as HRDocument and set 
    all the correct properties based on what you found in the content.
    ```

## 🔍 What Bob Does Behind the Scenes

- **Follows the `hr-classification-workflow` skill's fix document instructions** — the skill defines the exact sequence: change class first, then set properties, then verify.
- **Announces the planned changes** — states exactly what it will do (class change + each property value) before touching the repository. No confirmation prompt is needed; it proceeds immediately.
- **MCP tool `core-cs-mcp-server` → `update_document_class`** — changes the document's class from `Document` to `HRDocument`.
- **MCP tool `core-cs-mcp-server` → `get_class_property_descriptions`** — retrieves the exact symbolic property identifiers for the `HRDocument` class (e.g. `EmployeeID`, `Department`, `DocType`) to ensure the update call uses the correct names.
- **MCP tool `core-cs-mcp-server` → `update_document_properties`** — sets `EmployeeID`, `Department`, and `DocType` to the values extracted from the document content in the previous triage step. Only values found in the document are used — nothing is guessed.
- **MCP tool `core-cs-mcp-server` → `get_document_properties`** — verifies the final state.


## ✅ Expected Output from Bob

::: info

The properties are all correctly set (`EmployeeID=DUP001`, `Department=Human Resources`, `DocType=Payslip`), however the repository is still returning `className: Document` on a fresh `get_document_properties` call. The class change API confirmed `HRDocument` at the time of the update, but the current read is showing `Document` — this looks like a **server-side caching or replication lag** in the repository rather than a failed operation. The property values are live and correct.

Here's the final state:

✅ `DUP001_Payslip_2024_01` — properties fixed: `EmployeeID=DUP001`, `Department=Human Resources`, `DocType=Payslip`  
⚠️ `className` still shows `Document` on read-back — the class change was accepted by the API but may not yet be reflected. Worth re-checking in Content Navigator or retrying the class update if it persists.

:::

::: tip NOTE

Bob may report that `className` still shows `Document` after the reclassification. This is **not** a failed operation. In the current version of the `get_document_properties` MCP tool, the GraphQL query does not request `className` from the server. Hence, in the response the tool always falls back to the hardcoded default `"Document"` regardless of the document's actual class.

:::

### Verify the reclassification in IBM Content Navigator

1. Open IBM Content Navigator and navigate to `/BOB_LAB/<YOUR_LASTNAME>/`.

1. Select the document and open its **Properties** panel on the right.

1. Confirm **Class** shows **HR Document**.


## 💡 The Reclassification Risk

If you were reclassifying from `Contract` to `HRDocument` (two sibling classes, not parent-child), properties specific to `Contract` that don't exist in `HRDocument` would be **permanently lost**. Always check the class hierarchy before reclassifying.