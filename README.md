# angular-custom-inputs

These are two simple directives to create custom checkboxes and radio buttons. Behavior mimics standard input behaviors 
except for `ng-change`, which no longer functions because it is only triggered by direct user interactions. Using a 
`$watch` is recommended instead.

* Wraps input and custom "faux" input in a label (supports text if provided via attribute)
* Generates faux input as a `span` that can be styled accordingly
* `checked` class added to faux input when `input` is checked
* Allows for additional labels external to directive template (via input `ID` if `<label for="ID">` is used)
* `ng-model` updates can be made dynamically via JavaScript
* Supports `ng-true-value` and `ng-false-value` (checkboxes)
* Supports `ng-value` (radios)
* Examples available in the `index.html` file

## Inject `customInputs` module

To use the custom input directives, include the `customInputs.js` file in your app and inject the `customInputs` module:

```
angular.module('myApp', ['customInputs'])
```

## Custom Checkbox

```
<custom-checkbox
	form-name="testForm"
	checkbox-id="checkbox1"
	model="cbDefaultValue"
	label="Check Me"
	>
</custom-checkbox>

<custom-checkbox
	checkbox-id="checkbox2"
	model="cbSpecialValue"
	label="Toggle Me"
	true-value="'truthy'"
	false-value="0">
</custom-checkbox>
```

### Attributes

* `form-name` (*string*) The `name` of the rendered input element
* `checkbox-id` (*string*) The HTML ID of the rendered input element
* `model` (*string* / *`$scope` variable*) The `ng-model` of the rendered input (required)
* `label` (*string*) Text that goes inside the wrapping `label` element
* `true-value` ('*string*' or *integer*) The `ng-true-value` of the rendered input
* `false-value` ('*string*' or *integer*) The `ng-false-value` of the rendered input (truthy/falsy)

### Sample Controller

```
myApp.controller('CheckboxCtrl', ['$scope', function($scope) {
	$scope.$watch('cbDefaultValue', function (newVal, oldVal) {
		if (newVal !== oldVal) {
			console.log('Custom checkbox value changed!', $scope.cbDefaultValue);
		}
	}, false);
}]);
```

## Custom Radio

```
<custom-radio
	form-name="testForm2"
	radio-id="radio1"
	model="color"
	radio-value="red"
	label="Red"
	>
</custom-radio>

<custom-radio
	form-name="testForm2"
	radio-id="radio2"
	model="color"
	special-value="blue"
	label="Blue (special)"
	>
</custom-radio>
```

### Attributes

* `form-name` (*string*) The `name` of the rendered input element
* `radio-id` (*string*) The HTML ID of the rendered input element
* `model` (*string* / *`$scope` variable*) The `ng-model` of the rendered input (required)
* `label` (*string*) Text that goes inside the wrapping `label` element
* `radio-value` (*string*) The `value` of the rendered input -OR-
* `special-value` (*string* / `$scope` object) The `ng-value` of the rendered input

### Sample Controller

```
myApp.controller('RadioCtrl', ['$scope', function($scope) {
	$scope.color = 'red';   // default selected color
	$scope.specialVal = {'id': 123, 'color': 'blue'};

	$scope.$watch('color', function(newVal, oldVal) {
		if (newVal !== oldVal) {
			console.log('Custom radio value changed!', $scope.color);
		}
	}, false);
}]);
```
