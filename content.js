chrome.storage.sync.get("darkModeEnabled", (data) => {
  if (data.darkModeEnabled) {
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      background: rgba(255,255,255,0);
      mix-blend-mode: difference;
      z-index: 999999;
      backdrop-filter: invert(1) hue-rotate(180deg);
    `;
    document.body.appendChild(overlay);
  }
});
