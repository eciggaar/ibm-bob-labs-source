## 📋 The Situation

One document is fixed. Now you'll ask Bob to process the remaining misclassified documents in one go.

## 💬 Prompt to Bob
::: warning ⚠️ Important
- Keep the chat open and **approve each step** when prompted. Bob will ask for confirmation before e.g. invoking skills, executing commands and creating files.
:::

1. Click the **+** at the bottom left of the chat input, select **Agent** under **Modes**, and enter the following prompt:

    ```
    Now fix the remaining misclassified documents using the same approach. 
    That is, read each one, determine the correct classification, and fix it. 
    Show me a summary when you're done.
    ```

## 🔍 What Bob Does Behind the Scenes

- **Follows the `hr-classification-workflow` skill's bulk fix instructions** — the skill defines the exact sequence: read content, change class if needed, then set properties. Bob loads the generated file `audit_results_dupont.json` to get the remaining issues, then for each document:
- **MCP tool `property-extraction-cs-mcp-server` → `property_extraction`** — reads the document's content and current properties in one call.
- **MCP tool `core-cs-mcp-server` → `update_document_class`** — reclassifies to `HRDocument` if the class is wrong (skipped for documents already correctly classed).
- **MCP tool `core-cs-mcp-server` → `update_document_properties`** — sets `EmployeeID`, `Department`, `DocType`, and name fields from the document content.

## ✅ Expected Output from Bob

::: info 

#### Remediation Summary — DUPONT

| Document | Previous Class | New Class | EmployeeID set | DocType | Status |
|---|---|---|---|---|---|
| `DUP002_Employment_Contract.txt` | `Contract` | `HRDocument` | `DUP002` | `EmploymentContract` | ✅ Fixed |
| `DUP004_Disciplinary_Record.txt` | `Document` | `HRDocument` | `DUP004` | `DisciplinaryRecord` | ✅ Fixed |
| `DUP003_Performance_Review_2024.txt` | `HRDocument` | `HRDocument` | `DUP003` *(was `000000`)* | `PerformanceReview` | ✅ Fixed |
| `DUP005_Exit_Notes.txt` | `HRDocument` | `HRDocument` | `DUP005` *(was missing)* | `ExitDocument` | ✅ Fixed |

**Fixed: 4 | Errors: 0 | Total: 4**

---

**Note on DUP005 `DocType`:** The initial attempt with `ExitNotes` and `ExitInterview` were rejected by the server choice list. The correct value `ExitDocument` was determined by querying existing correctly-classified exit documents in the repository.

Together with `DUP001_Payslip_2024_01` fixed earlier, all **5 issues** from the original audit are now resolved. Verify each in IBM Content Navigator to confirm class shows **HR Document**.

:::

## 💡 Key Insight

Bob can assist processing multiple documents in a single batch operation, applying the same AI-powered analysis and correction workflow to each one. This makes large-scale classification cleanup feasible even for repositories with a large number of misclassified documents.