(()=>{
    // Only inject for Twitter/X domains
    if (window.location.href.includes("https://x.com") || 
        window.location.href.includes("https://twitter.com")) {
        
        // Inject content.js into page context
        var script = document.createElement("script");
        script.src = chrome.runtime.getURL("content.js");
        script.onload = function() {
            console.log("Twitter Video Downloader: content.js loaded successfully");
            this.remove();
        };
        script.onerror = function() {
            console.error("Twitter Video Downloader: Failed to load content.js");
        };
        
        (document.head || document.documentElement).appendChild(script);
    }
})();
