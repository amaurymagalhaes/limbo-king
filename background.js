document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query(
    {
      active: false,
      status: "complete",
    },
    function (tabs) {
      for (let tab in tabs) {
        if (!tabs[tab].url.match(/(chrome)/gi)) {
          chrome.tabs.executeScript(tabs[tab].id, {
            file: "js/main.js",
          });
          chrome.tabs.insertCSS(tabs[tab].id, {
            file: "css/main.css",
          });
        }
      }
    }
  );
});
