angular.module('app')
	.controller('menuController', ['$scope', 'foodFactory', 'orderFactory', function(scope, foodFactory, orderFactory) {
		scope.menu = foodFactory.restaurant.menu;
		scope.order = orderFactory.order
		console.log(scope.menu)
		scope.record = function(val) {console.log(val)}
		scope.addToOrder = function(item) {
			scope.order.push(item)
			console.log(scope.order)
		}
	}])