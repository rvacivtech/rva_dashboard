function fetchData(){
  function createNode(element) {
    return document.createElement(element);
  }
  function append(parent, el) {
    return parent.appendChild(el);
  }
  function appendFirstChild(parent, el) {

  }
  const ul = document.getElementById('api-weather');
  const url = 'https://api.weather.gov/gridpoints/AKQ/44,76/forecast';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let weathers = data.properties.periods[0];
    let li = createNode('li'),
      img = createNode('img'),
      span = createNode('span');
    img.src = weathers.icon;
    span.innerHTML = `${weathers.temperature} ${weathers.shortForecast}`;
    append(li, img);
    append(li, span);
    
    return append(ul, li);
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });   
};
fetchData();