const toggleButton = document.getElementById("toggle");
const status = document.getElementById("status");

chrome.storage.sync.get("darkModeEnabled", (data) => {
  const enabled = data.darkModeEnabled;
  status.textContent = enabled ? "ON" : "OFF";
  toggleButton.textContent = enabled ? "Turn OFF" : "Turn ON";
});

toggleButton.addEventListener("click", () => {
  chrome.storage.sync.get("darkModeEnabled", (data) => {
    const newState = !data.darkModeEnabled;
    chrome.storage.sync.set({ darkModeEnabled: newState }, () => {
      status.textContent = newState ? "ON" : "OFF";
      toggleButton.textContent = newState ? "Turn OFF" : "Turn ON";
    });
  });
});
