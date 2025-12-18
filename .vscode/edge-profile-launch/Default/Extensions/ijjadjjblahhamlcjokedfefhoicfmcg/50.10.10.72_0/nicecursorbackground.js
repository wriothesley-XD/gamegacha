let Installed = function () {
    chrome.storage.local.set({
        switch_status: "true",
        default_cursor: "",
        pointer_cursor: "",
        default_cursor_result: "",
        pointer_cursor_result: "",
        default_curSize: "48",
        pointer_curSize: "48",
        curSelected: "default",
        css_elm: ""
    }, function () {
        chrome.tabs.query({}, function (t) {
            for (let e = 0; e < t.length; e++)
                if (-1 !== t[e].url.indexOf("http")) try {
                    chrome.scripting.executeScript(t[e].id, {
                        file: "nicecursorcontent.js",
                        allFrames: !0
                    })
                } catch (t) {}
        })
    })
};

chrome.runtime.setUninstallURL("https://nicecursor.com/uninstall?utm_campaign=Extensions&utm_medium=uninstall&utm_source=genshinimpact");

chrome.runtime.onInstalled.addListener(function (object) {
	
	if(object.reason == "install"){
		 var nicecursorpageurl = 'https://nicecursor.com/genshin-impact-cursor-chrome/?utm_campaign=Extensions&utm_medium=newinstall&utm_source=genshinimpact';
		 chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
			if(tabs.length > 0){
				var tabid = tabs[0].id;
				chrome.tabs.update(tabid, {url: nicecursorpageurl});
			}
		});
        chrome.storage.local.set({
            switch_status: "true",
            default_cursor: "",
            pointer_cursor: "",
            default_cursor_result: "",
            pointer_cursor_result: "",
            default_curSize: "48",
            pointer_curSize: "48",
            curSelected: "default",
            css_elm: ""
        });
    }
	
  
});



