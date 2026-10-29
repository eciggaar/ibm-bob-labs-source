---
title: Lab 2 — Assess Toolkit Upgrade Impact
prev:
  text: 'Lab 1: The Challenge'
next:
  text: 'Lab 2: The Challenge'
---

# Lab 2 — Assess Toolkit Upgrade Impact

In this lab you will ask IBM Bob to analyze the toolkit dependencies of a BAW application. Bob uses the `baw-toolkit-analyzer` skill to read the application's TWX export directly and produce a dependency report — no manual extraction, no server connection required. You then use the report to judge what a toolkit change would affect.

## 🎯 What you will learn

- How Bob maps the direct and transitive toolkit dependencies of an application from a TWX export
- How the skill flags conflicting snapshots, unused toolkits, and dangling (missing) toolkit references
- How to read the dependency graph and the dependency tables to judge the impact of a toolkit change
- How to invoke a Bob skill with a plain-language prompt and review the report it writes
