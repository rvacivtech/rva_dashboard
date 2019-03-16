function fetchCrimeDB(){
  // const ul = document.getElementById('api-crime-by-month');
  const table = document.getElementById('api-crime-by-month-table');
  const url = 'https://35.236.207.129/api/crime/count-by-month';
  console.log("url: " +url);
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let months = data.result;
    let thead = createNode('thead'),
      tbody = createNode('tbody');
    let theadContent = '<tr><th>Date - Month</th><th>ID</th><th>Number of Crimes</th><th>Date - Year</th></tr>';
    thead.innerHTML = theadContent;
    append(table, thead);
    append(table, tbody);
    return months.map(function(months) {
      let tdDate = createNode('td'),
          tdID = createNode('td'),
          tdNumberOfCrimes = createNode('td'),
          tdYear = createNode('td'),
          tr = createNode('tr');
      tdDate.innerHTML = `${months.date}`;
      tdID.innerHTML = `${months.id}`;
      tdNumberOfCrimes.innerHTML = `${months.number_of_crimes}`;
      tdYear.innerHTML = `${months.year}`;
      append(tr, tdDate);
      append(tr, tdID);
      append(tr, tdNumberOfCrimes);
      append(tr, tdYear);
      append(tbody, tr);
    })
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });   
};