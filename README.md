# 🌙 Dark Mode PDF (Universal)

A lightweight and privacy-friendly **dark mode extension** for viewing PDFs comfortably in any **Chromium-based browser** — including Chrome, Edge, Brave, Opera, and Vivaldi.  
No account, no tracking, no Chrome Web Store upload — just install it manually and enjoy a dark reading experience.

---

## 📸 Preview 
![Dark Mode PDF Example](https://github.com/SAHILDUDHAL21/Dark-Mode-PDF-Universal-/blob/main/Screenshot%20From%202025-10-04%2022-02-22.png)

---

## 🚀 Features

✅ Works on **all Chromium browsers**  
✅ Adds a **dark mode overlay** to any PDF opened in the browser  
✅ Includes a **toolbar popup toggle** to switch dark mode ON/OFF easily  
✅ **Remembers your setting** across sessions using Chrome Sync storage  
✅ **Offline-first**, no internet access or tracking  
✅ Built with **Manifest V3** for long-term compatibility  

---

## 🧩 How It Works

Chrome’s built-in PDF viewer doesn’t allow direct content injection, so this extension applies a **dark overlay filter** across the viewer using CSS and the `mix-blend-mode` technique.

This ensures dark mode works even where normal content scripts are restricted — providing a smooth reading experience for all PDFs.

---

## ⚙️ Installation (Manual, Free)

You don’t need to pay or publish to the Chrome Web Store — just load it manually:

1. Clone or [Download](https://github.com/SAHILDUDHAL21/Dark-Mode-PDF-Universal-/archive/refs/tags/v1.2.zip) this repository  
2. Open your browser and navigate to:  
`chrome://extensions/
`
3. Enable **Developer Mode** (toggle in the top-right corner)  
4. Click **Load unpacked**  
5. Select the folder containing `manifest.json`  
6. Open any PDF in the browser — you’ll see it in dark mode  
7. Click the extension icon to toggle dark mode ON or OFF  

---

## 🛠 Folder Structure
```
dark-pdf-universal/
├── manifest.json   # Extension configuration (Manifest V3)
├── background.js   # Initializes default settings
├── content.js      # Injects dark overlay filter
├── popup.html      # Popup UI
├── popup.js        # Toggle logic
├── icon.png        # Extension icon
└── README.md       # Documentation
```


---

## 🧠 Technical Details

- **Manifest Version:** 3  
- **APIs Used:** `storage`, `scripting`, `activeTab`  
- **Language:** JavaScript, HTML, CSS  
- **Security:** No remote scripts or network access  
- **Compatibility:**  
  - Google Chrome (v115+)  
  - Microsoft Edge (v115+)  
  - Brave  
  - Opera  
  - Vivaldi  

---

## 🔄 Updating the Extension

If you update or modify files:
1. Go to `chrome://extensions/`
2. Click the **Reload** button on your extension card
3. Reopen any PDF tab to apply changes

---

## 🧰 Troubleshooting

| Problem | Solution |
|----------|-----------|
| PDF not turning dark | Make sure “Dark Mode” is ON in the popup |
| Overlay not visible | Refresh the PDF tab after enabling dark mode |
| Doesn’t work on Drive PDFs | Chrome’s internal viewer blocks scripts — try downloading and reopening locally |
| Colors look too inverted | Adjust brightness using your OS/night mode settings |

---

## 🧭 Roadmap

🔹 v1.3 — Add per-site dark mode preferences  
🔹 v1.4 — Integrate **PDF.js viewer** for full dark theming  
🔹 v2.0 — Add custom filters (sepia, grayscale, warm tint)  
🔹 v2.1 — Keyboard shortcuts for quick toggle  

---

## 🐞 Known Limitations

- Chrome’s built-in viewer restricts full DOM access (so no fine-grained color control)  
- Overlay-based dark mode may affect screenshots  
- On very bright PDFs, some images may appear slightly inverted  

---

## 💬 Feedback & Contributions

Found a bug or want to improve the extension?  
Feel free to open an **issue** or **pull request** — contributions are always welcome!

👉 [Create a new issue](https://github.com/SAHILDUDHAL21/Dark-Mode-PDF-Universal-/issues)  
👉 [Submit a pull request](https://github.com/SAHILDUDHAL21/Dark-Mode-PDF-Universal-/pulls)

---

## 🧑‍💻 Author

**Your Name**  
💻 Developer | ☕ Coder | 🛠 Open Source Enthusiast  
📫 Contact: [sahildudhal1364.com](mailto:sahildudhal1364@gmail.com)  
🌐 GitHub: [github.com/SAHILDUDHAL21](https://github.com/SAHILDUDHAL21)

---

## ⚖️ License

This project is licensed under the [**Apache License 2.0**](https://github.com/SAHILDUDHAL21/Dark-Mode-PDF-Universal-/blob/main/LICENSE) — you are free to use, modify, and distribute it with attribution.



---

> 🌙 *Read comfortably. Code lightly. Go dark with Dark Mode PDF.*

