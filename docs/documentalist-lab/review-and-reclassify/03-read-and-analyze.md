## 📋 The Situation

During the audit you've found a number of problematic documents. Before fixing them, you want to see Bob reason about one of them — reading the content and determining the correct classification.

## 💬 Prompt to Bob

::: warning ⚠️ Important

- Keep the chat open and **approve each step** when prompted. Bob will ask for confirmation before e.g. invoking skills, executing commands and creating files.

:::


1. Click the **+** at the bottom left of the chat input, select **Ask** under **Modes**, and enter the following prompt:

    ```
    Look at the document that was filed under the base Document class.
    Read its content and tell me: what is it, who does it belong to,
    and what class and properties should it have?
    ```

## 🔍 What Bob Does Behind the Scenes

- **Activates the `hr-classification-workflow` skill** — loads the document triage instructions, which define exactly which MCP tools to call and in what order.
- **MCP tool `property-extraction-cs-mcp-server` → `property_extraction`** — called with the document ID from the audit results. Returns the document's current class, all available properties for that class, and the document's text extract content in a single round-trip.
- **MCP tool `ai-document-insight-cs-mcp-server` → `document_qa_specific`** — called with the same document ID and the prompt: *"What type of HR document is this? Who is the employee (name and ID)? What department are they in? What is the document date?"* The AI reasons over the text extract and returns structured answers.
- **Builds the triage recommendation** — combines the AI's answers with the audit context to produce a recommended class and property set, with a confidence level.
- **No changes are applied** — triage is read-only. Bob presents the recommendation with a confidence level and waits for your instruction before touching the repository.

## ✅ Expected Output from Bob

::: info

Here's the full triage:

---

```
Document: TES001_Payslip_2024_01
Current class: Document  ← WRONG

What is it?       Payslip for January 2024 (Acme Corporation)
Who does it belong to?  Alice Rossi — Employee ID TES001, Finance department

Recommended class: HRDocument

Recommended properties:
  EmployeeID:   TES001
  Department:   Finance
  DocType:      Payslip

Confidence: High — all values are explicitly stated in the document content.
```

---

The document metadata even confirms this was a deliberate Lab 3 seed error: it was uploaded as a bare `Document` with no properties set. Ready to reclassify it if you'd like to go ahead.

:::

## 💡 AI Content Reasoning

The correct document class and property values were derived entirely from the document's content — not from its filename or existing metadata. The text extract was returned as part of the `property_extraction` call and then passed to `document_qa_specific` for AI reasoning. This means classification is possible even when the document name carries no useful information.