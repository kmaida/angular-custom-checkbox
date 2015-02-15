myApp.directive('customRadio', [function() {
	var _templateFn = function(tElem, tAttrs) {
		var name = tAttrs.formName ? ' name="{{formName}}"' : '',
			inputID = tAttrs.radioId ? ' id={{radioId}}' : '',
			value = tAttrs.specialValue ? ' ng-value="specialValue"' : ' value="' + tAttrs.radioValue + '"',
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