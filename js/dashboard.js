function loadDashboard() {
	document.onreadystatechange = function () {
    	if (document.readyState === "interactive") {
        	weatherAPIInit();
        	richmondSunlightAPIInit();
    	};
	};
};
loadDashboard();