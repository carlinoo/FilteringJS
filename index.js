"use strict";

// To export methods
module.exports = {

}


// Object with functions to do operations read as a string
var operate = {
  '>': function(i, j) {
    return i > j;
  },

  '<': function(i, j) {
    return i < j;
  },

  '<=': function(i, j) {
    return i <= j;
  },

  '>=': function(i, j) {
    return i >= j;
  },

  '==': function(i, j) {
    return i == j;
  },

  '=': function(i, j) {
    return i == j;
  },

  '===': function(i, j) {
    return i === j;
  }
}


// Prototypes
Array.prototype.where = function(string) {
  var array = [];

  var splits = string.split(' ');

  for (var i = 0; i < this.length; i++) {
    if (operate[splits[1]](this[i][splits[0]], splits[2])) {
      array.push(this[i]);
    }
  }

  return array;
};
