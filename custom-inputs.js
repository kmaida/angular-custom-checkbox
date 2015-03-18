(function() {
	'use strict';

	angular.module('customInputs',[])

	/***
	 * customCheckbox directive
	 */
		.directive('customCheckbox', [function() {

			function _buildCheckboxTemplate(tElem, tAttrs) {
				var name = tAttrs.formName ? ' name="{{formName}}"' : '',
					inputID = tAttrs.checkboxId ? ' id={{checkboxId}}' : '',
					trueVal = tAttrs.trueValue ? ' ng-true-value="\'{{trueValue}}\'"' : '',
					falseVal = tAttrs.falseValue ? ' ng-false-value="\'{{falseValue}}\'"' : '',
					inputElem = '<input' + inputID + name + ' class="customCheckbox-input" type="checkbox" ng-model="model"' + trueVal + falseVal + ' />',
					checkedClass = (tAttrs.trueValue) ? '{checked: model == trueValue}' : '{checked: model}',
					fauxCheckbox = '<span class="customCheckbox-faux" ng-class="' + checkedClass + '" role="checkbox"></span>',
					labelTxt = tAttrs.label ? '<span class="customCheckbox-label-text">{{label}}</span>' : '';

				return '<label class="customCheckbox-label">' + inputElem + fauxCheckbox + labelTxt + '</label>';
			}

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
				template: _buildCheckboxTemplate
			};
		}])

	/***
	 * customRadio directive
	 */
		.directive('customRadio', [function () {

			function _buildRadioTemplate(tElem, tAttrs) {
				var name = tAttrs.formName ? ' name="{{formName}}"' : '',
					inputID = tAttrs.radioId ? ' id={{radioId}}' : '',
					value = tAttrs.specialValue ? ' ng-value="specialValue"' : ' value="' + tAttrs.radioValue + '"',
					inputElem = '<input' + inputID + name + ' class="customRadio-input" type="radio" ng-model="model"' + value + ' />',
					checkedClass = tAttrs.specialValue ? '{checked: model == specialValue}' : '{checked: model == \'' + tAttrs.radioValue + '\'}',
					fauxRadio = '<span class="customRadio-faux" ng-class="' + checkedClass + '" role="radio"></span>',
					labelTxt = tAttrs.label ? '<span class="customRadio-label-text">{{label}}</span>' : '';

				return '<label class="customRadio-label">' + inputElem + fauxRadio + labelTxt + '</label>';
			}

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
				template: _buildRadioTemplate
			};
		}]);

})();