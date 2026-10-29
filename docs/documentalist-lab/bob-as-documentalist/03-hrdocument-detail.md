## 📋 The Situation

In our sample scenario, the HR team is your biggest user group. You want to understand the `HRDocument` class deeply — all its properties, what's searchable, what's inherited from the base class, and what's HR-specific.

## 💬 Prompt to Bob

1. Click the **+** at the bottom left of the chat input, select **Agent** under **Modes**, and enter the following prompt:

    ```
    Show me everything about the HRDocument class. I want to see all its 
    properties — their data types, whether they're searchable, and which 
    ones are system-owned vs custom business properties.
    ```

## 🔍 What Bob Does Behind the Scenes

- **Activates the `class-property-report` skill**, which loads the analysis rules and the local formatting script into context.
- **Resolves the class name** by calling `determine_class` on the `core-cs-mcp-server` with keyword `"HRDocument"` — confirming the symbolic name before making any further calls.
- **Fetches all 108 properties** — including every inherited system property — by calling `get_class_property_descriptions` for `HRDocument` on the `core-cs-mcp-server`.
- **Analyses and presents a verified report** by piping the raw property list through the skill's deterministic script, which splits properties into custom vs system, counts searchability and visibility, numbers every row, and cross-checks the total — without Bob inventing any counts of its own.

## ✅ Expected Output from Bob

Bob should return a structured property breakdown:

:::: info

Here is the complete property report for `HRDocument`:

---

##### Class Property Report: HRDocument

---

##### Summary

| Metric | Count |
|:---|---:|
| **Ownership** | |
| Custom / business | 45 |
| System-owned | 63 |
| &nbsp; | &nbsp; |
| **Searchability** | |
| Searchable | 84 |
| Not searchable | 24 |
| &nbsp; | &nbsp; |
| **Visibility** | |
| Hidden | 42 |
| Visible | 66 |

---

::: details All properties (custom first, then system)

| # | Symbolic Name | Display Name | Data Type | Cardinality | Owned | Searchable | Hidden |
|---|---|---|---|---|---|---|---|
| 1 | DocumentTitle | Document Title | STRING | SINGLE | custom | yes | no |
| 2 | ComponentBindingLabel | Component Binding Label | STRING | SINGLE | custom | yes | yes |
| 3 | IgnoreRedirect | Ignore Redirect | BOOLEAN | SINGLE | custom | yes | yes |
| 4 | EntryTemplateObjectStoreName | Entry Template Object Store Name | STRING | SINGLE | custom | yes | yes |
| 5 | EntryTemplateLaunchedWorkflowNumber | Entry Template Launched Workflow Number | STRING | SINGLE | custom | yes | yes |
| 6 | EntryTemplateId | Entry Template Id | GUID | SINGLE | custom | yes | yes |
| 7 | ClbSecurityController | Security Controller | OBJECT | SINGLE | custom | yes | yes |
| 8 | GenaiDateIndexed | Gen AI Date Indexed | DATE | SINGLE | custom | yes | no |
| 9 | GenaiWatsonxSummary | Watsonx Summary | STRING | SINGLE | custom | yes | no |
| 10 | FirstName | First Name | STRING | SINGLE | custom | yes | no |
| 11 | LastName | Last Name | STRING | SINGLE | custom | yes | no |
| 12 | PersonalID | Personal ID | STRING | SINGLE | custom | yes | no |
| 13 | Birthdate | Birthdate | DATE | SINGLE | custom | yes | no |
| 14 | EmployeeID | Employee ID | STRING | SINGLE | custom | yes | no |
| 15 | JobRole | Job Role | STRING | SINGLE | custom | yes | no |
| 16 | JobFunction | Job Function | STRING | SINGLE | custom | yes | no |
| 17 | JobCode | Job Code | STRING | SINGLE | custom | yes | no |
| 18 | JobLevel | Job Level | STRING | SINGLE | custom | yes | no |
| 19 | JobStatus | Job Status | STRING | SINGLE | custom | yes | no |
| 20 | EmploymentType | Employment Type | STRING | SINGLE | custom | yes | no |
| 21 | CurrentStatus | Current Status | STRING | SINGLE | custom | yes | no |
| 22 | Company | Company | STRING | SINGLE | custom | yes | no |
| 23 | CompanyCode | Company Code | STRING | SINGLE | custom | yes | no |
| 24 | BusinessUnit | Business Unit | STRING | SINGLE | custom | yes | no |
| 25 | Division | Division | STRING | SINGLE | custom | yes | no |
| 26 | Department | Department | STRING | SINGLE | custom | yes | no |
| 27 | CostCenter | Cost Center | STRING | SINGLE | custom | yes | no |
| 28 | Location | Location | STRING | SINGLE | custom | yes | no |
| 29 | StartDate | Start Date | DATE | SINGLE | custom | yes | no |
| 30 | TerminationDate | Termination Date | DATE | SINGLE | custom | yes | no |
| 31 | SAPEmployeeID | SAP Employee ID | STRING | SINGLE | custom | yes | no |
| 32 | SapLinkTrigger | SapLinkTrigger | BOOLEAN | SINGLE | custom | yes | no |
| 33 | sapLinked | sapLinked | STRING | SINGLE | custom | yes | no |
| 34 | SAPDocId | SAPDocId | STRING | SINGLE | custom | yes | no |
| 35 | SAPDocProt | SAPDocProt | STRING | SINGLE | custom | yes | no |
| 36 | SAPComps | SAPComps | STRING | SINGLE | custom | yes | no |
| 37 | SAPContType | SAPContType | STRING | SINGLE | custom | yes | no |
| 38 | SAPCompVersion | SAPCompVersion | STRING | SINGLE | custom | yes | no |
| 39 | SFLinkTrigger | SFLinkTrigger | BOOLEAN | SINGLE | custom | yes | no |
| 40 | SfSalesforceRelationships | Salesforce Relationships | OBJECT | SINGLE | custom | yes | no |
| 41 | docuflowTimestamp | docuflowTimestamp | DATE | SINGLE | custom | yes | no |
| 42 | docuflowUsername | docuflowUsername | STRING | SINGLE | custom | yes | no |
| 43 | DocType | DocType | STRING | SINGLE | custom | yes | no |
| 44 | DocumentCategory | Document Category | STRING | SINGLE | custom | yes | no |
| 45 | ClassDocType | ClassDocType | STRING | SINGLE | custom | yes | no |
| 46 | ClassDescription | Class Description | OBJECT | SINGLE | system | yes | yes |
| 47 | This | This | OBJECT | SINGLE | system | yes | yes |
| 48 | ReplicationGroup | Replication Group | OBJECT | SINGLE | system | yes | yes |
| 49 | ExternalReplicaIdentities | External Replica Identities | OBJECT | LIST | system | yes | yes |
| 50 | CmHoldRelationships | Hold Relationships | OBJECT | ENUM | system | no | no |
| 51 | Creator | Creator | STRING | SINGLE | system | yes | no |
| 52 | DateCreated | Date Created | DATE | SINGLE | system | yes | no |
| 53 | LastModifier | Last Modifier | STRING | SINGLE | system | yes | no |
| 54 | DateLastModified | Date Last Modified | DATE | SINGLE | system | yes | no |
| 55 | Id | ID | GUID | SINGLE | system | yes | no |
| 56 | Name | Name | STRING | SINGLE | system | no | yes |
| 57 | AuditedEvents | Audited Events | OBJECT | ENUM | system | no | yes |
| 58 | Owner | Owner | STRING | SINGLE | system | no | yes |
| 59 | Permissions | Permissions | OBJECT | LIST | system | no | yes |
| 60 | ActiveMarkings | Active Markings | OBJECT | LIST | system | no | no |
| 61 | Containers | Containers | OBJECT | ENUM | system | no | yes |
| 62 | Annotations | Annotations | OBJECT | ENUM | system | no | yes |
| 63 | LockToken | Lock Token | GUID | SINGLE | system | yes | yes |
| 64 | LockTimeout | Lock Timeout | LONG | SINGLE | system | yes | yes |
| 65 | LockOwner | Lock Owner | STRING | SINGLE | system | yes | yes |
| 66 | SecurityPolicy | Security Policy | OBJECT | SINGLE | system | yes | yes |
| 67 | CoordinatedTasks | Coordinated Tasks | OBJECT | ENUM | system | no | no |
| 68 | FoldersFiledIn | Folders Filed In | OBJECT | ENUM | system | no | yes |
| 69 | SecurityParent | Security Parent | OBJECT | SINGLE | system | no | yes |
| 70 | SecurityFolder | Security Folder | OBJECT | SINGLE | system | yes | yes |
| 71 | IsReserved | Is Reserved | BOOLEAN | SINGLE | system | yes | no |
| 72 | IsCurrentVersion | Is Current Version | BOOLEAN | SINGLE | system | yes | no |
| 73 | IsFrozenVersion | Is Frozen Version | BOOLEAN | SINGLE | system | yes | no |
| 74 | VersionSeries | Version Series | OBJECT | SINGLE | system | yes | yes |
| 75 | Versions | Versions | OBJECT | ENUM | system | no | yes |
| 76 | CurrentVersion | Current Version | OBJECT | SINGLE | system | no | yes |
| 77 | Reservation | Reservation | OBJECT | SINGLE | system | no | yes |
| 78 | IsVersioningEnabled | Is Versioning Enabled | BOOLEAN | SINGLE | system | yes | no |
| 79 | MajorVersionNumber | Major Version Number | LONG | SINGLE | system | yes | no |
| 80 | MinorVersionNumber | Minor Version Number | LONG | SINGLE | system | yes | no |
| 81 | VersionStatus | Version Status | LONG | SINGLE | system | yes | no |
| 82 | ReservationType | Reservation Type | LONG | SINGLE | system | yes | no |
| 83 | ReleasedVersion | Released Version | OBJECT | SINGLE | system | no | yes |
| 84 | DateCheckedIn | Date Checked In | DATE | SINGLE | system | yes | no |
| 85 | CmIsMarkedForDeletion | Is Marked For Deletion | BOOLEAN | SINGLE | system | no | no |
| 86 | StoragePolicy | Storage Policy | OBJECT | SINGLE | system | yes | yes |
| 87 | StorageLocation | Storage Location | STRING | SINGLE | system | yes | yes |
| 88 | ContentElementsPresent | Content Elements Present | STRING | LIST | system | no | yes |
| 89 | ContentElements | Content Elements | OBJECT | LIST | system | no | yes |
| 90 | ContentSize | Content Size | DOUBLE | SINGLE | system | yes | no |
| 91 | MimeType | Mime Type | STRING | SINGLE | system | yes | no |
| 92 | DateContentLastAccessed | Date Content Last Accessed | DATE | SINGLE | system | yes | no |
| 93 | ContentRetentionDate | Content Retention Date | DATE | SINGLE | system | yes | no |
| 94 | DocumentLifecyclePolicy | Document Lifecycle Policy | OBJECT | SINGLE | system | yes | yes |
| 95 | CurrentState | Current State | STRING | SINGLE | system | yes | no |
| 96 | IsInExceptionState | Is In Exception State | BOOLEAN | SINGLE | system | yes | no |
| 97 | WorkflowSubscriptions | Workflow Subscriptions | OBJECT | ENUM | system | no | yes |
| 98 | ClassificationStatus | Classification Status | LONG | SINGLE | system | yes | no |
| 99 | StorageArea | Storage Area | OBJECT | SINGLE | system | yes | yes |
| 100 | IndexationId | Indexation Id | GUID | SINGLE | system | yes | no |
| 101 | CmIndexingFailureCode | Indexing Failure Code | LONG | SINGLE | system | yes | no |
| 102 | CompoundDocumentState | Compound Document State | LONG | SINGLE | system | yes | yes |
| 103 | ChildDocuments | Child Documents | OBJECT | ENUM | system | no | yes |
| 104 | ChildRelationships | Child Relationships | OBJECT | ENUM | system | no | yes |
| 105 | ParentDocuments | Parent Documents | OBJECT | ENUM | system | no | yes |
| 106 | ParentRelationships | Parent Relationships | OBJECT | ENUM | system | no | yes |
| 107 | CmRetentionDate | Retention Date | DATE | SINGLE | system | yes | yes |
| 108 | CmThumbnails | Thumbnails | OBJECT | ENUM | system | no | yes |

**Total: 108 properties**

---

*Counts computed from 108 properties received (API count not independently available).*

:::

---

A few things worth noting about the custom business properties on this class:

- **Core HR identity** (#10–14): `FirstName`, `LastName`, `PersonalID`, `Birthdate`, `EmployeeID` — all STRING/DATE, all searchable and visible.
- **Job attributes** (#15–21): `JobRole`, `JobFunction`, `JobCode`, `JobLevel`, `JobStatus`, `EmploymentType`, `CurrentStatus` — all STRING, searchable.
- **Org structure** (#22–30): Company, BusinessUnit, Division, Department, CostCenter, Location, StartDate, TerminationDate.
- **SAP integration** (#31–38): A rich set of SAP-specific fields (`SAPEmployeeID`, `SAPDocId`, `SAPDocProt`, `SAPComps`, etc.) for bidirectional SAP ArchiveLink integration.
- **Salesforce integration** (#39–40): `SFLinkTrigger` and `SfSalesforceRelationships`.
- **Docuflow** (#41–42): `docuflowTimestamp` and `docuflowUsername` for workflow tracking.
- **GenAI** (#8–9): `GenaiDateIndexed` and `GenaiWatsonxSummary` — the class already has watsonx AI summarisation fields baked in.
- **Infra/hidden custom** (#2–7): Entry template tracking and security controller fields, all hidden from end users.

::::

## 💡 Key Insights

#### For Business Analysts
Notice the `DocType` property — this is how we distinguish between a Job Application, a Payslip, a Performance Review, and an Employment Contract. They're all `HRDocument` instances, but `DocType` tells you which kind. This is a key design pattern in IBM Content Cortex: **use properties to differentiate, not separate classes**.

#### For Administrators
The SAP integration properties (`SAPDocId`, `SapLinkTrigger`, `sapLinked`) show that this class is likely connected to an external system. So, before modifying or deprecating this class, you'd need to check with the SAP integration team. Bob can help you identify these dependencies.