var myApp = angular.module('myApp',[]);

myApp.controller('MainCtrl', ['$scope', function($scope) {
	$scope.changeCounter = 0;

	$scope.changeFn = function() {
		console.log('Custom checkbox value changed!');
		$scope.changeCounter ++;
	};
}]);

myApp.directive('customCheckbox', [function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			checkboxId: '@',
			model: '=',
			label: '@',
			onClick: '&'
		},
		template:   '<label class="customCheckbox-label">' +
						'<input id="{{checkboxId}}" class="customCheckbox-input" type="checkbox" ng-model="model" />' +
						'<span class="customCheckbox-faux" ng-class="{checked: !!model}" ng-click="onClick()"></span>' +
						'<span class="customCheckbox-label-text" ng-click="onClick()">{{label}}</span>' +
					'</label>'
	};
}]);