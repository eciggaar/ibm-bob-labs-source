---
title: Pre-Lab — Install the BAW Modes and Skills
---

# Pre-Lab — Install the BAW Modes and Skills

Before you start the first, you set up your laptop so that Bob understands IBM Business Automation Workflow. In this mandatory exercise you prepare a lab folder, open it as your Bob workspace, and install the **IBM BAW Author** and **IBM BAW Admin** modes together with the BAW skills.

You do not need any prior experience with genAI or IBM Bob. Every step is described, for both Windows and macOS / Linux.

## 🧩 Two concepts you need to know

| Concept | What it is | BAW example |
|---------|------------|-------------|
| **Mode** | Shapes how Bob approaches a task: its role, its expertise, and which skills it reaches for. | **IBM BAW Author** behaves like a BAW process-authoring expert. **IBM BAW Admin** behaves like a BAW operations and administration assistant. |
| **Skill** | A focused instruction set (a `SKILL.md` file, sometimes with helper scripts) that gives Bob one specific capability. | The `baw-project-doc` skill reads a TWX export and writes documentation for it. |

Some of the skills run Python scripts. That is why Python is part of the pre-requisites.

## 🎯 What you will learn

- How to organise the lab material in one folder (`bob-baw-workshop`) on your laptop
- How to open the lab folder as a workspace in Bob IDE and trust it
- How to install the BAW modes and skills globally, so they are available in every Bob workspace
- How to check that the **IBM BAW Author** and **IBM BAW Admin** modes are available in Bob

## ✅ Before you begin

Make sure you have the following. These were part of the pre-requisites you received by email.

- A valid IBMid. You need this to sign in to IBM Bob.
- IBM Bob IDE is installed and running.
- Python 3.13 or later installed.
