---
title: Lab 3 — Validate Endpoints Before Migration
prev:
  text: 'Lab 2: The Challenge'
next:
  text: 'Lab 3: The Challenge'
---

# Lab 3 — Validate Endpoints Before Migration

In this lab you will ask IBM Bob to check a process application before you move it to a new server. Bob uses the `baw-endpoint-validation` skill to compare the endpoints of the source and target environments and to scan the application's TWX export for hardcoded references to the old server. You finish with a readiness verdict and guidance on where to fix each blocker. The skill only reports and explains — it changes nothing in your TWX or on any server.

## 🎯 What you will learn

- How Bob collects the source and target endpoints, and asks for whatever your prompt leaves out
- How Bob scans the TWX for hardcoded references to the source servers, without a connection to a BAW server
- How findings are classified as Critical, Warning, or Info, including harmless BAW-internal `localhost` references that need no change
- How to use the report's *Where to fix* guidance to resolve each blocker in Workflow Designer, the Process Admin Console, or on the server
