# Aurelia Plus

Aurelia Plus is a collection of common use case tools for use in Aurelia applications.

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Custom Elements](#custom-elements)
    - Upload
  - [Custom Attributes](#custom-attributes)
  - [Value Converters](#value-converters)
    - filter
    - sort
    - number
    - json
    - date/time
  - [View Engine Hooks](#view-engine-hooks)
  - [Binding Behaviors](#binding-behaviors)
    - Refresh
  - [Decorators](#decorators)
  - [Functions](#functions)

# Installation

# Usage

## Upload Custom Element

The native html `<input type="file" />` element looks like a button, but it has quirky behavior and doesn't behave like a normal button. The upload custom element adds an `<upload>` element that looks and behaves like a button, but opens file select dialog. 

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

Working examples: https://gist.run/?id=56155adb6abcb9cb8ef64f3e3138eb78

## filter
## sort
## number
## json
## date/time
## split

## Globals

This view engine hook adds the JavaScript globals `Array`, `Object`, `JSON`, `Date`, `Math`, `Number`, `RegExp`, and `Reflect` to the view, giving an development experience closer to a JavaScript console.

### Examples

```html
<require from="aurelia-plus/globals-view-engine-hooks></require>

<div repeat.for="key of Object.keys(obj1)">
  Obj1['${key}']: ${obj1[key]}
</div>
<div if.bind="!Reflect.has(obj1, 'three')">Three is missing!</div>
<pre>${JSON.stringify(obj2, null, 2)}</pre>
<div>${Date()}</div>
<div>${Reflect.construct(Date, ['2017']).toDateString()}</div>
<ul if.bind="Array.isArray(obj3)">
  <li repeat.for="item of obj3">${item}</li>
</ul>
<p>cos(π/2) = ${Math.cos(Math.PI / 2)} <span if.bind="Math.cos(Math.PI / 2) < Number.EPSILON">≅ 0</span></p>
<div if.bind="RegExp('good').test(obj4)">This is good.</div>
<div if.bind="!RegExp('bad').test(obj4)">This is also good.</div>
```

Working examples: https://gist.run/?id=040775f06aba5e955afd362ee60863aa

## Refresh Binding Behavior

This binding behavior forces the view to refresh. This is useful when you want to display data that Aurelia doesn't know how to observe, such as functions of arbitrary objects or non-configurable properties.

### Parameters

- **Refresh Rate** [Default: 100ms] 

Specifies how often the view should be refreshed.

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
