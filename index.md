---
layout: default
---
# Contents

- [Upload Custom Element](#upload-custom-element)
- [Number Value Converter](#number-value-converter)
- [Type="number" Custom Attribute](#typenumber-custom-attribute)
- [Date/Time Value Converters](#datetime-value-converters)
- [Filter Value Converter](#filter-value-converter)
- [JSON Value Converter](#json-value-converter)
- [Split Value Converter](#split-value-converter)
- [JavaScript Globals](#javascript-globals)
- [Refresh Binding Behavior](#refresh-binding-behavior)

# Licensing

If you're using AU+ in a successful commercial application, please purchase a license for $25.

# Installation

## JSPM

```console
jspm install aurelia-plus
```

## Webpack

```console
npm install aurelia-plus --save
```

## CLI
```console
au install aurelia-plus
```

# Usage

To begin using AU+, load the plugin in your Aurelia's main file.

```javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-plus');
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

**file** *(two-way)*: The selected file.

### Examples 

<section>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link ${!uploadSelectedTab ? 'active' : ''}" click.trigger="uploadSelectedTab = 0">Preview</a>
    </li>
    <li class="nav-item">
      <a class="nav-link ${uploadSelectedTab === 1 ? 'active' : ''}" click.trigger="uploadSelectedTab = 1">HTML</a>
    </li>
  </ul>
  <div class="tab-content">
    <div class="demo" show.bind="!uploadSelectedTab">
      <compose view="examples/upload.html"></compose>
    </div>
    <div show.bind="uploadSelectedTab === 1">
      {% capture upload-html %}{% include_relative examples/upload.html %}{% endcapture %}
      {% highlight html %}{{ upload-html | replace: "${", "\${" }}{% endhighlight %}
    </div>
  </div>
</section>

## Number Value Converter

**Module Name**: *aurelia-plus/number-value-converter*

By default, the browser stores all input values as text, and so that's what Aurelia passes back to your view model. The number value converter converts the value to a number for you using the browser's `parseFloat()` implementation. If no number can be parsed, then the raw value is returned as a string.

### Examples

<section>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a href="#" class="nav-link ${!numberSelectedTab ? 'active' : ''}" click.trigger="numberSelectedTab = 0">Preview</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link ${numberSelectedTab === 1 ? 'active' : ''}" click.trigger="numberSelectedTab = 1">HTML</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link ${numberSelectedTab === 2 ? 'active' : ''}" click.trigger="numberSelectedTab = 2">JavaScript</a>
    </li>
  </ul>
  <div class="tab-content">
    <div class="demo" show.bind="!numberSelectedTab">
      <compose view-model="examples/number"></compose>
    </div>
    <div show.bind="numberSelectedTab === 1">
      {% capture number-html %}{% include_relative examples/number.html %}{% endcapture %}
      {% highlight html %}{{ number-html | replace: "${", "\${" }}{% endhighlight %}
    </div>
    <div show.bind="numberSelectedTab === 2">
      {% highlight javascript %}{% include_relative examples/number.js %}{% endhighlight %}
    </div>
  </div>
</section>

## Type="number" Custom Attribute

**Module Name**: *aurelia-plus/type-custom-attribute*

Whenever you're using `<input type="number" />`, you're likely going to want to parse the value as a number, right? Aurelia+ does this for you.

### Examples

<section>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a href="#" class="nav-link ${!number2SelectedTab ? 'active' : ''}" click.trigger="number2SelectedTab = 0">Preview</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link ${number2SelectedTab === 1 ? 'active' : ''}" click.trigger="number2SelectedTab = 1">HTML</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link ${number2SelectedTab === 2 ? 'active' : ''}" click.trigger="number2SelectedTab = 2">JavaScript</a>
    </li>
  </ul>
  <div class="tab-content">
    <div class="demo" show.bind="!number2SelectedTab">
      <compose view-model="examples/number2"></compose>
    </div>
    <div show.bind="number2SelectedTab === 1">
      {% capture number2-html %}{% include_relative examples/number2.html %}{% endcapture %}
      {% highlight html %}{{ number2-html | replace: "${", "\${" }}{% endhighlight %}
    </div>
    <div show.bind="number2SelectedTab === 2">
      {% highlight javascript %}{% include_relative examples/number2.js %}{% endhighlight %}
    </div>
  </div>
</section>

## Date/Time Value Converters

**Module Name**: *aurelia-plus/date-time-value-converter*

The date/time value converters render JavaScript `Date` objects in your view using the `toLocaleString()` methods.

### Converters

- **DateValueConverter** Calls `.toLocaleDateString()`.

- **TimeValueConverter** Calls `.toLocaleTimeString()`.

- **DateTimeValueConverter** Calls `.toLocaleString()`.

### Examples

<section>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a href="#" class="nav-link ${!dateSelectedTab ? 'active' : ''}" click.trigger="dateSelectedTab = 0">Preview</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link ${dateSelectedTab === 1 ? 'active' : ''}" click.trigger="dateSelectedTab = 1">HTML</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link ${dateSelectedTab === 2 ? 'active' : ''}" click.trigger="dateSelectedTab = 2">JavaScript</a>
    </li>
  </ul>
  <div class="tab-content">
    <div class="demo" show.bind="!dateSelectedTab">
      <compose view-model="examples/date"></compose>
    </div>
    <div show.bind="dateSelectedTab === 1">
      {% capture date-html %}{% include_relative examples/date.html %}{% endcapture %}
      {% highlight html %}{{ date-html | replace: "${", "\${" }}{% endhighlight %}
    </div>
    <div show.bind="dateSelectedTab === 2">
      {% highlight javascript %}{% include_relative examples/date.js %}{% endhighlight %}
    </div>
  </div>
</section>

## Filter Value Converter

**Module Name**: *aurelia-plus/filter-value-converter*

Based on the [Bouncer](https://github.com/Foursails/bouncer) library, the filter value converter provides a number of powerful tools for filtering arrays covering many common use cases.

### Parameters 

- **value (any &#124; any[])** [Required] The value or values to filter with.
- **on (string &#124; string[])** [Default: `this`] Property or properties to filter on. If no property is given, the filter is performed on the object itself.
- **strict (boolean)** [Default: false] Specifies whether all values passed to `value` must match. The default behavior is to find any matches.
- **mode (string &#124; function)** [Default: 'contains'] Specifies what function to use when filtering. Any of the following predefined filters can be referenced by key, or a (value, item) => boolean function can be passed:
  - `exact`: Matches identical strings, ignoring casing.
  - `startsWith`: Matches strings starting with the search term, ignoring casing.
  - `endsWith`: Matches strings ending with the search term, ignoring casing.
  - `contains`: Matches strings containing the search term, ignoring casing.
  - `>=`: Matches properties that evaluate to >= searchTerm in JavaScript.
  - `>`: Matches properties that evaluate to > searchTerm in JavaScript.
  - `<=`: Matches properties that evaluate to <= searchTerm in JavaScript.
  - `<`: Matches properties that evaluate to < searchTerm in JavaScript.
  - `==`: Matches properties that evaluate to == searchTerm in JavaScript.
  - `(value, item) => boolean`: If a function is passed, then it is applied to the value and each item. If it returns true the item is considered a match.

Full documentation: https://github.com/Foursails/bouncer/blob/master/README.md

### Examples

<section>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a href="#" class="nav-link ${!filterSelectedTab ? 'active' : ''}" click.trigger="filterSelectedTab = 0">Preview</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link ${filterSelectedTab === 1 ? 'active' : ''}" click.trigger="filterSelectedTab = 1">HTML</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link ${filterSelectedTab === 2 ? 'active' : ''}" click.trigger="filterSelectedTab = 2">JavaScript</a>
    </li>
  </ul>
  <div class="tab-content">
    <div class="demo" show.bind="!filterSelectedTab">
      <compose view-model="examples/filter"></compose>
    </div>
    <div show.bind="filterSelectedTab === 1">
      <pre>
        {% capture filter-html %}{% include_relative examples/filter.html %}{% endcapture %}}
        {% highlight html %}{{ filter-html | replace: "${", "\${" }}{% endhighlight %}
    </pre>
    </div>
    <div show.bind="filterSelectedTab === 2">
      {% highlight javascript %}{% include_relative examples/filter.js %}{% endhighlight %}
    </div>
  </div>
</section>

## JSON Value Converter

**Module Name**: *aurelia-plus/json-value-converter*

The JSON value converter wraps the `JSON.stringify` function to render an object as JSON in the view.

### Parameters

- **Pretty (boolean)** [Default: false] Whether or not to prettify the JSON.

### Examples 

<section>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a href="#" class="nav-link ${!jsonSelectedTab ? 'active' : ''}" click.trigger="jsonSelectedTab = 0">Preview</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link ${jsonSelectedTab === 1 ? 'active' : ''}" click.trigger="jsonSelectedTab = 1">HTML</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link ${jsonSelectedTab === 2 ? 'active' : ''}" click.trigger="jsonSelectedTab = 2">JavaScript</a>
    </li>
  </ul>
  <div class="tab-content">
    <div class="demo" show.bind="!jsonSelectedTab">
      <compose view-model="examples/json"></compose>
    </div>
    <div show.bind="jsonSelectedTab === 1">
      {% capture json-html %}{% include_relative examples/json.html %}{% endcapture %}
      {% highlight html %}{{ json-html | replace: "${", "\${" }}{% endhighlight %}
    </div>
    <div show.bind="jsonSelectedTab === 2">
      {% highlight javascript %}{% include_relative examples/json.js %}{% endhighlight %}
    </div>
  </div>
</section>

## Split Value Converter

**Module Name**: *aurelia-plus/split-value-converter*

The split value converter is a two way value converter that splits text from the view into an array in the view-model and joins an array from the view-model back into a string in the view. This is particularly useful for a search input where you may want tokenize the input.

### Parameters

- **Token (string)** [Default: ' '] String to split the string by.

### Examples 

<section>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a href="#" class="nav-link ${!splitSelectedTab ? 'active' : ''}" click.trigger="splitSelectedTab = 0">Preview</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link ${splitSelectedTab === 1 ? 'active' : ''}" click.trigger="splitSelectedTab = 1">HTML</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link ${splitSelectedTab === 2 ? 'active' : ''}" click.trigger="splitSelectedTab = 2">JavaScript</a>
    </li>
  </ul>
  <div class="tab-content">
    <div class="demo" show.bind="!splitSelectedTab">
      <compose view-model="examples/split"></compose>
    </div>
    <div show.bind="splitSelectedTab === 1">
      {% capture split-html %}{% include_relative examples/split.html %}{% endcapture %}
      {% highlight html %}{{ split-html | replace: "${", "\${" }}{% endhighlight %}
    </div>
    <div show.bind="splitSelectedTab === 2">
      {% highlight javascript %}{% include_relative examples/split.js %}{% endhighlight %}
    </div>
  </div>
</section>

## JavaScript Globals

**Module Name**: *aurelia-plus/globals-view-engine-hooks*

Have you ever found yourself trying to `JSON.stringify` in your view? AU+ adds the JavaScript globals `Array`, `Object`, `JSON`, `Date`, `Math`, `Number`, `RegExp`, and `Reflect` to the view, providing you with more of the tools you'd expect from JavaScript directly in the view.

### Examples

<section>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a href="#" class="nav-link ${!globalsSelectedTab ? 'active' : ''}" click.trigger="globalsSelectedTab = 0">Preview</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link ${globalsSelectedTab === 1 ? 'active' : ''}" click.trigger="globalsSelectedTab = 1">HTML</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link ${globalsSelectedTab === 2 ? 'active' : ''}" click.trigger="globalsSelectedTab = 2">JavaScript</a>
    </li>
  </ul>
  <div class="tab-content">
    <div class="demo" show.bind="!globalsSelectedTab">
      <compose view-model="examples/globals"></compose>
    </div>
    <div show.bind="globalsSelectedTab === 1">
      {% capture globals-html %}{% include_relative examples/globals.html %}{% endcapture %}
      {% highlight html %}{{ globals-html | replace: "${", "\${" }}{% endhighlight %}
    </div>
    <div show.bind="globalsSelectedTab === 2">
      {% highlight javascript %}{% include_relative examples/globals.js %}{% endhighlight %}
    </div>
  </div>
</section>

## Refresh Binding Behavior

**Module Name**: *aurelia-plus/refresh-binding-behavior*

The refresh binding behavior adds the ability to declaratively specify "dirty-checking" style observation. This is useful when you want to display data that Aurelia doesn't know how to observe, such as functions of arbitrary objects or non-configurable properties.

### Parameters

- **Refresh Rate (number)** [Default: 100] Specifies how often the view should be refreshed in ms.

### Examples

<section>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a href="#" class="nav-link ${!refreshSelectedTab ? 'active' : ''}" click.trigger="refreshSelectedTab = 0">Preview</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link ${refreshSelectedTab === 1 ? 'active' : ''}" click.trigger="refreshSelectedTab = 1">HTML</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link ${refreshSelectedTab === 2 ? 'active' : ''}" click.trigger="refreshSelectedTab = 2">JavaScript</a>
    </li>
  </ul>
  <div class="tab-content">
    <div class="demo" show.bind="!refreshSelectedTab">
      <compose view-model="examples/refresh"></compose>
    </div>
    <div show.bind="refreshSelectedTab === 1">
      {% capture refresh-html %}{% include_relative examples/refresh.html %}{% endcapture %}
      {% highlight html %}{{ refresh-html | replace: "${$", "\${$" }}{% endhighlight %}
    </div>
    <div show.bind="refreshSelectedTab === 2">
      {% highlight javascript %}{% include_relative examples/refresh.js %}{% endhighlight %}
    </div>
  </div>
</section>
