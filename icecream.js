var flavors = ['Vanilla', 'Chocolate', 'Strawberry'];
var toppings = ['Sprinkles', 'Caramel', 'Whipped Cream'];

//iterating over two arrays using a nested for loop to find all possible combinations of flavor and toppings
for (var i = 0; i < flavors.length; i++) {
  for (var j = 0; j < toppings.length; j++) {
    console.log(`you can have ${flavors[i]} with ${toppings[j]}`);
  }
}

/* will log: 
you can have Vanilla with Sprinkles
you can have Vanilla with Caramel
you can have Vanilla with Whipped Cream
you can have Chocolate with Sprinkles
you can have Chocolate with Caramel
you can have Chocolate with Whipped Cream
you can have Strawberry with Sprinkles
you can have Strawberry with Caramel
you can have Strawberry with Whipped Cream
*/
