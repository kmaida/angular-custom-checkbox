myApp.directive('customCheckbox', [function() {
	var _templateFn = function(tElem, tAttrs) {
		var name = tAttrs.formName ? ' name="{{formName}}"' : '',
			inputID = tAttrs.checkboxId ? ' id={{checkboxId}}' : '',
			trueVal = tAttrs.trueValue ? ' ng-true-value="\'{{trueValue}}\'"' : '',
			falseVal = tAttrs.falseValue ? ' ng-false-value="\'{{falseValue}}\'"' : '',
			inputElem = '<input' + inputID + name + ' class="customCheckbox-input" type="checkbox" ng-model="model"' + trueVal + falseVal + ' />',
			checkedClass = (tAttrs.trueValue) ? '{checked: model == trueValue}' : '{checked: model}',
			fauxCheckbox = '<span class="customCheckbox-faux" ng-class="' + checkedClass + '"></span>',
			labelTxt = tAttrs.label ? '<span class="customCheckbox-label-text">{{label}}</span>' : '';

		return '<label class="customCheckbox-label">' + inputElem + fauxCheckbox + labelTxt + '</label>';
	};

	return {
		restrict: 'E',
		replace: true,
		scope: {
			formName: '@',
			checkboxId: '@',
			model: '=',
			label: '@',
			trueValue: '=',
			falseValue: '='
		},
		template: _templateFn
	};
}]);