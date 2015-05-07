# ready.js
Takes the pain out of writing conditional initialisation code.

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
