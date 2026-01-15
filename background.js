chrome.tabs.query({ active: !0, lastFocusedWindow: !0 }, function (n) {
  n[0].url;
}),
  chrome.runtime.onInstalled.addListener(function (n) {
    n.reason;
  });
