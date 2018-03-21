# FilteringJS

### Description
FilteringJS is a **node** package to be able to filter javascript arrays as if they where SQL statements. FilteringJS is only on a beta version, so many cool features are being developed at the moment.

### Installation
Assuming you have **npm** installed and that you have initiated a **npm** project, you need to:
```
npm install filtering_js
```

After that, you can start using it!

### Usage
First of all you need to require the package:
``` javascript
var filteringJS = require("filtering_js");
```

Now, imagine we have two arrays like the following:

``` javascript
var array = [
  {
    number: 1,
    letter: 'a',
    obj: {
      hello: "z"
    }
  },
  {
    number: 2,
    letter: 'b',
    obj: {
      hello: "y"
    }
  },
  {
    number: 3,
    letter: 'c',
    obj: {
      hello: "x"
    }
  }
];

var numbers = [1, 2, 3, 4, 5, 6];

```

After this, you can apply cool fancy statements to your it such as:
``` javascript
var filtered = array.where("number == 1");

// filtered = [ { number: 1, letter: 'a', obj: { hello: 'z' } }

var filtered = array.where("number >= 1 AND letter == 'b'");

// filtered = [ { number: 2, letter: 'b', obj: { hello: 'y' } } ]

var filtered = array.where("number == 1 OR obj.hello == 'z'");

// filtered = [ { number: 1, letter: 'a', obj: { hello: 'z' } } ]

var filtered = array.where("number == 1 OR (letter == 'b')");

// filtered = [ { number: 1, letter: 'a', obj: { hello: 'z' } }, { number: 2, letter: 'b', obj: { hello: 'y' } } ]

var filtered = numbers.where("this > 2");

//filtered = [ 3, 4, 5, 6 ]

```

As you can see, you can apply very cool, nested conditions. This simple/light package will save you tons of time!
