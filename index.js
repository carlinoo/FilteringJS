"use strict";

// To export methods
module.exports = {

}

var operate = require('./src/operations');
var strings_filter = require('./src/filter_string');

// Prototypes
Array.prototype.where = function(string) {
  var array = [];

  // Get all the operations separated by conjuctions
  var operations = strings_filter.operations(string);

  // Format each operations so that it is readable
  for (var i = 0; i < operations.length; i++) {
    operations[i] = strings_filter.operation_format(operations[i]);
  }

  var splits = operations;
  console.log(splits);

  for (var i = 0; i < this.length; i++) {
    if (operate[splits[1]](this[i][splits[0]], splits[2])) {
      array.push(this[i]);
    }
  }

  return array;
};
