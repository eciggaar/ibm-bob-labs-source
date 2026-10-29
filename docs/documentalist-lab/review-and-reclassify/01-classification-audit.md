::: info 🎬 The Story
*The previous lab went well — <b>mostly</b>*. 

*You uploaded 55 HR documents for your 5 employees to your personal folder. But in the rush to get everything in, a few mistakes crept in: one payslip ended up as a generic Document with no employee metadata, a contract was filed under the wrong class, a performance review has the wrong employee ID, a disciplinary record has no metadata at all, and an exit document is missing its DocType.*

*In a real repository with thousands of documents, these errors would be invisible — until someone searches for "all payslips for your first employee" and gets zero results, or a compliance audit finds documents with no retention metadata.*

*You ask Bob to run a classification audit on your namespace.*
:::

## 🎯 What You Will Learn

In this lab you will learn how to:

- Use Bob to **search for documents** with **missing** or **incorrect metadata**.
- Ask Bob to **read document content** and reason about what class it should be.
- Execute the **reclassification workflow**: `update_document_class` + `update_document_properties`.
- Understand the **risk of reclassification** — what happens to properties when you change a document's class.
- Produce a **final governance health report** for the repository.

## 🔧 MCP Tools Used

| Tool | What It Does |
|------|-------------|
| `document_search` | Finds documents matching specific criteria (missing properties, wrong class) |
| `get_document_properties` | Inspects the current state of a document |
| `get_document_text_extract` | Reads the document's text content for AI reasoning |
| `update_document_class` | Changes a document's class (e.g., Document → HRDocument) |
| `update_document_properties` | Updates metadata properties on a document |
| `lookup_documents_by_name` | Finds documents by name keywords |

## 📋 The Situation

You want Bob to find all HR documents in your namespace that are missing critical metadata — specifically, documents without an `EmployeeID` or with an obviously wrong one.

## 💬 Prompt to Bob
::: warning ⚠️ Important
- Replace the example values below with your actual employee data from the script output.

- Furthermore, keep the chat open and **approve each step** when prompted. Bob will ask for confirmation before e.g. invoking skills, executing commands and creating files.
:::

1. Start a new task in IBM Bob by clicking the `+` sign on top of the Bob chat panel.

1. Next, click the **+** at the bottom left of the chat input, select **Agent** under **Modes**, and enter the following prompt:

    ```
    I want to run a classification audit on my HR documents in namespace 
    /BOB_LAB/<YOUR_LASTNAME>/. Can you find all documents in the HRDocument 
    class that are missing an EmployeeID, or have an EmployeeID that doesn't 
    look right?
    ```

## 🔍 What Bob Does Behind the Scenes

Bob activates the `hr-classification-workflow` skill and runs a two-pass audit against the IBM Content Cortex repository:

**Pass 1 — EmployeeID property check (HRDocument class)**
- Queries all `HRDocument` objects under `/BOB_LAB/<LASTNAME>/` using `INSUBFOLDER` containment.
- Fetches the `EmployeeID` property for each document.
- Validates each value against the expected pattern — first three characters of the last name (e.g. `DUP001`). Documents with an employee ID set to `null`, empty string, and `000000` are all treated as invalid.

**Pass 2 — Class mismatch check (all Document objects)**
- Queries all `Document` objects (any class) under the same folder.
- Client-side filters for documents whose name starts with the employee prefix (e.g. `DUP`).
- Flags any document in that set that is **not** classified as `HRDocument`.

**Final steps**
- Saves the combined results to `audit_results_{lastname}.json` for use by later phases (triage, fix, health report).
- Prints a formatted summary table that relates to the initial prompt.

## ✅ Expected Output from Bob

::: info

---

The audit found **2 HRDocuments with missing or invalid EmployeeID** in `/BOB_LAB/DUPONT/`:

| Document Name | EmployeeID Found | Issue | Document ID |
|---|---|---|---|
| `DUP003_Performance_Review_2024.txt` | `000000` | Invalid value — all-zeros suffix | `{A0F74DA0-0000-C726-9D54-7EA8136FB318}` |
| `DUP005_Exit_Notes.txt` | *(empty)* | EmployeeID missing | `{A0F74DB0-0000-C960-9D27-DDE560F9D71E}` |

**2 HRDocument(s) with missing or invalid EmployeeID.**

The full audit results (including class mismatch data) have been saved to `audit_results_dupont.json` for later phases.

---

Would you like to proceed? Here are the available next steps:
- **Fix EmployeeID issues** — triage each document to extract the correct ID from its content, then apply the fix
- **View class mismatches** — the audit also found 3 documents under `/BOB_LAB/DUPONT/` that aren't classified as `HRDocument` at all
- **Fix everything at once** — bulk-remediate all 5 issues (2 property + 3 class)
- **Generate a health report** — produce a full classification health report for the namespace

:::

## 💡 Why This Matters

An `EmployeeID` of `000000` is a classic data quality problem — it looks like a valid value but is clearly a placeholder or error. Bob catches it because the audit checks the pattern, not just whether a value exists. The same applies to other common placeholders like `"N/A"`, `"TBD"`, or `"unknown"` that quietly accumulate over time.