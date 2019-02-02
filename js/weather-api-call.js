function weatherAPIInit(){
  var jsonURL = 'https://api.weather.gov/gridpoints/AKQ/44,76/forecast'; // has tags

  function getJSON(){
    var request = new XMLHttpRequest();
    request.open('GET', jsonURL, true);
    request.onload = function(){
      if (request.status >= 200 && request.status < 400) { // success!
        var data = JSON.parse(request.responseText);
        parseJSONSingleton(data);
      } else {
    	  console.log("reached target server, but returned an error; helpful error message for sure!");
      }
    };
    request.onerror = function(){
      console.log("there was a connection error of some sort; another helpful error message for sure!");
    };
    request.send();
  }
  getJSON();
  function parseJSONSingleton(data){
    let htmlHook = document.getElementById("dashboard-display-02");
    let htmlOutput = document.createElement('div');
    htmlOutput.setAttribute('id', 'weather-data');
    let htmlObjs = [];
    let nestedJSON;
    let htmlList;


    htmlObjs.push("<section class=\"rva-api-section\">");
    for(var z = 0; z < data.properties.periods.length; z++){
      //console.log(data.properties.periods[z].name+ ": " +data.properties.periods[z].shortForecast);
      htmlObjs.push("<h2>" +data.properties.periods[z].name+ ": " +data.properties.periods[z].shortForecast+ "</h2>");
    }
    htmlObjs.push("</section>");
    htmlList += htmlObjs.join('');
    htmlOutput.innerHTML = htmlList;
    htmlHook.appendChild(htmlOutput); 
  };

};
