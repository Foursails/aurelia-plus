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

# installation

# usage

## Upload: https://gist.run/?id=5c37d792a85129617d312993c37fe6fd

## type="number": https://gist.run/?id=56155adb6abcb9cb8ef64f3e3138eb78

## filter
## sort
## number
## json
## date/time
## split

## JavaScript Globals (View Engine Hooks)

This view engine hook adds the JavaScript globals `Array`, `Object`, `JSON`, `Date`, `Math`, `Number`, `RegExp`, and `Reflect` to the view, giving an development experience closer to a JavaScript console.

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

Working example: https://gist.run/?id=040775f06aba5e955afd362ee60863aa

## refresh: https://gist.run/?id=91c1f815f3df0ca78356a23facc769b2

? log

? event dispatch

TODO:
- configure for jspm
- set dist as default folder to load from (?)
