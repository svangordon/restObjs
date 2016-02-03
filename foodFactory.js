angular.module('app')
	.factory('foodFactory', [function() {

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


		Drink.prototype.getDietary = function() {
			function reduceBool(key) {
				return this.ingredients.reduce(function(prev,cur) {return prev[key] && cur[key]})
			}
			var reduceDiet = reduceBool.bind(this);
			var vegan = reduceDiet('vegan');
			var gf = reduceDiet('glutenFree');
			var cf = reduceDiet('citrusFree');
			return {
				vegan : vegan,
				glutenFree : gf,
				citrusFree : cf
			}
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

		Plate.prototype.getCalories = function() {
			return this.ingredients.reduce(function(prev,cur) { return prev.calories + cur.calories})
		}

		Plate.prototype.stringify = function() {
			var ingredients = this.ingredients.reduce(function(prev,cur) { return prev.name + "and " + cur.name})
			return this.name + " is " + this.desc + ". It contains " + ingredients + " and costs " + this.price + "."
		}

		Drink.prototype.stringify = function() {
			var ingredients = this.ingredients.reduce(function(prev,cur) { return prev.name + " and " + cur.name})
			return this.name + " is " + this.desc + ". It contains " + ingredients + " and costs " + this.price + "."
		}

		Plate.prototype.getDietary = function() {
			function reduceBool(key) {
				return this.ingredients.reduce(function(prev,cur) {return prev[key] && cur[key]})
			}
			var reduceDiet = reduceBool.bind(this);
			var vegan = reduceDiet('vegan');
			var gf = reduceDiet('glutenFree');
			var cf = reduceDiet('citrusFree');
			return {
				vegan : vegan,
				glutenFree : gf,
				citrusFree : cf
			}
		}

		function Order (plates) {
			this.plates = plates;
		}

		Order.prototype.stringify = function() {
			return this.plates.reduce(function(prev,cur) {
				return (typeof prev === 'string' ? prev : prev.stringify()) + " " + cur.stringify()
			})
		}

		function Menu (plates) {
			this.plates = plates;
		}

		Menu.prototype.stringify = function() {
			return this.plates.reduce(function(prev,cur) {
				return (typeof prev === 'string' ? prev : prev.stringify()) + " " + cur.stringify()
			})
		}

		function Restaurant (name, desc, menu) {
			this.name = name;
			this.desc = desc;
			this.menu = menu;
		}

		Restaurant.prototype.stringify = function() {
			return "Welcome to " + this.name +"! " + this.desc +". Take a look at our menu : " +this.menu.stringify()

		}


		function Customer (dietaryPreferance) {
			this.dietaryPreferance = dietaryPreferance
		}

		var guac = new FoodItem('guac', 500, true, true, false)
		var rice = new FoodItem('rice', 100, false, true,false)
		var burrito = new Plate('burrito', "some stuff wrapped in a tortilla", 10.00, [ guac, rice ])
		var limeJuice = new FoodItem('lime juice', 666, true, true, false)
		var tequila = new FoodItem('tequila', 500, true, true, true)

		var margarita = new Drink('margarita', 'a boozy citrus drink', 6.99, [limeJuice, tequila]);
		// console.log(margarita.getDietary())
			var chips = new FoodItem('chips', 450, true, false, true);
		var cheese= new FoodItem('cheese', 500, false, false, true);
		var nachos = new Plate('nachos', 'chips covered in cheese', 11, [chips,cheese])
		var myOrder = new Order([burrito, nachos, margarita])
		var myMenu = new Menu([burrito, nachos, margarita]);
		var myResto = new Restaurant('Casa del Mexican Food', "This is a Mexican Restaurant", myMenu);

		return {
			restaurant : myResto
		}

	}])