angular.module('app')
	.controller('pageController', ['$scope', 'foodFactory', function (scope, foodFac) {

		scope.restaurant = foodFac.restaurant
		scope.addItem = function(item) {
			
		}

	}])