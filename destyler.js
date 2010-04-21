chrome.extension.sendRequest({action:"check_url",url:document.location.href}, function(response) {
	if(response.disable == true) {
		for (var i = 0;i<document.styleSheets.length;i++) document.styleSheets[i].disabled = true;
	}
});