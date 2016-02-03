

		function FoodItem (name, calories, vegan, glutenFree, citrusFree ) {
			this.name = name;
			this.calories = calories;
			this.vegan = vegan;
			this.glutenFree = glutenFree;
			this.citrusFree = citrusFree;
		}

		FoodItem.prototype.stringify = function() {
			var isVegan = this.vegan ? "is" : "is not";
			var isGF = this.glutenFree ? "is" : "is not";
			var isCF = this.citrusFree ? "is" : "is not";
			return this.name + " has " + this.calories +" calories, " + isVegan + " vegan, " + isGF + " gluten free, and " + isCF + " citrus free."
		}

		Drink.prototype.stringify = function() {
			var ingredients = this.ingredients.reduce(function(prev,cur) { return prev.name + cur.name})
			return this.name + " is " + this.desc + "It contains " + ingredients + " and costs " + this.price + "."
		}

		function Drink (name, desc, price, ingredients) {
			this.name = name;
			this.desc = desc;
			this.price = price;
			this.ingredients = ingredients;
		}

		function Plate (name, desc, price, ingredients) {
			this.name = name;
			this.desc = desc;
			this.price = price;
			this.ingredients = ingredients;
		}

		function Order (plates) {
			this.plates = plates;
		}

		function Menu (plates) {
			this.plates = plates;
		}

		function Restaurant (name, desc, menu) {
			this.name = name;
			this.desc = desc;
			this.menu = menu;
		}

		function Customer (dietaryPreferance) {
			this.dietaryPreferance = dietaryPreferance
		}


	var burrito = new FoodItem('burrito', 1000, false, false, false)
	var limeJuice = new FoodItem('lime juice', 666, true, true, false)
	var tequila = new FoodItem('tequila', 500, true, true, true)

	var margarita = new Drink('margarita', 'a boozy citrus dirnk.', 6.99, [limeJuice, tequila]);
	console.log(margarita.stringify())
