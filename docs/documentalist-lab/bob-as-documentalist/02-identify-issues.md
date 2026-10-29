## 📋 The Situation

Now that you have the full list, you want Bob to flag anything suspicious — duplicates, legacy classes, naming inconsistencies, demo classes that shouldn't be in production.

## 💬 Prompt to Bob

1. Click the **+** at the bottom left of the chat input, select **Ask** under **Modes**, and enter the following prompt:

   ```
   Looking at that class inventory, which classes look like duplicates, 
   legacy classes, or things we should clean up? I'm particularly worried 
   about classes that seem to serve the same purpose. Only focus on classes 
   in the Tax, HR and Contracts domain.
   ```

## 🔍 What Bob Does Behind the Scenes

- Analyzes the inventory of class names and descriptions for functional overlap, redundancy, and structural patterns across the requested domains (Tax, HR, Contracts).
- Evaluates class design anti-patterns, such as encoding status or frequency into class names rather than metadata properties.
- Compares domain granularity and flags naming inconsistencies across the repository.

## ✅ Expected Output from Bob

Bob should return a structured catalog similar to:

::: info

Based on the class definitions and symbolic names in the repository across the **Tax Administration**, **HR**, and **Contracts** domains, here is an analysis of potential duplicates, functional overlaps, and candidates for cleanup or consolidation.

---

#### 1. High Priority: Direct Redundancies & Overlapping Purpose

These classes represent cases where two classes perform virtually the same function and create ambiguity during document filing.

##### A. BTW (VAT) Filings
* **`AangifteBTWKwartaal` vs. `AangifteBTW`**
  * **The Issue:** `AangifteBTW` is already defined as a periodic VAT return covering monthly, quarterly, or annual filings. `AangifteBTWKwartaal` was created specifically for quarterly returns with identical content requirements.
  * **Recommendation:** **Retire `AangifteBTWKwartaal`**. File all VAT returns under `AangifteBTW` and use a metadata property (e.g., `PeriodType` or `Frequency`: *Maand / Kwartaal / Jaar*) to distinguish filing periods.

---

#### 2. Medium Priority: Generic vs. Specialized Class Ambiguity

In these areas, both generic parent-style classes and highly specific subtype classes coexist, leading to inconsistent document classification.

##### A. Customs Declarations (*Douane*)
* **`Douaneaangifte` vs. `InvoerAangifte`, `UitvoerAangifte`, `VereenvoudigdeDouaneaangifte`**
  * **The Issue:** `Douaneaangifte` is a broad, generic customs declaration class covering both import and export. However, specialized classes (`InvoerAangifte`, `UitvoerAangifte`, and `VereenvoudigdeDouaneaangifte`) also exist.
  * **Recommendation:** Decide on a single classification strategy:
    * **Option 1 (Consolidated):** Standardize on `Douaneaangifte` as the single class, using metadata properties (`DeclarationType`: *Invoer / Uitvoer / Vereenvoudigd / Transit*).
    * **Option 2 (Specialized):** Keep the specific classes and deprecate/retire the generic `Douaneaangifte` to force precise classification.

##### B. Financial Statements
* **`WinstEnVerliesrekening` vs. `JaarrekeningDocument`**
  * **The Issue:** `JaarrekeningDocument` holds complete annual financial statements (including balance sheet and P&L), while `WinstEnVerliesrekening` is a standalone class for just the P&L statement (often filed merely as an appendix to corporate tax returns or annual accounts).
  * **Recommendation:** Review whether standalone P&L statements genuinely require a separate class or if they should be filed under `JaarrekeningDocument` with a document sub-type property.

##### C. Corporate & Payroll Corrections / Preliminary Filings
* **`CorrectieAangifteLoonheffingen` vs. `AangifteLoonheffingen`**
  * **The Issue:** `CorrectieAangifteLoonheffingen` is a dedicated class just for amended payroll tax returns. Notice that for VAT, amendments use a separate report (`BTWCorrectiemelding`), while corporate tax does not have a separate correction class.
  * **Recommendation:** Standardize correction handling across tax types. Filing amended returns under `AangifteLoonheffingen` with a metadata flag (`IsCorrection: Boolean` or `FilingStatus`) would simplify the schema.

---

#### 3. Domain Granularity Imbalance & Architectural Observations

| Domain | Class Count | Granularity Assessment |
|---|:---:|---|
| **Tax Administration** | **30** | **Over-specialized**: Contains 30 distinct classes, with separate classes for filing frequencies, correction notices, rulings, advice reports, and specific taxes. |
| **HR** | **1** | **Under-specialized / Catch-all**: A single generic class (`HRDocument`) holds all employee records (employment contracts, performance appraisals, leave forms, certifications, correspondence). |
| **Contracts / Legal** | **1** | **Under-specialized / Catch-all**: A single generic class (`Contract`) holds all vendor agreements, customer contracts, NDAs, and SLAs. |

##### Inconsistent Naming Conventions
* **`VoorlopigAanslagIB` vs. `AanslagBiljet` / `VoortaxatieVennootschapsbelasting`:**
  * Some tax classes use abbreviations in their symbolic names (`VoorlopigAanslagIB`, `AangifteBPM`), while others spell out full terms (`VoortaxatieVennootschapsbelasting`, `AangifteInkomstenbelasting`).
  * `VoorlopigAanslagIB` drops the trailing "e" (`Voorlopig` instead of `Voorlopige`), whereas `VereenvoudigdeDouaneaangifte` retains full spelling.

---

#### Summary Checklist for Cleanup

1. 🗑️ **Consolidate `AangifteBTWKwartaal` into `AangifteBTW`** (Eliminates obvious duplicate purpose).
2. 🧹 **Resolve Customs class overlap** (`Douaneaangifte` vs. `InvoerAangifte` / `UitvoerAangifte` / `VereenvoudigdeDouaneaangifte`).
3. 🔄 **Standardize corrections and preliminary filings** (Decide whether correction/preliminary status is a class or a metadata property).
4. ⚖️ **Evaluate HR & Contract specialization** (Consider whether HR and Contracts need subclassing or metadata schemas to match business requirements).

:::

## 💡 Key Insights

- **The "Class vs. Property" Design Trap:** Class proliferation often occurs when variations like filing periods, frequencies, or correction statuses are modeled as distinct classes rather than metadata properties on a single parent class.
- **Granularity Imbalance:** Repositories frequently exhibit uneven maturity across domains — some areas suffer from over-specialization with redundant classes, while others rely on overly generic catch-all classes.
- **AI-Assisted Governance:** While individual AI responses may phrase or prioritize recommendations slightly differently across runs, analyzing the deterministic repository structure consistently surfaces actionable architecture and cleanup opportunities.