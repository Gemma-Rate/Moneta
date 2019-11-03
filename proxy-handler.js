// Some default addresses
let defaultAddresses = ["www.youtube.com", "en-gb.facebook.com"];

// Set the default list on installation.
browser.runtime.onInstalled.addListener(details => {
  browser.storage.local.set({"blocked": defaultAddresses});
});

// Listen for changes in the blocked list
browser.storage.onChanged.addListener(changeData => {
  blockedHosts = changeData.blocked.newValue;
});

// Managed the proxy

// Listen for a request to open a webpage
browser.tabs.onCreated(browser.proxy.onRequest.addListener(handleProxyRequest, {urls: ["<all_urls>"]}));

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
     
     browser.tabs.update({"url": "/landing_page.html" + queryString});
     browser.tabs.onCreated(browser.proxy.onRequest.removeListener(handleProxyRequest, {urls: ["<all_urls>"]}));
     //setTimeout(browser.tabs.onCreated(browser.proxy.onRequest.addListener(handleProxyRequest, {urls: ["<all_urls>"]})), 10000)
  }
  return {type: "direct"};
  // Return instructions to open the requested webpage
}

// Log any errors from the proxy script
browser.proxy.onError.addListener(error => {
  console.error(`Proxy error: ${error.message}`);
});
