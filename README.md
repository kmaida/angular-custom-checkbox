# angular-custom-checkbox

A simple directive to create custom checkboxes.

```
<custom-checkbox
	checkbox-id="checkbox1"
	model="cbValue"
	label="Check Me"
	on-click="changeFn()">
</custom-checkbox>
```

* Wraps input and custom checkbox in a label
* Generates faux checkbox as a `span` that can be styled accordingly
* `checked` class added to faux checkbox when `input` is checked
* Allows for additional labels external to directive template (via input ID)
* ng-model updates can be made dynamically via JavaScript
* Supports native `true` and `false` values; does not support `ng-true-value` or `ng-false-value` at this time
