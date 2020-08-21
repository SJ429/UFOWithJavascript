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
  button.on('click', getData);
  // form.on('submit', getData);
  function getData() {
  
    // Prevent the page from refreshing
    d3.select('tbody').html('');
    d3.event.preventDefault();
 
   
    var datetime = d3.select('#datetime');
    var city = d3.select('#city');
    var state = d3.select('#state');
    var country = d3.select('#country');
    var shape = d3.select('#shape')

    var inputDate =datetime.property('value');
    var inputCity = city.property('value');
    var inputState = state.property('value');
    var inputCountry = country.property('value');
    var inputShape = shape.property('value');

    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);

    // Initialize tableData as filteredData
    filteredData = tableData;

    if (inputDate!=''&& inputCity!==null) {
      filteredData = tableData.filter(data => data.datetime === inputDate);}
  
    if (inputCity!=''&& inputCity!==null) {
      filteredData = tableData.filter(data => data.city === inputCity);}
  
    if (inputState!=''&& inputCity!==null) {
      filteredData = tableData.filter(data => data.state === inputState);}
  
    if (inputShape!=''&& inputCity!==null) {
      filteredData = tableData.filter(data => data.shape === inputShape);}
  
    if (inputCountry!=''&& inputCity!==null) {
      filteredData = tableData.filter(data => data.country === inputCountry);}
  
  
    // Display the filtered dataset
     filteredData.forEach((tableData) => {
      console.log(tableData);
        var row = tbody.append('tr');
  
      Object.entries(tableData).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
      });
    });
}




    