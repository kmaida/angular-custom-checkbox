var myApp = angular.module('myApp',[]);

myApp.controller('CheckboxCtrl', ['$scope', function($scope) {
	$scope.changeCounter = 0;

	$scope.$watch('cbValue', function (newVal, oldVal) {
		if (newVal !== oldVal) {
			console.log('Custom checkbox value changed!', $scope.cbValue);
			$scope.changeCounter++;
		}
	}, false);
}]);

myApp.controller('RadioCtrl', ['$scope', function($scope) {
	$scope.color = 'red';
	$scope.specialVal = {'id': 123, 'color': 'blue'};

	$scope.$watch('radioValue', function(newVal, oldVal) {
		if (newVal !== oldVal) {
			console.log('Custom radio value changed!', $scope.color);
		}
	}, false);
}]);