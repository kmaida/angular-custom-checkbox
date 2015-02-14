var myApp = angular.module('myApp',[]);

myApp.controller('MainCtrl', ['$scope', function($scope) {
	$scope.changeFn = function() {
		alert('changed!');
	};
}]);

myApp.directive('customCheckbox', [function() {
	var _link = function($scope, element, attrs) {
		var label = angular.element('<label class="customCheckbox-label" />'),
			fauxCheckbox = angular.element('<span class="customCheckbox-faux" />'),
			labelText = angular.element('<span class="customCheckbox-label-text">' + attrs.label + '</span>');

		element.after(label);

		label
			.prepend(element)
			.append(fauxCheckbox)
			.append(labelText);

		$scope.$watch('ngModel', function(newVal, oldVal) {
			if ($scope.ngModel) {
				fauxCheckbox.addClass('checked');
			} else {
				fauxCheckbox.removeClass('checked');
			}
		}, false);
	};

	return {
		restrict: 'A',
		replace: true,
		scope: {
			ngModel: '=',
			label: '@',
			ngChange: '&',
			ngTrueValue: '=',
			ngFalseValue: '='
		},
		link: _link
	};
}]);