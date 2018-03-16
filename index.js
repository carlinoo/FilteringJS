"use strict";

// To export methods
module.exports = {

}

var operate = require('./src/operations');
var strings_filter = require('./src/filter_string');

// Prototypes
Array.prototype.where = function(string) {
  var array = [];

  var splits = string.split(' ');

  console.log(strings_filter.operations(string));

  for (var i = 0; i < this.length; i++) {
    if (operate[splits[1]](this[i][splits[0]], splits[2])) {
      array.push(this[i]);
    }
  }

  return array;
};
