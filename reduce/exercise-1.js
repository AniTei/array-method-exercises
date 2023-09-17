/*
Exercise 1: Reduce all values to a total

Use .reduce to reduce all of the values to a single total.

An array 'values' has been provided for you.

A variable 'total' has been provided for you. You must use
this variable for the result of you .reduce array method.

Tip: Don't forget to set the initial value to 0

*/

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* const sum = values.reduce((total, value) => {
 total += value;
 return total;

 */
const total = values.reduce((previousValue, value) => previousValue += value, 0 ); 


// Replace null and add .reduce code here
// ooops, almost got it, forgot that the first argument is also the one to be returned
// what happens if I don't set the output datatype?
// in this case nothing happens
// do I want to refactor it? 
// take away the curlies, and the return
// look at solution, had the same one :))))))

console.log(total);


