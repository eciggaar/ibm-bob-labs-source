## 📋 The Situation

The audit found 2 issues in `HRDocument`. But what about documents in your namespace that should be `HRDocument` but were accidentally filed under the wrong class entirely — like the base `Document` class or the `Contract` class?

## 💬 Prompt to Bob

::: warning ⚠️ Important
- Replace `DUP` with your actual employee ID prefix. Remember, your actual prefix are the first three chars of your lastname (e.g. `DUPONT`) which is used as namespace.

- Furthermore, keep the chat open and **approve each step** when prompted. Bob will ask for confirmation before e.g. invoking skills, executing commands and creating files.

:::

1. Click the **+** at the bottom left of the chat input, select **Agent** under **Modes**, and enter the following prompt:

    ```
    Check the document classes of the documents starting with DUP001 and see 
    if there are mismatches.
    ```

## 🔍 What Bob Does Behind the Scenes

- Calls `lookup_documents_by_name` with keyword `"DUP001"` looking for documents in your namespace that start with CIG001.  with names matching your employee ID pattern (e.g., `DUP[0-9]{3}_*`)
- Analyses their classifications

## ✅ Expected Output from Bob

::: info

`DUP001_Payslip_2024_01` is in the `class_issues` list. Here is the class mismatch report, filtered to what you asked about:

| Document Name | Actual Class | Expected Class | Document ID |
|---|---|---|---|
| `DUP001_Payslip_2024_01` | `Document` | `HRDocument` | `{A0F70520-0000-C139-8A2E-AD79B79AB60E}` |

**1 document starting with `DUP001` is misclassified** — it is filed under the base `Document` class instead of `HRDocument`.

Would you like me to triage it (read its content to confirm the correct classification) and fix it?

:::

## 💡 The Iceberg Problem

In this lab, we seeded exactly 5 errors. In a real repository that has grown organically over years, you might find hundreds of misclassified documents. The pattern is always the same: documents uploaded in a hurry, by users who didn't know the right class, or by integrations that defaulted to the base `Document` class. Bob can assist in finding them all systematically.