# IBM Bob IDE — Scavenger Hunt Lab

**Audience:** New IBM Bob IDE users  
**Goal:** Discover every key area of the Bob IDE and configure Bob's core extensibility features — MCP Servers, Modes, Skills, and Rules — by completing a series of hands-on challenges.

## Before You Begin

### Prerequisites

- IBM Bob IDE is installed and running.

### How this lab works

Each section is a **clue** followed by a **challenge**. Read the clue, find the feature in the IDE, and complete the challenge. A ✅ **Checkpoint** at the end of each section confirms you did it right.

## 🚀 Step 0 — Create and Open Your Workspace

Before you can explore any part of the IDE, Bob needs a **workspace** — a folder on your machine that it treats as the root of your project. When you first launch Bob IDE with no folder open, the Explorer panel will be empty and most features will be unavailable.

### Create a workspace folder using the IDE terminal

Bob IDE has an **Integrated Terminal** built in. Use it now to create the lab folder — no external terminal needed.

1. Open the Integrated Terminal inside Bob IDE with the keyboard shortcut **Ctrl + `` ` ``** (backtick) on all platforms, or via the menu **View → Terminal**.
2. In the terminal panel that opens at the bottom of the IDE, run the appropriate command for your platform:

::: tabs key:MacOS/LinuxWindows
== Windows
```
New-Item -ItemType Directory -Force -Path "$HOME\bob-scavenger-hunt"
```
== MacOS / Linux
```
mkdir -p ~/bob-scavenger-hunt
```
:::

### Open the folder in Bob IDE

Now point Bob IDE at the folder you just created. You have two options:

**Option A — Via the menu:**
1. Go to **File → Open Folder…**.
2. Navigate to the `bob-scavenger-hunt` folder inside your home directory.
3. Click **Open** (macOS/Linux) or **Select Folder** (Windows).

**Option B — Via the Explorer panel:**
1. Click the **Explorer** icon (pages icon) on the left-hand activity bar.
2. If no folder is open, the Explorer shows an **Open Folder** button — click it.
3. Navigate to and select the `bob-scavenger-hunt` folder, then click **Open** / **Select Folder**.

### Trust the folder

A banner appears at the top that says: "Restricted Mode is intended for safe code browsing. Trust this folder to enable all features."
Click the **Manage** link, in the window that pops up click the **Trust** button and then close the window. 

### Permissions

With the workspace open, check the **Permissions**. You find a drop-down at the bottom of the Bob chat input. You should see **"Read"** permission is auto-approved. Bob will prompt for approval for the other permissions, for the lab leave the settings as is.

✅ **Checkpoint:** The Explorer panel shows the `bob-scavenger-hunt` folder as the workspace root, the title bar reflects the folder name, and auto-approval is only enabled for the **Read** permission.


## 🗺️ Clue 1 — The File Map (Explorer)

> *"Every great adventure begins with a map. Find the panel that shows you all of your project's files and folders."*

### Background

The **Explorer** is the file tree on the left side of the Bob IDE. It shows every file and folder in your current workspace. You can click any file to open it in the editor, right-click to create, rename, or delete files, and drag items to reorganise them.

### Challenge 1A — Open the Explorer and create a file

1. Click the **Explorer** icon (pages icon) at the top of the left-hand activity bar to open the Explorer panel.
2. In the Explorer, right-click the root of your workspace and choose **New File**.
3. Name the file `scavenger-notes.md`.
4. Verify the file appears in the Explorer tree. The file is autmatically opened in the **Editor**.

✅ **Checkpoint:** `scavenger-notes.md` exists in your workspace root and is visible in the Explorer tree.


## 📝 Clue 2 — The Workshop (Editor)

> *"A craftsman's workshop is where ideas take shape. Find the surface where you read and write code."*

### Background

The **Editor** is the main central pane. Files you click in the Explorer open as tabs in the Editor. You can have multiple files open at once, split the editor, and use Bob's **Literate Coding** feature to write natural-language instructions directly inside a file.

### Challenge 2A — Edit a file

1. Copy the following content and paste it into the Editor tab named `scavenger-notes.md`:

    ```markdown
    # Scavenger Hunt Progress
    
    - [x] Explorer — found it!
    - [ ] Editor
    - [ ] Bob Chat Panel
    - [ ] Mode Selector
    - [ ] Integrated Terminal
    - [ ] Modes
    - [ ] Rules
    - [ ] Skills
    - [ ] Context Window
    - [ ] MCP Servers
    ```

1. Save the file with **Cmd + S** (macOS) or **Ctrl + S** (Windows/Linux).

### Challenge 2B — Use Literate Coding

Literate Coding lets you write a plain-English instruction directly in the editor, then ask Bob to act on it.

1. Open `scavenger-notes.md` in the Editor (it should still be open).
2. Enable literate coding by clicking the **magic wand icon** (🪄) in the editor toolbar, or press **Cmd + M** (macOS) / **Ctrl + M** (Windows/Linux).
3. Add the following line at the very top of the file, before any existing content:

```text
// Add a short one-sentence description under each checklist item explaining what that Bob IDE feature does.
```

4. Click **Generate** at the bottom of the document.
5. Review Bob's proposed changes and click **Accept all**.

✅ **Checkpoint:** `scavenger-notes.md` now has descriptions under each checklist item, and the Editor tab shows the file with the accepted changes.

## 💬 Clue 3 — The Oracle (Bob Chat Panel)

> *"There is a wise oracle in this IDE that speaks in plain language. Find where you talk to it."*

### Background

The **Bob Chat Panel** lives on the right side (or can float) of the IDE. It has three parts:

- **Chat history** — your conversation with Bob scrolls here.
- **Input field** — type your natural-language requests at the bottom.
- **Send button** — press **Enter** or click the paper-plane icon to send.

You can open or close the panel with **Option + Cmd + B** (macOS) or **Ctrl + Alt + B** (Windows/Linux).

### Challenge 3A — Open the chat panel and ask a question

1. If the Bob Chat Panel is not visible, open it using **Option + Cmd + B** (macOS) or **Ctrl + Alt + B** (Windows/Linux), or click the **Bob icon** beside the navigation bar.
2. In the input field at the bottom, type:

```
What files are currently in my workspace?
```

3. Press **Enter** and read Bob's response.

### Challenge 3B — Ask Bob to update your notes

1. In the chat panel input field, type:

```
Open scavenger-notes.md and mark the "Editor" and "Bob Chat Panel" items as complete by changing [ ] to [x].
```

1. Click **Approve edit tools for task**.

✅ **Checkpoint:** In the chat panel you have a conversation history. `scavenger-notes.md` now shows `[x]` next to both **Editor** and **Bob Chat Panel**.

## 🎭 Clue 4 — The Costume Room (Mode Selector)

> *"Every actor needs a costume. Find the control beside the chat input that changes Bob's role."*

### Background

Bob operates in **modes**, each with a defined set of permissions and a specific role. The **Mode Selector** is in the **+** menu at the **bottom left of the chat input**. Click **+** to open a menu with **Upload files** and a **Modes** list; the active mode has a checkmark. Built-in modes include:

| Mode  | What Bob can do |
|-------|----------------|
| **Agent** | Read, write, run commands, use MCP — the most capable mode |
| **Ask**   | Read files only — safe for exploring code |
| **Plan**  | Read and plan — no writes or commands |

You can also cycle through the modes with the keyboard shortcut **Cmd + .** (macOS) / **Ctrl + .** (Windows/Linux).

### Challenge 4A — Explore the mode selector

1. Look at the bottom of the Bob Chat Panel. At the bottom left of the text input field you will see a **+** button. Click it to open the menu. Under **Modes** you see the available modes (e.g. **Agent**, **Plan**, **Ask**); the active mode has a checkmark.
2. In the **Modes** list, select **Ask**.
3. In the chat input, type:

```
What is the purpose of the .bob folder?
```

4. Press **Enter** and read the response. Notice that in Ask mode Bob can answer questions and read files, but will not make changes.

### Challenge 4B — Switch back to Agent mode

1. Click the **+** at the bottom left of the chat input again and, under **Modes**, select **Agent**.

✅ **Checkpoint:** You have successfully switched between Ask mode and Agent mode using the **+** menu. **Agent** has the checkmark under **Modes**.

## 🖥️ Clue 5 — The Engine Room (Integrated Terminal)

> *"Deep below the deck lies the engine room — a place where commands are issued and the real work happens."*

### Background

The **Integrated Terminal** runs a full shell session inside Bob IDE — the same shell you would use outside the IDE, but embedded right in the window. You can open it via **View → Terminal** or the keyboard shortcut **Ctrl + `` ` ``** (backtick) on all platforms. Bob can also run commands inside the terminal on your behalf when you approve them.

Throughout this lab every shell command is run here — you never need to leave the IDE.

### Challenge 5A — Scaffold the project configuration folders

Bob stores all project-level configuration in a `.bob` folder at the root of your workspace. Use the Integrated Terminal to create the full structure now — several later clues depend on it.

1. Open the Integrated Terminal with **Ctrl + `` ` ``** or via the menu **View → Terminal**.
2. In the terminal panel, run the appropriate command for your platform:

::: tabs key:MacOS/LinuxWindows
== Windows
```
New-Item -ItemType Directory -Force -Path .bob/rules
New-Item -ItemType Directory -Force -Path .bob/rules-doc-writer
New-Item -ItemType Directory -Force -Path .bob/skills/hello-skill
```
== MacOS / Linux
```
mkdir -p .bob/rules .bob/rules-doc-writer .bob/skills/hello-skill
```
:::

3. Switch to the Explorer panel and confirm the new `.bob` folder tree is visible.

### Challenge 5B — Create a placeholder file from the terminal

Still in the Integrated Terminal, create the skill placeholder file you will flesh out in Clue 8:

::: tabs key:MacOS/LinuxWindows
== Windows
```
"# My First Skill" | Out-File -FilePath .bob/skills/hello-skill/SKILL.md -Encoding utf8
```
== MacOS / Linux
```
echo "# My First Skill" > .bob/skills/hello-skill/SKILL.md
```
:::

4. Switch back to the Explorer panel and verify `SKILL.md` now appears inside `.bob/skills/hello-skill/`.

✅ **Checkpoint:** The Integrated Terminal is open, the `.bob` directory tree exists with `rules/`, `rules-doc-writer/`, and `skills/hello-skill/` subdirectories, and `SKILL.md` exists at `.bob/skills/hello-skill/SKILL.md`.

## 🎨 Clue 6 — The Wardrobe Designer (Modes)

> *"You discovered the costume room. Now find where costumes are designed and saved."*

### Background

You can create **custom modes** to give Bob a specialized role, restrict its tool permissions, and provide a default persona for specific tasks. Custom modes are stored in YAML files:

| Level   | File location                           |
|---------|-----------------------------------------|
| Global  | `~/.bob/settings/custom_modes.yaml`     |
| Project | `.bob/custom_modes.yaml`                |

You can create modes through the **Settings → Modes** UI or by editing the YAML file directly.

### Challenge 6A — Create a custom mode via the UI

1. Click the **gear icon** (⚙️) next to **Modes** in the **+** menu at the bottom left of the chat input, or go to **Settings → Modes**.
2. Click the **+** (Add) icon to create a new mode.
3. Fill in the following values:

| Field               | Value                                                                 |
|---------------------|-----------------------------------------------------------------------|
| **Slug**            | `doc-writer`                                                          |
| **Name**            | `📝 Doc Writer`                                                       |
| **Scope**           | `bob-scavenger-hunt`                                                  |
| **Role Definition** | `You are a technical writer. You write clear, concise documentation.` |
| **When to Use**     | `Use this mode for writing and reviewing Markdown documentation.`     |
| **Available Tools** | Read, Edit                                                            |

4. Click **Save**.

Bob creates (or updates) `.bob/custom_modes.yaml` with your new mode.

### Challenge 6B — Inspect the generated YAML

1. In the Explorer, open `.bob/custom_modes.yaml`.
2. Verify it contains a `customModes` array with your `doc-writer` entry.

The file should look similar to:

```yaml
customModes:
  - slug: doc-writer
    name: 📝 Doc Writer
    roleDefinition: You are a technical writer. You write clear, concise documentation.
    whenToUse: Use this mode for writing and reviewing Markdown documentation.
    groups:
      - read
      - edit
```

Alternatively, you can create this file directly from the **IDE's Integrated Terminal** (**Ctrl + `` ` ``**):

::: tabs key:MacOS/LinuxWindows
== Windows
```
@'
customModes:
  - slug: doc-writer
    name: "📝 Doc Writer"
    roleDefinition: You are a technical writer. You write clear, concise documentation.
    whenToUse: Use this mode for writing and reviewing Markdown documentation.
    groups:
      - read
      - edit
'@ | Out-File -FilePath .bob/custom_modes.yaml -Encoding utf8
```
== MacOS / Linux
```
cat > .bob/custom_modes.yaml << 'EOF'
customModes:
  - slug: doc-writer
    name: "📝 Doc Writer"
    roleDefinition: You are a technical writer. You write clear, concise documentation.
    whenToUse: Use this mode for writing and reviewing Markdown documentation.
    groups:
      - read
      - edit
EOF
```
:::

### Challenge 6C — Use your custom mode

1. Click the **+** at the bottom left of the chat input to open the menu with the **Modes** list.
2. Confirm **📝 Doc Writer** appears in the list.
3. Switch to it and send the following message:

```
What kind of tasks are you best suited for?
```

4. Read Bob's response — it should reflect the Doc Writer role definition.
5. Switch back to **Agent** mode when done.

✅ **Checkpoint:** `.bob/custom_modes.yaml` exists, the **Modes** list in the **+** menu shows **📝 Doc Writer**, and Bob responded in character when you asked it about its purpose.

## 📋 Clue 7 — The Standing Orders (Rules)

> *"Every crew operates under standing orders. Find where you leave persistent instructions that Bob always follows."*

### Background

**Rules** are persistent instructions that Bob applies to every conversation in a given scope. They are stored as plain text or Markdown files:

| Location                          | Applies to                              |
|-----------------------------------|-----------------------------------------|
| `.bob/rules/`                     | All modes in this project               |
| `.bob/rules-{mode-slug}/`         | A specific mode in this project         |
| `~/.bob/rules/`                   | All modes globally (all workspaces)     |

Files inside the rules directory are loaded alphabetically and combined. Supported file extensions: `.md`, `.txt`.

### Challenge 7A — Create a project-wide rules file

Create a rules file that applies to all modes in this project. Run the following in the **IDE's Integrated Terminal** (**Ctrl + `` ` ``**):

::: tabs key:MacOS/LinuxWindows
== Windows
```
@'
# Project Rules

- Always respond in English.
- When suggesting file paths, use forward slashes even on Windows.
- Keep all code examples minimal — include only what is necessary to illustrate the point.
- When you are unsure about a requirement, ask a clarifying question before proceeding.
'@ | Out-File -FilePath .bob/rules/project-rules.md -Encoding utf8
```
== MacOS / Linux
```
cat > .bob/rules/project-rules.md << 'EOF'
# Project Rules

- Always respond in English.
- When suggesting file paths, use forward slashes even on Windows.
- Keep all code examples minimal — include only what is necessary to illustrate the point.
- When you are unsure about a requirement, ask a clarifying question before proceeding.
EOF
```
:::

### Challenge 7B — Create a mode-specific rules file

Now add rules that apply **only** when Bob is in your custom `doc-writer` mode. Run the following in the **IDE's Integrated Terminal** (**Ctrl + `` ` ``**):

::: tabs key:MacOS/LinuxWindows
== Windows
```
@'
# Doc Writer Style Rules

- Always use sentence case for headings (not Title Case).
- Use second-person ("you") throughout.
- Avoid jargon; define technical terms on first use.
- Every code example must have a one-line comment explaining what it does.
'@ | Out-File -FilePath .bob/rules-doc-writer/01-style.md -Encoding utf8
```
== MacOS / Linux
```
cat > .bob/rules-doc-writer/01-style.md << 'EOF'
# Doc Writer Style Rules

- Always use sentence case for headings (not Title Case).
- Use second-person ("you") throughout.
- Avoid jargon; define technical terms on first use.
- Every code example must have a one-line comment explaining what it does.
EOF
```
:::

### Challenge 7C — Verify rules are loaded

1. Click the **+** at the bottom left of the chat input and, under **Modes**, select **Agent**.
2. Start a new chat and ask:

```
Summarise the rules you are currently following for this project.
```

3. Bob should reference the project-wide rules you defined.
4. Now switch to **📝 Doc Writer** mode, start a new chat, and ask the same question. Bob should additionally reference the Doc Writer-specific style rules.

✅ **Checkpoint:** `.bob/rules/project-rules.md` and `.bob/rules-doc-writer/01-style.md` both exist. Bob's responses reflect the rules in both modes.

## 🧠 Clue 8 — The Instruction Manual (Skills)

> *"Every expert has a manual they follow. Find where Bob's specialized instruction sets are stored."*

### Background

**Skills** are reusable instruction sets stored as `SKILL.md` files inside `.bob/skills/<skill-name>/`. When you activate a skill, Bob loads its instructions and follows them for the current conversation.

A `SKILL.md` file uses YAML front matter followed by the instruction body:

```markdown
---
name: skill-name
description: A clear description so Bob knows when to activate this skill
---

Your instructions go here.
```

The `description` field is required — skills without a description are ignored by Bob.

### Challenge 8A — Write a real skill

Earlier you created a placeholder `SKILL.md`. Now replace its contents with a proper skill definition.

Open `.bob/skills/hello-skill/SKILL.md` in the Editor and replace the contents with:

```markdown
---
name: hello-skill
description: Greet the user warmly and introduce the IBM Bob IDE features when asked for a welcome message.
---

When activated, greet the user with a friendly welcome message.
Include a brief, one-sentence description of these five IBM Bob IDE features:
1. Explorer
2. Editor
3. Bob Chat Panel
4. Mode Selector
5. Integrated Terminal

Keep the entire response under 150 words. Use a friendly, encouraging tone.
```

Save the file.

Alternatively, write this from the **IDE's Integrated Terminal** (**Ctrl + `` ` ``**):

::: tabs key:MacOS/LinuxWindows
== Windows
```
@'
---
name: hello-skill
description: Greet the user warmly and introduce the IBM Bob IDE features when asked for a welcome message.
---

When activated, greet the user with a friendly welcome message.
Include a brief, one-sentence description of these five IBM Bob IDE features:
1. Explorer
2. Editor
3. Bob Chat Panel
4. Mode Selector
5. Integrated Terminal

Keep the entire response under 150 words. Use a friendly, encouraging tone.
'@ | Out-File -FilePath .bob/skills/hello-skill/SKILL.md -Encoding utf8
```
== MacOS / Linux
```
cat > .bob/skills/hello-skill/SKILL.md << 'EOF'
---
name: hello-skill
description: Greet the user warmly and introduce the IBM Bob IDE features when asked for a welcome message.
---

When activated, greet the user with a friendly welcome message.
Include a brief, one-sentence description of these five IBM Bob IDE features:
1. Explorer
2. Editor
3. Bob Chat Panel
4. Mode Selector
5. Integrated Terminal

Keep the entire response under 150 words. Use a friendly, encouraging tone.
EOF
```
:::

### Challenge 8B — Trigger the skill

1. Start a **new chat** conversation by clicking the **+** (New Chat) icon at the top of the Bob Chat Panel. This ensures a fresh context window.
2. In the chat input, type:

```
Give me a welcome message introducing the IBM Bob IDE.
```

3. Press **Enter**.
4. Click button **Approve skill tools for task**.

✅ **Checkpoint:** Bob responded with a structured welcome message covering the five IDE features, matching the style and length constraints you defined in the skill.

## 🧭 Clue 9 — The Memory Vault (The Context Window)

> *"Every journey requires managing what you carry. Find where Bob tracks its memory and learn how to keep your conversations sharp and within budget."*

### Background

The **Context Window** represents the total amount of information Bob can hold "in mind" during a single conversation (up to **270,000 tokens**). Everything in the session shares this space:

1. **System prompt & active mode** definition
2. **Rules** loaded from `.bob/rules/`
3. **MCP Tool schemas** from connected servers
4. **Conversation history** (your messages and Bob's answers)
5. **File reads & diffs** performed during tasks

When conversations exceed ~100,000 tokens, model reasoning quality can begin to decline, and reaching the limit forces an automatic, lossy summarization into a background session. Managing your context is an essential skill:

- **Reset context frequently** using the **New Chat / New Task (`+`)** button when changing tasks.
- **Reference files selectively** with context mentions (e.g. `@/path/to/file`) instead of pasting large snippets into chat.
- **Produce persistent artifacts** (save plans or documents to disk, then reference them in a clean session).

### Challenge 9A — Locate the token counter and inspect usage

1. Look near the bottom or top bar of the **Bob Chat Panel** to locate the **Context / Token Usage indicator** (e.g., displaying current token count and percentage of the context window used).
2. Hover over or observe the meter to see how rules, tools, and the current conversation history contribute to token consumption.

### Challenge 9B — Reset context and use a targeted file mention

1. Click the **+** (New Task / New Chat) button at the top-right of the Bob Chat Panel.
2. Notice how the token meter resets to baseline (only loading system instructions, active mode, rules, and tool definitions).
3. In the new clean chat session, send a targeted message using an `@` file mention:

```
Summarise my current progress in @scavenger-notes.md and list what remains unchecked.
```

4. Verify Bob reads `scavenger-notes.md` directly via the mention without needing the entire file pasted into the prompt.

✅ **Checkpoint:** You located the context window token indicator, reset the context using the **+** button, and successfully used an `@` file mention in a clean conversation.

## 🔌 Clue 10 — The Power Sockets (MCP Servers)

> *"The IDE has power sockets that let you plug in external tools. Find where to manage them."*

### Background

**Model Context Protocol (MCP)** lets you connect external tools and services to Bob. Bob discovers available tools, calls them on your behalf, and uses the results to answer your questions or complete tasks.

MCP configuration is stored in JSON files at two levels:

| Level   | File location                 | Scope             |
|---------|-------------------------------|-------------------|
| Global  | `~/.bob/mcp.json`             | All workspaces    |
| Project | `.bob/mcp.json` in project root | This workspace only |

Project-level config takes precedence when server names conflict.

### Challenge 10A — Open MCP settings via the UI

1. Open **Bob Settings** (click the ⚙️ gear icon in the Bob sidebar, or run the **Bob: Open Settings** command).
2. In the left navigation, select **MCP**.
3. Observe the MCP servers table and the **+** button to add a new server.
4. Click the **+** button, select the Configuration Scope and click the Open Configuration File button.

### Challenge 10B — Add a local MCP server entry

In the `.bob/mcp.json` file that just opened in your Editor, replace the entire contents with the following configuration. This registers a placeholder STDIO server — you will not start it, but configuring the entry teaches you the format.

```json
{
  "mcpServers": {
    "my-local-tools": {
      "command": "node",
      "args": ["tools/server.js"],
      "disabled": true,
      "env": {}
    }
  }
}
```

> **Note:** `"disabled": true` prevents Bob from trying to start the server, so no Node.js process is launched. This is intentional for the purposes of this exercise.

Save the file with **Cmd + S** (macOS) or **Ctrl + S** (Windows/Linux).

### Challenge 10C — Verify the configuration

1. Go back to **Settings → MCP** in the Bob panel.
2. You should see `my-local-tools` listed as a server entry with a **disabled** status.

✅ **Checkpoint:** `.bob/mcp.json` exists in your project, contains the `my-local-tools` server entry, and the MCP tab in Settings shows the server (marked disabled).

## 🏁 Final Checkpoint — The Complete Map

In the **IDE's Integrated Terminal** (**Ctrl + `` ` ``**), run the following command to confirm your full `.bob` folder structure is in place:

::: tabs key:MacOS/LinuxWindows
== Windows
```
Get-ChildItem -Recurse -File .bob | Select-Object -ExpandProperty FullName | Sort-Object
```
== MacOS / Linux
```
find .bob -type f | sort
```
:::

You should see output similar to:

```
.bob/custom_modes.yaml
.bob/mcp.json
.bob/rules-doc-writer/01-style.md
.bob/rules/project-rules.md
.bob/skills/hello-skill/SKILL.md
```

Open `scavenger-notes.md` in the Editor and mark all remaining items as complete:

```markdown
- [x] Explorer
- [x] Editor
- [x] Bob Chat Panel
- [x] Mode Selector
- [x] Integrated Terminal
- [x] Modes
- [x] Rules
- [x] Skills
- [x] Context Window
- [x] MCP Servers
```

## 📚 What You Learned

| Feature              | Where to find it                              | Config file(s)                                          |
|----------------------|-----------------------------------------------|---------------------------------------------------------|
| **Explorer**         | Left activity bar — file tree icon            | n/a                                                     |
| **Editor**           | Central pane — tabs for open files            | n/a                                                     |
| **Bob Chat Panel**   | Right-side panel (Option+Cmd+B / Ctrl+Alt+B)  | n/a                                                     |
| **Mode Selector**    | **+** menu, bottom left of chat input           | n/a                                                     |
| **Terminal**         | Bottom pane (Ctrl + `` ` ``)                  | n/a                                                     |
| **Modes**            | Settings ⚙️ → Modes tab or gear next to Modes in the + menu | `.bob/custom_modes.yaml` / `~/.bob/settings/custom_modes.yaml` |
| **Rules**            | `.bob/rules/` or `.bob/rules-{slug}/`         | `.bob/rules/` / `~/.bob/rules/`                         |
| **Skills**           | `.bob/skills/<name>/SKILL.md`                 | `.bob/skills/` / `~/.bob/skills/`                       |
| **Context Window**   | Chat panel footer / header meter (`+` New Chat) | Token budget & `.bob/rules/` loading                   |
| **MCP Servers**      | Settings ⚙️ → MCP tab                         | `.bob/mcp.json` / `~/.bob/mcp.json`                     |

## 🔑 Quick Reference — Keyboard Shortcuts

| Action                       | macOS               | Windows / Linux     |
|------------------------------|---------------------|---------------------|
| Open/close Bob Chat Panel    | Option + Cmd + B    | Ctrl + Alt + B      |
| Open Integrated Terminal     | Ctrl + `` ` ``      | Ctrl + `` ` ``      |
| Cycle through modes          | Cmd + .             | Ctrl + .            |
| Toggle Literate Coding       | Cmd + M             | Ctrl + M            |
| Save file                    | Cmd + S             | Ctrl + S            |

*Congratulations — you have completed the IBM Bob IDE Scavenger Hunt! 🎉*
