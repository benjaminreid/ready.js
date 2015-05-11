# ready.js
Takes the pain out of writing conditional initialisation code.

## Contents
* [Installation](#installation)
* [What does ready.js do?](#what-does-readyjs-do)
* [Coming soon](#coming-soon)
* [TL;DR](#tldr)

## Installation

### Bower

`ready.js` is available as a Bower package and can be installed with the following command.

```
bower install --save ready.js
```

If you're using [ck86/main-bower-files](https://github.com/ck86/main-bower-files) to automatically load in packages from Bower in your build process, that's covered too.

### Manually

You can also install `ready.js` manually by grabbing the contents of `dist/ready.js` or `dist/ready.min.js` and including them above your main JavaScript file in your page. It has no dependencies so as long as it's loaded before your first `ready` call, you're good to go. 

```
<script src="/path/to/ready.js"><script>
<script src="/path/to/main.js"></script>
```

### CDNJS

`ready.js` is also available cdnjs, [grab it here](https://cdnjs.com/libraries/ready.js).

## What does ready.js do?

`ready.js` gives you a simple way to ~~pretty~~ DRY up your initialisation code. Take this piece of code for example.

```
var foo  = document.getElementById('foo');
var bar  = document.getElementById('foo');
var bazs = document.getElementsByClassName('bazs');

if (foo.length > 0) {
  // do something with foo
}

if (bar.length > 0) {
  // do something with bar
}

if (bazs.length > 0) {
  for(var i = 0; i < bazs.length; i++) {
    var baz = elements[i];
    // do something with baz
  }
}
```

This is a fairly common pattern to see, you attempt to grab an element from the DOM and then do something with it if it exists. `ready.js` removes this boilerplate code you write each time you want to do this.

```
ready('#foo', function(foo) {
  // do something with foo
});

ready('#bar', function(bar) {
  // do something with bar
});

ready('.bazs', function(baz) {
  // do something with baz
});
```

`ready.js` will get the DOM elements for you, check if they exist, and if so, fire your initialisation code in it's callback. It can handle a single element or a collection of elements too.

## Coming soon

Please check the [v1.0 release](https://github.com/nouveller/ready.js/milestones/v1.0%20release) milestone for things to come.

## TL;DR

When you're not using `ready.js`.

![Not ready](https://cloud.githubusercontent.com/assets/713128/7526823/5a376a48-f50d-11e4-90c2-3e41c1849aef.gif)
