chrome.extension.sendRequest({action:"check_url",url:document.location}, function(response) {
	if(response.disable == true) {
		for (var i = 0;i<9;i++) document.styleSheets[i].disabled = true;
	}
});