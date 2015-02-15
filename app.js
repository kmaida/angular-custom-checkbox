var myApp = angular.module('myApp',[]);

myApp.controller('MainCtrl', ['$scope', function($scope) {
	$scope.changeCounter = 0;

	$scope.changeFn = function() {
		console.log('Custom checkbox value changed!');
		$scope.changeCounter ++;
	};
}]);

myApp.directive('customCheckbox', [function() {
	var _templateFn = function(tElem, tAttrs) {
		var inputID = tAttrs.checkboxId ? ' id={{checkboxId}}' : '',
			trueVal = tAttrs.trueValue ? ' ng-true-value="\'{{trueValue}}\'"' : '',
			falseVal = tAttrs.falseValue ? ' ng-false-value="\'{{falseValue}}\'"' : '',
			inputElem = '<input' + inputID + ' class="customCheckbox-input" type="checkbox" ng-model="model"' + trueVal + falseVal + ' />',
			onClick = tAttrs.onClick ? ' ng-click="onClick()"' : '',
			checkedClass = (tAttrs.trueValue) ? '{checked: model == trueValue}' : '{checked: model}',
			fauxCheckbox = '<span class="customCheckbox-faux" ng-class="' + checkedClass + '"' + onClick + '></span>',
			labelTxt = tAttrs.label ? '<span class="customCheckbox-label-text"' + onClick + '>{{label}}</span>' : '';

		return '<label class="customCheckbox-label">' + inputElem + fauxCheckbox + labelTxt + '</label>';
	};

	return {
		restrict: 'E',
		replace: true,
		scope: {
			checkboxId: '@',
			model: '=',
			label: '@',
			onClick: '&',
			trueValue: '=',
			falseValue: '='
		},
		template: _templateFn
	};
}]);