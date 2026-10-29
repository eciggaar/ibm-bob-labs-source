::: info 🎬 The Story
*The previous lab gave you a map of the territory. Now you need content to work with.*

*You'll generate a personal set of 5 fictional employees — unique to you — whose HR documents need to be stored in the repository. Each employee has 8 categories of documents, from their original job application all the way through to exit notes.*

*You'll run a script to generate realistic sample documents locally, then ask Bob to upload them to the repository with the correct metadata. It should be straightforward — but you'll make a few mistakes along the way. Those mistakes will be the challenge for the next lab.*
:::

## 🎯 What You Will Learn

By the end of this lab, you will be able to:

- Understand the **HR document taxonomy** — 8 categories covering the full employee lifecycle.
- Use the **`generate_hr_documents.py`** script to create a **personal, isolated** set of HR documents.
- Ask Bob to **upload documents to the repository** using the MCP tool `create_document` with correct metadata.
- Understand how **`DocType`, `EmployeeID`, `Department`** properties are set at creation time.
- **Verify** that documents were created correctly using the MCP tools `lookup_documents_by_name` and `get_document_properties`.

## 🔧 MCP Tools Used

| Tool | What It Does |
|------|-------------|
| `determine_class` | Confirms the `HRDocument` class identifier |
| `get_class_property_descriptions` | Shows which properties to set on each document |
| `create_document` | Uploads a document with content and metadata |
| `lookup_documents_by_name` | Verifies a document was created |
| `get_document_properties` | Confirms properties were set correctly |

## 📋 The Situation

You need to create sample HR documents to work with, but you're not sure how the generation script works or what it will create. You ask Bob to explain the code and the process.

## 💬 Prompt to Bob

1. Start a new task in IBM Bob by clicking the `+` sign on top of the Bob chat panel.

1. Click the **+** at the bottom left of the chat input, select **Agent** under **Modes**, and enter the following prompt:

    ```
    I need to generate sample HR documents for this lab. Can you explain 
    how the generate_hr_documents.py script works? What will it create, what 
    are the parameters I can provide and can you run it for me?
    ```

1. When asked to provide your last name, enter your last name and mention that you want the script to seed some missclassifications:
  
    ```
    Use DUPONT as last name and use the seed-miclassification flag  
    ```


## 🔍 What Bob Does Behind the Scenes

- Reads the script's docstring and help text
- Explains the multi-user isolation approach
- Offers to run the script on your behalf with your last name
- Seed missclassifications in the documents

## ✅ Expected Output from Bob

::: info

Done. Here's a summary of what was generated and what the script does.

---

#### How `generate_hr_documents.py` works

---

##### What it creates

**55 text files** in `HR_DUPONT/`, organised into one sub-folder per employee, each with 8 sub-folders (one per document category):

| Folder | Document type |
|---|---|
| `01_Recruitment` | Job Application, Interview Notes |
| `02_Employment_Contract` | Employment Contract |
| `03_Personal_Administration` | ID Documents, Personal Info |
| `04_Payroll` | Payslip, Salary Info |
| `05_Performance` | Performance Review |
| `06_Training` | Training Record |
| `07_Disciplinary` | Disciplinary Record |
| `08_Exit` | Exit Notes |

Each file also contains a **metadata comment block** at the bottom specifying the `HRDocument` class properties (EmployeeID, FirstName, LastName, DocType, Department, etc.) that should be set when uploading to the repository.

---

##### Multi-user isolation

Your last name (`DUPONT`) is hashed with SHA-256 to produce a deterministic seed — so you always get the **same 5 fictional employees**, and your files never collide with another participant's. Output goes to `HR_DUPONT/` and the target repository path is `/BOB_LAB/DUPONT/`.

---

##### Your 5 employees

| # | ID | Name | Department | Role |
|---|---|---|---|---|
| 1 | DUP001 | Antoine Muller | Human Resources | HR Specialist |
| 2 | DUP002 | Lina Girard | Finance | Financial Analyst |
| 3 | DUP003 | Lucas Mercier | Marketing | Marketing Manager |
| 4 | DUP004 | Mia Renard | IT | Senior Developer |
| 5 | DUP005 | Amira Dubois | Sales | Sales Representative |

---

##### CLI parameters

| Flag | Description |
|---|---|
| `--user LASTNAME` | Set the lab namespace non-interactively (e.g. `DUPONT`) |
| `--seed-misclassifications` | Inject 5 deliberate errors for Lab 3 |
| `--dry-run` | Preview what would be generated without writing any files |
| `--employee N` | Generate documents for only one employee (1-based index) |

---

##### The 5 seeded errors (Lab 3)

| Employee | Document | Error |
|---|---|---|
| DUP001 Antoine Muller | `DUP001_Payslip_2024_01.txt` | Uploaded as base `Document` class — no EmployeeID |
| DUP002 Lina Girard | `DUP002_Employment_Contract.txt` | Wrong class (`Contract` instead of `HRDocument`), missing Department |
| DUP003 Lucas Mercier | `DUP003_Performance_Review_2024.txt` | Wrong EmployeeID (`000000` instead of `DUP003`) |
| DUP004 Mia Renard | `DUP004_Disciplinary_Record.txt` | Uploaded as base `Document` class — no metadata at all |
| DUP005 Amira Dubois | `DUP005_Exit_Notes.txt` | Correct class but missing `Department` and `DocType` |

These are the documents Bob will need to detect and fix in the Lab 3 reclassification exercise.

:::

## 💬 Follow-up Prompt to Bob

1. After the `generate_hr_documents.py` script successfully completed, enter the following prompt:
    ```
    Show me what employees were generated
    ```
  
## ✅ Expected Output from Bob

::: info

The employee list was already printed in the previous run output. Here it is:

| # | ID | Name | Department | Role |
|---|---|---|---|---|
| 1 | DUP001 | Antoine Muller | Human Resources | HR Specialist |
| 2 | DUP002 | Lina Girard | Finance | Financial Analyst |
| 3 | DUP003 | Lucas Mercier | Marketing | Marketing Manager |
| 4 | DUP004 | Mia Renard | IT | Senior Developer |
| 5 | DUP005 | Amira Dubois | Sales | Sales Representative |

5 employees total, all fictional and deterministically derived from the `DUPONT` namespace seed.
:::

## 💡 Key Insights

You didn't need to read the Python source, look up the CLI flags, or figure out the right command to run — you just described what you wanted in plain language. This is the core shift that AI coding agents like IBM Bob enable: the mental overhead of *how to run a tool* is replaced by simply stating *what you need*. The same principle applies throughout this lab.