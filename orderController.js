angular.module('app')
	.controller('orderController', ['$scope', 'orderFactory', function(scope, orderFactory) {
		scope.order = orderFactory.order;
		scope.preferences = {
			vegan : false,
			glutenFree : false,
			citrusFree : false
		};
		scope.prefSubmit =function () { console.log(scope.preferences)}
		scope.record = function (val) { console.log(val)}
		scope.evalPrefs = function (itemDietary) {
			//console.log(itemDietary)
			return  (scope.preferences.vegan === itemDietary.vegan || scope.preferences.vegan === false) &&
					(scope.preferences.glutenFree === itemDietary.glutenFree || scope.preferences.glutenFree === false) &&
					(scope.preferences.citrusFree === itemDietary.citrusFree || scope.preferences.citrusFree === false)
		}
		scope.orderTotal = function () {
			var sum = 0;
			scope.order.forEach(function(cur) { sum+= cur.price})
			return sum;
		}
	}])