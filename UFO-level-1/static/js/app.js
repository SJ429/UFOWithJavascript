// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody =d3.select ('tbody');
console.log(data)
// //Loop Through data and console.log data
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

// Listen to event and filter 
var button = d3.select('#filter-btn');
var form = d3.select('#filters');
button.on('click', getStats);
form.on('submit',getStats);
function getStats() {
 
  // Prevent the page from refreshing
  d3.event.preventDefault();

 //Select the imput element and get the HTML mode
  var inputElement =d3.select('#datetime');

  //Get the value property of the input element
  var inputValue = inputElement.property('value');

  console.log(inputValue);  
  console.log(tableData);

  // Set up filter to for Data
  var filteredData = tableData.filter(date=> date.datetime ===inputValue);
  console.log(filteredData);
  d3.select('tbody').html('');

  // Append and filter data
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
