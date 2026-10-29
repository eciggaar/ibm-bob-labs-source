## 📋 The Situation

The files are ready. Now you'll ask Bob to upload the first employee's documents. Adapt the prompt below using **your own employee names and IDs** from the script output.

## 💬 Prompt to Bob

::: warning ⚠️ Important
- Replace the example values below with your actual employee data from the script output.

- Furthermore, keep the chat open and **approve each step** when prompted. Bob will ask for confirmation before e.g. creating folders and uploading documents, since MCP tool calls require explicit approval.
:::

1. Start a new task in IBM Bob by clicking the `+` sign on top of the Bob chat panel.

1. Click the **+** at the bottom left of the chat input, select **Agent** under **Modes**, and enter the following prompt:

      ```
      Upload all HR documents for my first employee to the repository. The files
      are in HR_<YOUR_LASTNAME>/. Use absolute file paths. Please file them under
      /BOB_LAB/<YOUR_LASTNAME>/ in the repository, including the employee folder 
      structure. For this run, only use MCP tool calls.
      ```

## 🔍 What Bob Does Behind the Scenes

- Calls `determine_class` with keyword `"HRDocument"` → gets class identifier
- For each of the first employee's 11 documents, calls `create_document` with:
   - `class_identifier: "HRDocument"`
   - `document_properties.name: [filename]`
   - `document_properties.content: [file content]`
   - `document_properties.properties: [EmployeeID, DocType, Department, FirstName, LastName, JobRole, StartDate]`
- Returns document IDs for each created document

## ✅ Expected Output from Bob

::: info

#### Upload Summary — DUPONT / DUP001 Alice Renard

---

##### Folder structure created

```
/BOB_LAB/DUPONT/                     ← new
/BOB_LAB/DUPONT/DUP001_Alice Renard/ ← new
  ├── 01_Recruitment/
  ├── 02_Employment_Contract/
  ├── 03_Personal_Administration/
  ├── 04_Payroll/
  ├── 05_Performance/
  ├── 06_Training/
  ├── 07_Disciplinary/
  └── 08_Exit/
```

---

##### Documents uploaded (11/11)

| Folder | File | Class | EmployeeID | Note |
|---|---|---|---|---|
| 01_Recruitment | `DUP001_Interview_Notes.txt` | HRDocument | DUP001 | ✓ |
| 01_Recruitment | `DUP001_Job_Application.txt` | HRDocument | DUP001 | ✓ |
| 02_Employment_Contract | `DUP001_Employment_Contract.txt` | HRDocument | DUP001 | ✓ |
| 03_Personal_Administration | `DUP001_ID_Documents.txt` | HRDocument | DUP001 | ✓ |
| 03_Personal_Administration | `DUP001_Personal_Info.txt` | HRDocument | DUP001 | ✓ |
| 04_Payroll | `DUP001_Payslip_2024_01.txt` | **Document** | — | ⚠️ Lab 3 seed: bare class, no HR metadata |
| 04_Payroll | `DUP001_Salary_Info.txt` | HRDocument | DUP001 | ✓ |
| 05_Performance | `DUP001_Performance_Review_2024.txt` | HRDocument | DUP001 | ✓ |
| 06_Training | `DUP001_Training_Record.txt` | HRDocument | DUP001 | ✓ |
| 07_Disciplinary | `DUP001_Disciplinary_Record.txt` | HRDocument | DUP001 | ✓ |
| 08_Exit | `DUP001_Exit_Notes.txt` | HRDocument | DUP001 | ✓ |

**Total uploaded: 11 | Errors: 0 | Lab 3 seed applied: 1**

> ⚠️ `DUP001_Payslip_2024_01.txt` was intentionally uploaded as the base `Document` class with no `EmployeeID` or HR metadata — this is the deliberate Lab 3 misclassification seed for DUP001.

:::

## 💡 Key Insights

When a document is created in an object store, its content, class assignment, property values, and initial version series are persisted in a single save operation. Structured properties such as `EmployeeID`, `DocType`, and `Department` are stored in the object store database and are immediately available for property-based queries. 

Full-text indexing is performed asynchronously by Content Search Services and requires the class and properties to be enabled for indexing. Uploading a single employee set first provides a validated baseline, confirming folder creation and filing, metadata mapping, and index behavior before scaling to bulk ingestion.