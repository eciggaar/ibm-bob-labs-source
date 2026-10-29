## 📋 The Situation

Your first employee's documents are in. Now you'll upload the remaining 4 employees in one go.

## 💬 Prompt to Bob
::: warning ⚠️ Important
Replace the example values below with your actual employee data from the script output.
:::

1. Start a new task in IBM Bob by clicking the `+` sign on top of the Bob chat panel.

1. Click the **+** at the bottom left of the chat input, select **Agent** under **Modes**, and enter the following prompt:

    ```
    Help me to upload the HR documents for my remaining 4 employees. The files
    are in HR_<YOUR_LASTNAME>/.

    Please file all documents under /BOB_LAB/<YOUR_LASTNAME>/ in the repository
    including the employee folder structure.
    ```

## 🔍 What Bob Does Behind the Scenes

- **Activates the `hr-document-upload` skill**, which guides Bob through batch upload handling, folder creation, deduplication rules, and the intentional lab error seeds.
- **Inspects the repository** by calling `lookup_documents_by_path` on the `core-cs-mcp-server` to detect existing files under `/BOB_LAB/<YOUR_LASTNAME>/` and safely skip the already-uploaded first employee.
- **Builds employee folder structures** by calling `create_folder` on the `core-cs-mcp-server` for all remaining employee folders and category subdirectories.
- **Uploads documents with metadata** by calling `create_document` on the `core-cs-mcp-server` for each file, setting properties such as `EmployeeID`, `DocType`, `Department`, and employee name.
- **Applies intentional lab error seeds** on select files (e.g., using `Contract` or base `Document` classes, or omitting properties) to simulate real-world data quality issues for later remediation labs.
- **Presents a structured upload summary** confirming the 44 uploaded documents, skipped duplicates, and applied seeds.

## ✅ Expected Output from Bob

::: info

#### Upload Summary — DUPONT

| Employee | Uploaded | Already in repo | Seeded error |
|---|---|---|---|
| DUP001 Alice Renard | 0 | 11 | Bare `Document` class on the payslip. It has no `EmployeeID` or HR metadata. (already in repo) |
| DUP002 Camille Benali | 11 | 0 | Wrong class on the employment contract. It is `Contract` instead of `HRDocument`, and it has no HR properties. |
| DUP003 Maxime Henry | 11 | 0 | `HRDocument` with invalid `EmployeeID = 000000` on the performance review. The real ID is `DUP003`. |
| DUP004 Ravi Martin | 11 | 0 | Bare `Document` class on the disciplinary record. It has no metadata at all. |
| DUP005 Nour Bernard | 11 | 0 | `HRDocument` with `EmployeeID`, `Department` and `DocType` omitted on the exit notes. |

**Total uploaded:** 44 | **Already in repo:** 11 | **Errors:** 0

---

The upload exited cleanly. It created 36 folders. `/BOB_LAB`, `/BOB_LAB/DUPONT` and `DUP001_Alice Renard` already existed. Each of the 4 new employees has a folder under `/BOB_LAB/DUPONT/` with the 8 category subfolders `01_Recruitment` to `08_Exit`.

Alice Renard (DUP001) was already fully uploaded, so the script skipped her 11 documents. A re-run will skip all 55 documents.

:::


## 💡 Key Insights

Uploading dozens of documents across multiple folder hierarchies manually in IBM Content Navigator would be tedious and error-prone. Ingestion automation ensures that folder structures, metadata mapping, and document filings remain consistent and repeatable across large batch operations. 

Furthermore, real-world repositories tend to accumulate quality problems over time — documents uploaded in a hurry, under the wrong class, or with missing and incorrect properties. The anomalies intentionally seeded across several documents in this upload simulate these common data quality issues, setting the stage for the next lab where you will use AI reasoning and IBM Bob to detect, audit, and remediate them.