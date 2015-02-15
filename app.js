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

myApp.directive('customCheckbox', [function() {
	var _templateFn = function(tElem, tAttrs) {
		var inputID = tAttrs.checkboxId ? ' id={{checkboxId}}' : '',
			trueVal = tAttrs.trueValue ? ' ng-true-value="\'{{trueValue}}\'"' : '',
			falseVal = tAttrs.falseValue ? ' ng-false-value="\'{{falseValue}}\'"' : '',
			inputElem = '<input' + inputID + ' class="customCheckbox-input" type="checkbox" ng-model="model"' + trueVal + falseVal + ' />',
			checkedClass = (tAttrs.trueValue) ? '{checked: model == trueValue}' : '{checked: model}',
			fauxCheckbox = '<span class="customCheckbox-faux" ng-class="' + checkedClass + '"></span>',
			labelTxt = tAttrs.label ? '<span class="customCheckbox-label-text">{{label}}</span>' : '';

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

myApp.directive('customRadio', [function() {
	var _templateFn = function(tElem, tAttrs) {
		var inputID = tAttrs.radioId ? ' id={{checkboxId}}' : '',
			value = tAttrs.specialValue ? ' ng-value="specialValue"' : ' value="' + tAttrs.radioValue + '"',
			name = tAttrs.formName ? ' name="{{formName}}"' : '',
			inputElem = '<input' + inputID + name + ' class="customRadio-input" type="radio" ng-model="model"' + value + ' />',
			checkedClass = tAttrs.specialValue ? '{checked: model == specialValue}' : '{checked: model == \'' + tAttrs.radioValue + '\'}',
			fauxRadio = '<span class="customRadio-faux" ng-class="' + checkedClass + '"></span>',
			labelTxt = tAttrs.label ? '<span class="customRadio-label-text">{{label}}</span>' : '';

		return '<label class="customRadio-label">' + inputElem + fauxRadio + labelTxt + '</label>';
	};

	return {
		restrict: 'E',
		replace: true,
		scope: {
			formName: '@',
			radioId: '@',
			radioValue: '=',
			specialValue: '=',
			model: '=',
			label: '@'
		},
		template: _templateFn
	};
}]);