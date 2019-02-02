function richmondSunlightAPIInit(){
  var jsonURL = "https://api.richmondsunlight.com/1.0/bill/2019/hb277.json"; // has tags

  function getJSON(){
    var request = new XMLHttpRequest();
    request.open('GET', jsonURL, true);
    request.onload = function(){
      if (request.status >= 200 && request.status < 400) { // success!
        var data = JSON.parse(request.responseText);
        // console.log(data);
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
    let htmlHook = document.getElementById("dashboard-display-01");
    let htmlOutput = document.createElement('div');
    htmlOutput.setAttribute('id', 'richmond-sunlight-data');
    let htmlObjs = [];
    let nestedJSON;
    let htmlList;
    
    htmlObjs.push("<section class=\"rva-api-section\">");
    htmlObjs.push("<h2><b>Title</b>: " +data.title+ "</h2>");
    htmlObjs.push("<ul class=\"xoxo rva-sun-api-list\">")
    htmlObjs.push("<li><b>Number</b>: " +data.number+ "</li>");
    htmlObjs.push("<li><b>Current Chamber</b>: " +data.current_chamber+ "</li>");
    htmlObjs.push("<li><b>Date Introduced</b>: <time datetime=\"" +data.date_introduced+ "\">" +data.date_introduced+ "</time></li>");
    htmlObjs.push("<li><b>Outcome</b>: " +data.outcome+ "</li>");
    htmlObjs.push("<li><b>Title</b>: " +data.title+ "</li>");
    htmlObjs.push("<li><b>Summary</b>: <p>" +data.summary+ "</p></li>");
    htmlObjs.push("<li><b>Text</b>: <p>" +data.text+ "</p></li>");
    htmlObjs.push("<li><b>Patron Name</b>: " +data.patron.name+ "</li>");
    htmlObjs.push("<li><b>Patron ID</b>: " +data.patron.id+ "</li>");
    
    if(data.tags){ // console.log("you have tags data; parse accordingly; data tags length: " +data.tags.length);
      let htmlObjsTags = "<li><b>Tags</b>: ";
      for(var z = 0; z < data.tags.length; z++){ // console.log("data tags: " +data.tags[z].tag);
        htmlObjsTags += "<b class=\"b-tag\">" +data.tags[z].tag+ "</b>, ";
      };
      htmlObjsTags += "</li>";
      htmlObjsTags += "</ul>";
      htmlObjs.push(htmlObjsTags);
    };
    
    htmlObjs.push("</ul>");
    htmlObjs.push("</section>");
    htmlList += htmlObjs.join('');
    htmlOutput.innerHTML = htmlList;
    htmlHook.appendChild(htmlOutput);
  };

};
