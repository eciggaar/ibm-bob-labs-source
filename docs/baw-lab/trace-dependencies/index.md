---
title: Lab 4 — Understand Dependencies Before Change
---

# Lab 4 — Understand Dependencies Before Change

In this lab you will ask IBM Bob to analyze the Business Object dependencies of a BAW application. Bob uses the `baw-dependency-mapper` skill to read the application's TWX export directly and map where each Business Object is declared, read, written, and bound across processes, services, and coaches — no manual extraction, no server connection required. You then use the report and impact assessment to evaluate what a proposed data change would affect.

## 🎯 What you will learn

- How Bob discovers Business Objects in a TWX export and maps their declarations, reads, writes, service bindings, and coach bindings
- How to read the Mermaid dependency graph and navigate the detailed usage tables
- How the skill flags potential data flow issues such as over-coupling, write-only variables, and stale coach bindings, and why candidate findings (🔍) require verification
- How to use the impact assessment matrix to determine what breaks before modifying, renaming, or deleting a Business Object field
- How to invoke the `baw-dependency-mapper` skill with a plain-language prompt and review the reports it writes
