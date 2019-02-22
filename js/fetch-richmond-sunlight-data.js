function fetchData(){
  function createNode(element) {
    return document.createElement(element);
  }
  function append(parent, el) {
    return parent.appendChild(el);
  }
  function appendFirstChild(parent, el) {

  }
  const ul = document.getElementById('api-richmond-sunlight');
  const url = 'https://api.richmondsunlight.com/1.0/bill/2019/hb277.json';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    console.log("data: " +data.number);
    let billNumber = data.number;
    let li = createNode('li');
    li.innerHTML = "<strong>Bill Number</strong>: " +billNumber;

    return append(ul, li);
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });
};
fetchData();