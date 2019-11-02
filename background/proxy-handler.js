// Initialize the list of blocked hosts
let blockedHosts = ["www.youtube.com", "en-gb.facebook.com"];

// Set the default list on installation.
browser.runtime.onInstalled.addListener(details => {
  browser.storage.local.set({
    blockedHosts: blockedHosts
  });
});

// Get the stored list
browser.storage.local.get(data => {
  if (data.blockedHosts) {
    blockedHosts = data.blockedHosts;
  }
});

// Listen for changes in the blocked list
browser.storage.onChanged.addListener(changeData => {
  blockedHosts = changeData.blockedHosts.newValue;
});

// Managed the proxy

// Listen for a request to open a webpage
browser.proxy.onRequest.addListener(handleProxyRequest, {urls: ["<all_urls>"]});

//browser.proxy.onRequest.removeListener(handleProxyRequest, {urls: ["<all_urls>"]});

// On the request to open a webpage
function handleProxyRequest(requestInfo) {
// Read the web address of the page to be visited 
  const url = new URL(requestInfo.url);
// Determine whether the domain in the web address is on the blocked hosts list
  if (blockedHosts.indexOf(url.hostname) != -1) {
// Write details of the proxied host to the console and return the proxy address
    console.log(`Proxying: ${url.hostname}`);
// Pass url to next page
     var out_url = url.hostname;
     var queryString = "?para1=" + out_url;
     browser.tabs.update({"url": "/Moneta/pages/landing_page.html" + queryString});
     web
  }
// Return instructions to open the requested webpage
  return {type: "direct"};
}

// Log any errors from the proxy script
browser.proxy.onError.addListener(error => {
  console.error(`Proxy error: ${error.message}`);
});



