var flavors = ['Vanilla', 'Chocolate', 'Strawberry'];
var toppings = ['Sprinkles', 'Caramel', 'Whipped Cream'];

//iterating over two arrays using a nested for loop to find all possible combinations of flavor and toppings
for (var i = 0; i < flavors.length; i++) {
  for (var j = 0; j < toppings.length; j++) {
    console.log(`you can have ${flavors[i]} with ${toppings[j]}`);
  }
}