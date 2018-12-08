chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color: "blue" }, () => {
    console.log("background script running");
    console.log("The color is green");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'developer.chrome.com' }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });

  chrome.tabs.onCreated.addListener((tab) => {
    console.log(tab);
  })

  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log(tabId, changeInfo, tab);
  })
});
