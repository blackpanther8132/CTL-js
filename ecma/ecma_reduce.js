var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myFunction);

console.log(sum);
function myFunction(total, value, index, array) {
  return total + value;
}
/*
var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; }); 
console.log("total is : " + total );*/