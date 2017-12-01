# Aurelia Plus

Aurelia Plus is a collection of common use case tools for use in Aurelia applications.

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Upload Custom Element](#upload-custom-element)
  - [Type="number" Custom Attribute](#typenumber-custom-attribute)
  - [Filter Value Converter](#filter-value-converter)
  - [Number Value Converter](#number-value-converter)
  - [Json Value Converter](#json-value-converter)
  - [Date/Time Value Converters](#date/time-value-converters)
  - [Split Value Converter](#split-value-converter)
  - [JavaScript Globals](#javascript-globals)
  - [Refresh Binding Behavior](#refresh-binding-behavior)

# Installation

## JSPM

```console
jspm install aurelia-plus
```

# Usage

To begin using Aurelia Plus, load the plugin in your Aurelia's main file.

```javascript
export function configure(aurelia) {
  aurelia
    .standardConfiguration()
    .use('aurelia-plus');
}
```

If you'd rather only include specific components, you can instead require those specific components individually.

```html
<require from="aurelia-plus/upload-custom-element"></require>

<upload file.bind="file">Upload</upload>
```

You can also select specific components to globalize.

```javascript
export function configure(aurelia) {
  aurelia.globalResources([
    'aurelia-plus/upload-custom-element',
    'aurelia-plus/filter-value-converter'
  ]);
}
```

The module name for each component is listed below.

## Upload Custom Element 

**Module Name**: *aurelia-plus/upload-custom-element*

The native html `<input type="file" />` element looks like a button, but it has quirky behavior and doesn't behave like a normal button. The upload custom element adds an `<upload>` element that looks and behaves like a button and opens file select dialog. 

### Bindings

- **file** [Default: two-way] The selected file.

### Examples 

```html
<upload file.bind="file1">Upload</upload>
<upload class="btn ${file2 ? 'btn-success' : 'btn-primary'}" style="margin-left: 4px;" file.bind="file2">Upload</upload>
<upload file.bind="file3">Upload</upload><span if.bind="file3"> ${file3.name} selected</span>
```

Working examples: https://gist.run/?id=5c37d792a85129617d312993c37fe6fd

## Type="number" Custom Attribute

**Module Name**: *aurelia-plus/type-custom-attribute*

The type custom attribute will automatically return JavaScript number values from HTML type="number" inputs.

### Examples

```html
<input type="number" value.bind="value" />
```

Working examples: https://gist.run/?id=56155adb6abcb9cb8ef64f3e3138eb78

## Filter Value Converter

**Module Name**: *aurelia-plus/filter-value-converter*

The filter value converter provides a number of powerful tools for filtering arrays covering many common use cases.

### Parameters 

- **value (any | any[])** [Required] The value or values to filter with.
- **on (string | string[])** [Default: `this`] Property or properties to filter on. If no property is given, the filter is performed on the object itself.
- **strict (boolean)** [Default: false] Specifies whether all values passed to `value` must match. The default behavior is to find any matches.
- **mode (string | function)** [Default: 'contains'] Specifies what function to use when filtering. Any of the following predefined filters can be referenced by key, or a (value, item) => boolean function can be passed:

  - 'exact': Matches identical strings, ignoring casing.
  - 'startsWith': Matches strings starting with the search term, ignoring casing.
  - 'endsWith': Matches strings ending with the search term, ignoring casing.
  - 'contains': Matches strings containing the search term, ignoring casing.
  - '>=': Matches properties that evaluate to >= searchTerm in JavaScript.
  - '>': Matches properties that evaluate to > searchTerm in JavaScript.
  - '<=': Matches properties that evaluate to <= searchTerm in JavaScript.
  - '<': Matches properties that evaluate to < searchTerm in JavaScript.
  - '==': Matches properties that evaluate to == searchTerm in JavaScript.
  - (value, item) => boolean: If a function is passed, then it is applied to the value and each item. If it returns true the item is considered a match.

Full documentation: https://github.com/Foursails/bouncer/blob/master/README.md

### Examples

```html
<input type="search" value.bind="title" />
<ul><li repeat.for="game of games | filter: { on: 'title', value: title }">${game.title}/li><ul>

<input type="search" value.bind="name" />
<input type="checkbox" checked.bind="party" value="Republican" />Republican
<input type="checkbox" checked.bind="party" value="Democrat" />Democrat
<input type="date" value.bind="from" />
<ul>
  <li repeat.for="president of presidents 
      | filter: { on: ['first', 'last'], value: name } 
      | filter: { on: 'party', value: party }
      | filter: { on: 'start', value: from, mode: '>='">
    ${president.first} ${president.last}
  </li>
</ul>
```

Working examples: https://gist.run/?id=17fa796603b79c4904d5535a74ea5a76

## Number Value Converter

**Module Name**: *aurelia-plus/number-value-converter*

The number value converter returns a JavaScript number from an input. This is identical to the behavior of the type custom attribute but in the form of a value converter.

### Examples

```html
<require from="aurelia-plus/number-value-converter"></require>

<input value.bind="value | number" />
```

Working examples: https://gist.run/?id=56155adb6abcb9cb8ef64f3e3138eb78

## JSON Value Converter

**Module Name**: *aurelia-plus/json-value-converter*

The JSON value converter converts a value into JSON.

### Parameters

- **Pretty (boolean)** [Default: false] Whether or not to prettify the JSON.

## Date/Time Value Converters

**Module Name**: *aurelia-plus/date-time-value-converter*

The date/time value converters attempt to parse a value as a Date and return a locale string.

### Converters

- **DateValueConverter** Calls `.toLocaleDateString()`.

- **TimeValueConverter** Calls `.toLocaleTimeString()`.

- **DateTimeValueConverter** Calls `.toLocaleString()`.

### Examples

```html
<input type="datetime-local" value.bind="date" />
date: ${date | date} <!-- 12/1/2017 -->
time: ${date | time} <!-- 1:58:34 PM -->
dateTime: ${date | dateTime} <!-- 12/1/2017, 1:58:34 PM -->
```

Working examples: https://gist.github.com/davismj/c500e3050c2faecfcf15515a8dc262c5

## Split Value Converter

**Module Name**: *aurelia-plus/split-value-converter*

The split value converter is a two way value converter that splits text from the view into an array in the view-model and joins an array from the view-model back into a string in the view. This is particularly useful for searching where you may want tokenize an input.

### Parameters

- **Token (string)** [Default: ' '] String to split the string by.

### Examples 

```html
<input type="search" value.bind="searches1 | split" />
<input type="search" value.bind="searches2 | split: ' OR '" />
```

Working examples: https://gist.run/?id=a3f771707b53d4386bff11f17c4d589d

## JavaScript Globals

**Module Name**: *aurelia-plus/globals-view-engine-hooks*

This view engine hook adds the JavaScript globals `Array`, `Object`, `JSON`, `Date`, `Math`, `Number`, `RegExp`, and `Reflect` to the view giving an development experience closer to a JavaScript console.

### Examples

```html
<require from="aurelia-plus/globals-view-engine-hooks"></require>

<div repeat.for="key of Object.keys(obj1)"></div>
<div if.bind="!Reflect.has(obj1, 'three')">Three is missing!</div>
<pre>${JSON.stringify(obj2, null, 2)}</pre>
<ul if.bind="Array.isArray(obj3)">
  <li repeat.for="item of obj3">${item}</li>
</ul>
<p>cos(π/2) = ${Math.cos(Math.PI / 2)} <span if.bind="Math.cos(Math.PI / 2) < Number.EPSILON">≅ 0</span></p>
<div if.bind="RegExp('good').test(obj4)">Success!</div>
```

Working examples: https://gist.run/?id=040775f06aba5e955afd362ee60863aa

## Refresh Binding Behavior

**Module Name**: *aurelia-plus/refresh-binding-behavior*

This binding behavior forces the view to refresh. This is useful when you want to display data that Aurelia doesn't know how to observe, such as functions of arbitrary objects or non-configurable properties.

### Parameters

- **Refresh Rate (number)** [Default: 100] Specifies how often the view should be refreshed in ms.

### Examples

```html
<require from="aurelia-plus/refresh-binding-behavior"></require>

<div>
  <b>60 fps</b>
  <pre>${JSON.stringify(rapidlyChangingObject) & refresh: 16}</pre>
</div>
<div>
  <b>10 fps (default):</b>
  <pre>${JSON.stringify(normalObject) & refresh}</pre>
</div>
<div>
  <b>5 fps:</b>
  <pre>${JSON.stringify(extremelyLargeObject) & refresh:1000}</pre>
</div> 
```

Working examples: https://gist.run/?id=91c1f815f3df0ca78356a23facc769b2
