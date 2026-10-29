---
title: Install the BAW modes and skills
---

## 📁 Step 1 — Create the bob-baw-workshop folder

All lab material goes in one parent folder named `bob-baw-workshop`. You choose where to create it (e.g. in your Documents folder). Remember the location, you need it in the next steps.

::: tabs key:MacOS/LinuxWindows
== Windows
1. Open **File Explorer** and browse to the location where you want to run the labs.
1. Right-click an empty area and choose **New → Folder**.
1. Name the folder `bob-baw-workshop`.
== MacOS / Linux
1. Open **Finder** and browse to the location where you want to run the labs.
1. Choose **File → New Folder**.
1. Name the folder `bob-baw-workshop`.
:::

::: info ✅ **Checkpoint**
- An empty folder named `bob-baw-workshop` exists in a location you chose.
:::

---

## 📦 Step 2 — Download and extract the lab ZIP file

1. In the top navigation bar of this site, click **Lab Materials** to open the download page.
1. Click the **Download** button in the upper-right corner to download `labs.zip` to your laptop.
1. Move `labs.zip` into the `bob-baw-workshop` folder.
1. Extract `labs.zip` inside the `bob-baw-workshop` folder:

    ::: tabs key:MacOS/LinuxWindows
    == Windows
    Right-click `labs.zip` and choose **Extract All…**. Make sure the destination is the `bob-baw-workshop` folder, then click **Extract**.
    == MacOS / Linux
    Double-click `labs.zip`. Finder extracts it next to the ZIP file, in the `bob-baw-workshop` folder.
    :::

1. Open `labs` and look at its content. Each lab has its own folder with the TWX file that you use in that lab:

   ```text
   bob-baw-workshop/
   └── labs/
       ├── lab-1/
       ├── lab-2/
       ├── lab-3/
       └── lab-4/
   ```

::: info ✅ **Checkpoint**
- `bob-baw-workshop/labs` contains the folders `lab-1` to `lab-4`, and each folder contains a `.twx` file.
:::

---

## 🚀 Step 3 — Open the lab folder as your Bob workspace

Bob works on a **workspace**: a folder on your machine that Bob treats as the root of your project. For all labs your workspace is `labs`.

### Open the folder in Bob IDE

1. Start Bob IDE.
1. Go to **File → Open Folder…**.
1. Browse to `bob-baw-workshop` and select `labs`.
1. Click **Open** (macOS) or **Select Folder** (Windows).

If the Explorer panel is empty, you can also click the **Explorer** icon (pages icon) on the left-hand activity bar and use the **Open Folder** button.

### Trust the folder

A banner appears at the top that says: "Restricted Mode is intended for safe code browsing. Trust this folder to enable all features." Click the **Manage** link, click the **Trust** button in the window that opens, and close the window.

### Check the permissions

Look at the **Permissions** drop-down at the bottom of the Bob chat input. Only the **Read** permission is auto-approved. Bob asks for your approval for all other permissions. For the labs, leave the settings as they are.

::: info ✅ **Checkpoint**
- The Explorer panel shows `labs` as the workspace root, with the folders `lab-1` to `lab-4`.
- The folder is trusted, and auto-approval is only enabled for the **Read** permission.
:::

---

## ⬇️ Step 4 — Download the BAW skills and modes repository

The BAW modes and skills are published in a GitHub repository. You download it as a ZIP file, so you do not need Git.

1. In your browser, open <https://github.com/ibmbpm/ibm-baw-skills-and-bob-modes>.
1. Click the green **Code** button and choose **Download ZIP**.
1. Move the downloaded file `ibm-baw-skills-and-bob-modes-main.zip` into the `bob-baw-workshop` folder.
1. Extract the ZIP file inside the `bob-baw-workshop` folder:

    ::: tabs key:MacOS/LinuxWindows
    == Windows
    Right-click the ZIP file and choose **Extract All…**. Make sure the destination is the `bob-baw-workshop` folder, then click **Extract**.
    == MacOS / Linux
    Double-click the ZIP file. Finder extracts it next to the ZIP file, in the `bob-baw-workshop` folder.
    :::

    Your `bob-baw-workshop` folder now contains both extracted folders:

    ```text
    bob-baw-workshop/
    ├── labs/
    │   ├── lab-1/ … lab-4/
    └── ibm-baw-skills-and-bob-modes-main/
        ├── modes/
        ├── skills/
        ├── install.sh
        └── install.ps1
    ```

::: info ✅ **Checkpoint**
- `bob-baw-workshop/ibm-baw-skills-and-bob-modes-main` contains the folders `modes` and `skills` and the files `install.sh` and `install.ps1`.
:::

---

## 🖥️ Step 5 — Open a terminal in the repository folder

You run the installer from the **Integrated Terminal** in Bob IDE.

1. Open the Integrated Terminal with **Ctrl + `` ` ``** (backtick) on all platforms, or via the menu **View → Terminal**.
1. Go to the repository folder. Replace `<path-to>` with the location where you created `bob-baw-workshop`:

    ::: tabs key:MacOS/LinuxWindows
    == Windows
    ```
    cd "<path-to>\bob-baw-workshop\ibm-baw-skills-and-bob-modes-main"
    ```
    == MacOS / Linux
    ```
    cd "<path-to>/bob-baw-workshop/ibm-baw-skills-and-bob-modes-main"
    ```
    :::

1. List the folder content to confirm you are in the right place:

    ::: tabs key:MacOS/LinuxWindows
    == Windows
    ```
    dir
    ```
    == MacOS / Linux
    ```
    ls
    ```
    :::

::: info ✅ **Checkpoint**
- The listing shows `install.sh`, `install.ps1`, `modes` and `skills`.
:::

---

## 📚 Step 6 — Install the Python packages

1. The installer and several skills use the Python packages `pyyaml` and `lxml`. Install them with the Python you installed as a pre-requisite:

    ::: tabs key:MacOS/LinuxWindows
    == Windows
    ```
    python -m pip install pyyaml lxml
    ```
    == MacOS / Linux
    ```
    python3 -m pip install pyyaml lxml
    ```
    :::

::: info ✅ **Checkpoint**
- The command finishes without errors, and ends with a message that the packages were installed (or that the requirement is already satisfied).
:::

---

## 🧰 Step 7 — Install the modes and skills globally

1. Run the installer. By default it installs globally, which makes the BAW skills and modes available in every Bob workspace.

    ::: tabs key:MacOS/LinuxWindows
    == Windows
    A script downloaded from the internet can be blocked by PowerShell. Unblock it first, then run it:
    ```
    Unblock-File .\install.ps1
    .\install.ps1
    ```
    == MacOS / Linux
    ```
    bash ./install.sh
    ```
    :::

1. When the installer asks **Install all? [Y/n]**, press **Enter** to install all skills and modes. Wait until the **Install Summary** is displayed.

The installer does the following:

- Copies the skills to the `.bob/skills` folder in your home directory.
- Adds the **IBM BAW Author** and **IBM BAW Admin** modes to your Bob custom modes. Modes that you created yourself are not overwritten.
- Creates a `.env` file for BAW server credentials. You can ignore this file, the labs work with the TWX files and do not connect to a BAW server.

::: info ✅ **Checkpoint**
- The Install Summary lists the installed skills and the two modes `baw-author` and `baw-admin`, followed by the message **Setup complete!**.
:::

---

## 🔍 Step 8 — Verify the modes in Bob

1. Quit Bob IDE completely and start it again, so Bob loads the new modes and skills.
1. Make sure `labs` is open as your workspace. If it is not, open it again with **File → Open Folder…**.
1. Open the Bob Chat Panel with **Option + Cmd + B** (macOS) or **Ctrl + Alt + B** (Windows/Linux), or click the **Bob icon** beside the navigation bar.
1. Click the **mode selector** at the bottom of the chat input.
1. Confirm that **IBM BAW Author** and **IBM BAW Admin** are in the list.
1. Select **IBM BAW Author**.

::: info ✅ **Final Checkpoint**
- **IBM BAW Author** and **IBM BAW Admin** are listed in the mode selector.
- `labs` is the open workspace, with the folders `lab-1` to `lab-4`.

You are ready to start Lab 1.
:::
