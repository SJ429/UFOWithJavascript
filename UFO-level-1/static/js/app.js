// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody =d3.select ('tbody');
console.log(data)
//Loop Through data and console.log data
data.forEach(function(tableData) {
console.log(tableData);
 });
//Use d3 to append table row 'tr'
data.forEach(function(tableData) {
console.log(tableData);
var row = tbody.append('tr');
 });
//Use object.entries to console.log
Object.entries(tableData).forEach(function([key, value]) {
 console.log(key, value);
});
// Use d3 to append row and data
data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append('tr');
  Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append('td')
    cell.text(value);
  });
});


// Listen to events and filter 
var button = d3.select('#filter-btn');
var form = d3.select('#filters');
button.on('click', getStats);
form.on('submit',getStats);
function getStats() {
 
  d3.event.preventDefault();

  var inputElement =d3.select('#datetime');
  var inputValue = inputElement.property('value');
  console.log(inputValue);  
  console.log(tableData);

  var filteredData = tableData.filter(date=> date.datetime ===inputValue);
  console.log(filteredData);
  d3.select('tbody').html('');

  filteredData.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append('tr');
    Object.entries(tableData).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append('td');
      cell.text(value);
    });
});
}
