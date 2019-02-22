function currentDateTime(){
	Date.prototype.today = function () { // todays date
    	return this.getFullYear()+"-"+((this.getDate() < 10)?"0":"") + this.getDate()+"-"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1);
	}
	Date.prototype.timeNow = function () { // current time
		return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
	}
	let newDate = new Date();
	let dateToday = newDate.today();
	let currentTime = newDate.timeNow();
	let htmlTimeContent = "Today's Date: " +dateToday+ " Current Time: " +currentTime;

	let htmlTime = document.getElementById("current-time");
	htmlTime.setAttribute("datetime", dateToday);
	htmlTime.innerHTML = htmlTimeContent;
};

function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

function appendFirstChild(parent, el) {}

function loadDashboard() {
	document.onreadystatechange = function () {
    	if (document.readyState === "interactive") {
        	fetchDataWeather();
        	fetchDataRichmondSunlight();
        	currentDateTime();
    	};
	};
};
loadDashboard();