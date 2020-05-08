chrome.browserAction.onClicked.addListener(function (activeTab) {
	
	var URL = "https://internet.iitb.ac.in/index.php";
	
	chrome.tabs.create({url: URL}, function (tab) {
	
		chrome.tabs.executeScript(tab.id, {file:"script.js"}, function (result) {});
	
	});
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

	if (!(request.url=="https://internet.iitb.ac.in/baned.php")) {

		chrome.tabs.executeScript(null, {file:"script.js"}, function (result) {});
	
	}
});