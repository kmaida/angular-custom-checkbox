# angular-custom-checkbox

A simple directive to create custom checkboxes. Behavior mimics standard checkbox behavior except for `ng-change`, 
which no longer functions because it is only triggered by direct user interactions. It is replaced with `ng-click`.

```
<custom-checkbox
	checkbox-id="checkbox1"
	model="cbValue"
	label="Check Me"
	on-click="changeFn()"
	true-value="'truthy'"
	false-value="0">
</custom-checkbox>
```

* Wraps input and custom checkbox in a label (supports text if provided via attribute)
* Generates faux checkbox as a `span` that can be styled accordingly
* `checked` class added to faux checkbox when `input` is checked
* Allows for additional labels external to directive template (via input `ID` if `for="ID"` is used)
* `ng-model` updates can be made dynamically via JavaScript
* Supports native `true` and `false` values as well as `ng-true-value` and `ng-false-value`
* Examples available in the `index.html` file
