::: info 🎬 The Story
*It's Monday morning. You've just been handed a spreadsheet with 48 document class names and told: "We  need to clean this up." You don't know what half of them do. Some were created years ago by people who have since left. Some look like duplicates. Some are clearly demo classes that somehow ended up in production*.

*You open Bob*.
:::

## 🎯 What You Will Learn

By the end of this lab, you will be able to:

- Use Bob to **inventory all document classes** in a live IBM Content Cortex repository
- Understand the **class hierarchy** — how `Document` is the root and all other classes inherit from it
- **Deep-dive into a specific class** (HRDocument) to see all its properties, types, and searchability
- Ask Bob to **identify historical debt** — duplicates, legacy classes, naming inconsistencies
- Get a **prioritized cleaning roadmap** from Bob based on what he finds

## 🔧 MCP Tools Used

For this section, Bob makes a single call to the `property-extraction-cs-mcp-server` MCP server:

| Tool | Parameter | What It Does |
|------|-----------|-------------|
| `list_all_classes` | `root_class: "Document"` | Returns all document classes (subclasses of `Document`) registered in the IBM Content Cortex Object Store |


## 📋 The Situation

You need a complete inventory of all document classes. Instead of navigating the admin console, you ask Bob.

## 💬 Prompt to Bob

1. Click the **+** at the bottom left of the chat input, select **Agent** under **Modes**, and enter the following prompt:

   ```
   I want to better understand our content repository. Can you give me a 
   complete inventory of all document classes we have? 
   ```

## 🔍 What Bob Does Behind the Scenes

- **Activates the `class-inventory` skill**, which loads the grouping rules and the local classification script into context.
- **Fetches all document classes** from the live repository by calling the `list_all_classes` tool on the `property-extraction-cs-mcp-server` — no admin console needed.
- **Classifies each class by domain** (HR, Contracts/Legal, Tax Administration, System/Technical) based on naming patterns, using the skill's deterministic script so the grouping is consistent every time.
- **Presents a verified inventory** — four grouped tables with a cross-check total — without inventing counts or commentary of its own.

## ✅ Expected Output from Bob

Bob should return a structured catalog similar to:

::: info
Here is the complete document class inventory for your IBM Content Services repository:

---

#### Document Class Inventory

---

##### HR (1)

| Display Name | Symbolic Name |
|---|---|
| HR Document | HRDocument |

---

##### Contracts / Legal (1)

| Display Name | Symbolic Name |
|---|---|
| Contract | Contract |

##### Tax Administration (30)

| Display Name | Symbolic Name |
|---|---|
| Aangifte BPM | AangifteBPM |
| Aangifte Dividendbelasting | AangifteDividendbelasting |
| Aangifte Inkomstenbelasting | AangifteInkomstenbelasting |
| Aangifte Loonheffingen | AangifteLoonheffingen |
| Aangifte Successierecht | AangifteSuccessierecht |
| Aangifte Vennootschapsbelasting | AangifteVennootschapsbelasting |
| Aanslagbiljet | AanslagBiljet |
| Belasting Controle Rapport | BelastingControleRapport |
| Beroepschrift Belasting | BeroepschriftBelasting |
| Bezwaarschrift Belasting | BezwaarschriftBelasting |
| BTW Aangifte | AangifteBTW |
| BTW Aangifte Kwartaal | AangifteBTWKwartaal |
| BTW Correctiemelding | BTWCorrectiemelding |
| BTW Teruggaaf Verzoek | BTWTeruggaafVerzoek |
| Correctie Aangifte Loonheffingen | CorrectieAangifteLoonheffingen |
| Douaneaangifte | Douaneaangifte |
| Fiscaal Adviesrapport | FiscaalAdviesrapport |
| Fiscaal Ruling Document | FiscaalRulingDocument |
| Invoer Aangifte | InvoerAangifte |
| Jaarrekening Document | JaarrekeningDocument |
| Kwartaalrapport Belasting | KwartaalrapportBelasting |
| Loonbelasting Verklaring | LoonbelastingVerklaring |
| Motorrijtuigenbelasting Aangifte | MotorrijtuigenbelastingAangifte |
| Origine Verklaring | OrigineVerklaring |
| Transit Document | TransitDocument |
| Uitvoer Aangifte | UitvoerAangifte |
| Vereenvoudigde Douaneaangifte | VereenvoudigdeDouaneaangifte |
| Voorlopige Aanslag Inkomstenbelasting | VoorlopigAanslagIB |
| Voortaxatie Vennootschapsbelasting | VoortaxatieVennootschapsbelasting |
| Winst- en Verliesrekening | WinstEnVerliesrekening |

---

##### System / Technical (17)

| Display Name | Symbolic Name |
|---|---|
| Code Module | CodeModule |
| Document | Document |
| Email | Email |
| Entry Template | EntryTemplate |
| Form Data | FormData |
| Form Policy | FormPolicy |
| Form Template | FormTemplate |
| ITX Form Template | WebFormTemplate |
| MCP Server Resource | MsResource |
| Preferences Document | PreferencesDocument |
| Records Template | RecordsTemplate |
| Scenario Definition | ScenarioDefinition |
| Simulation | Simulation |
| Stored Search | StoredSearch |
| Web Content Template | WebContentTemplate |
| Workflow Definition | WorkflowDefinition |
| XML Property Mapping Script | XMLPropertyMappingScript |

✅ Verification: 1 (HR) + 1 (Contracts / Legal) + 30 (Tax Administration) + 17 (System / Technical) = **49 total**

*(API count not independently available; 49 classes received)*

---

The repository has no pre-existing `.venv`, so I created one with `python3 -m venv .venv` to run the grouping script, as the project rules require. I didn't install any packages because the script needs none.
:::

::: warning NOTE
The formatting of Bob's output may differ from the example above — the structure, grouping style, and wording can vary between responses. However, the **total number of document classes found should always be the same** (49 in this lab environment), as it reflects the actual state of the object store.
:::

## 💡 Key Insights

#### For Business Analysts
Bob can describe the **business purpose** of each class without you needing to read technical documentation. Notice how he groups them by domain — this is AI reasoning about naming patterns, not a pre-configured taxonomy.

#### For Administrators
The `list_all_classes` tool --- made available by the MCP server --- queries the live Content Cortex repository. This is the **actual current state** of your object store, not a cached or static view. Any class created or deleted since the last deployment will appear here.