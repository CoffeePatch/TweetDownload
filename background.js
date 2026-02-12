// Listen for download requests from content script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "downloadMedia" && message.url && message.filename) {
    chrome.downloads.download(
      {
        url: message.url,
        filename: message.filename,
        conflictAction: "uniquify",
      },
      function (downloadId) {
        if (chrome.runtime.lastError) {
          console.error("Download failed:", chrome.runtime.lastError.message);
        }
      },
    );
  }
});
