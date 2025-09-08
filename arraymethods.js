/*
Task 1: Create the Order System
Create a multi-dimensional array called orders with two rows:
● The first row stores three drink orders (e.g., “Latte”, “Tea”, “Espresso”).
● The second row stores three pastry orders (e.g., “Croissant”, “Muffin”,
“Bagel”).
*/

let orders = [ 
    ["Latte","Tea","Espresso"],
    ["Croissant","Muffin","Bagel"]
];
console.log(orders[0]);
console.log(orders[1]);

/*
Task 2: Log the number of drinks and number of pastries by using .length on each
row.
*/

console.log("Number of drinks available : " + orders[0].length);
console.log("Number of pastries available : " + orders[1].length);

/*
Task 3: Access Orders Using Bracket Notation
Use bracket notation to log a specific drink and a specific pastry using
hardcoded numbers. For example, you might want to log the first drink and last
pastry. Do this for three combinations.
*/

console.log("Three combination are: ");
console.log(orders[0][0],orders[1][2]);
console.log(orders[0][1],orders[1][1]);
console.log(orders[0][2],orders[1][0]);

/*
Task 4: Access Orders Dynamically with Variables
*/

const input = require("readline-sync");
let row = input.question("Enter the category 0->'Drinks' & 1->'Pastries': ");
let item = input.question("select the item : ");
console.log("Ordered item is  : " + orders[row][item]);

/* 
Task 5: Write a loop that logs all the items in the drink category, ensuring the loop
dynamically adjusts to the number of items using .length.
*/

let i = 0;
console.log("Items in the drink category are: ");
for(let j =0 ; j<orders[i].length ;j++){
    console.log("\"" + orders[i][j] + "\"");
}
    
/*
Task 6: Add a New Order & Track Length
Suppose a new order has been placed: a customer ordered a flat white. Add “flat
white” to the drinks category dynamically. Log the updated number of drinks after
the addition.
Declare two variables and use them with bracket notation to log the selected order
dynamically.
*/

//let newDrink = input.question("Enter a new drink of your choice :'flat white' available ");
//let newOrder = orders[0].push(newDrink);
let newDrink = orders[0].concat(input.question("Enter a new drink of your choice :'flat white' available "));
console.log("Updated drinks: " + newDrink + "\t Number of drinks : " + newDrink.length);

let catSelected = input.question("Enter the category 0->'Drinks' & 1->'Pastries': ");
let itemSelected = input.question("select the item : ");
console.log("Ordered item is  : " + orders[catSelected][itemSelected]);
