// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody =d3.select ('tbody');
console.log(data)

data.forEach(function(tableData) {
console.log(tableData);
 });

data.forEach(function(tableData) {
console.log(tableData);
var row = tbody.append('tr');
 });

Object.entries(tableData).forEach(function([key, value]) {
 console.log(key, value);
});

data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append('tr');
  Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append('td')
    cell.text(value);
  });
});



   // Use D3 to select the table
// var table = d3.select('table');
// //Use D3 to set the table class to 'table table-stripe'
// table.attr('class', 'table table-dark');

// var thead = d3.select('thead');
// row_h = thead.append('tr');
// Object.keys(tableData[0]).forEach((key)=>
// {
// var cell=row_h.append('th');
// data.forEach((tableData)=> {
// var row =tbody.append('tr');
// Object.values(tableData).forEach((value)=>{
// var cell = row.append('td');
// cell.text(value);  

//   });  
// })