## 📋 The Situation

Before moving on, you want to verify that the documents were uploaded correctly. For this, check the payslip for your first employee.

## 💬 Prompt to Bob

::: warning ⚠️ Important
- Replace the example values below with your actual employee data from the script output.
:::

1. Click the **+** at the bottom left of the chat input, select **Agent** under **Modes**, and enter the following prompt:

    ```
    Can you verify that <FIRST_THREE_CHARS_OF_LASTNAME>001's January 2024 
    payslip was uploaded correctly? Show me its properties. My folder is
    <YOUR_LASTNAME>.
    ```

## 🔍 What Bob Does Behind the Scenes

- Calls `lookup_documents_by_path` with two path levels:
  - Level 1: `["DUPONT"]` — targets the participant's namespace folder
  - Level 2: `["payslip", "January", "2024"]` — matches the document's name within it
- Calls `get_document_properties` with the document ID returned by the first call (`{A0F70520-0000-C139-8A2E-AD79B79AB60E}`).
- Returns the full property set.

## ✅ Expected Output from Bob

::: info
The payslip is in the repository — and it has the **intentional seeded misclassification** applied. Here's a summary of the key properties:

| Property | Value |
|---|---|
| **Document ID** | `{A135D9C0-0000-C138-839D-455377D2161B}` |
| **Class** | `Document` ⚠️ *(seeded error — should be `HRDocument`)* |
| **DocumentTitle** | `DUP001_Payslip_2024_01.txt` |
| **MimeType** | `text/plain` |
| **ContentSize** | 2,339 bytes |
| **Creator** | `cpmanager` |
| **DateCreated** | 2026-10-13 |
| **Version** | 1.0 (current, not reserved) |
| **EmployeeID** | *(absent — no HR metadata)* |

---

**Seeded error confirmed:** The document was uploaded as a bare `Document` class with no `EmployeeID`, `Department`, or `DocType` properties. It should be classified as `HRDocument` with `EmployeeID = DUP001`. This is an intentional Lab 3 misclassification for you to detect and fix during the classification audit exercise.
:::

## 💡 Key Insights

Verification is an important step in the document upload process. By checking a sample document, you can spot problems that are invisible in the file system — like a document filed under the wrong class with missing metadata. In this case, the check revealed exactly that: a seeded error that will be corrected in the next lab.