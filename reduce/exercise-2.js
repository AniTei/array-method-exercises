/*
Exercise 2: Total cost of items

Calculate the total cost of all the items using .reduce.

A list of items ('items') has been provided.

Each item has a number of items as well as a price.

Calculate the total cost of all items, taking into account
how many items are in stock.

A variable 'totalCostOfItems' has been provided for you. You must
set the result of your .reduce to this variable.

Tip: Calculate the cost for a single item by multiplying
the items in stock ('itemsInStock') by the price ('price')

*/

const items = [
  {
    name: 'Apple',
    itemsInStock: 10,
    price: 5.99,
  },
  {
    name: 'Banana',
    itemsInStock: 5,
    price: 3.99,
  },
  {
    name: 'Orange',
    itemsInStock: 2,
    price: 3.99,
  },
];

/* const totalCostOfItems = items.reduce((accumulatedCost, currentItem) => 
accumulatedCost += currentItem.price * currentItem.itemsInStock, 0 );
 */


const totalCostOfItems = items.reduce((accumulatedCost, {price, itemsInStock}) => 
accumulatedCost += price * itemsInStock, 0 );

//OK, so just name the keys in a curly box in the argumentline 
// and use those names in the function



// YEsss, did it on the first try, didn't have to look anything up :)))
// now let's try and refactor, remove curlies and the return

// In the soloution they did destructuring also.........
//Let's try it, it basically means, not doing dot notation, 
//but making "names" for properties we want to make use of in the function


// Replace null and add .reduce code here

console.log(totalCostOfItems);


/* console.log(`The Price of all the items: ${totalCostOfItems}`);
 */