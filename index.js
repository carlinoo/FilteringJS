"use strict";

// To export methods
module.exports = {

}

var operate = require('./src/operations');
var sf = require('./src/filter_string');

// Prototypes
Array.prototype.where = function(string) {
  var array = [];

  // Get all the operations separated by conjuctions
  var operations = sf.operations(string);

  // Format each operations so that it is readable
  for (var i = 0; i < operations.length; i++) {
    operations[i] = sf.operation_format(operations[i]);
  }

  // console.log(sf.string_format(1));

  var splits = operations[0];

  for (var i = 0; i < this.length; i++) {

    var symbol = splits[1];
    var variable = this[i][splits[0]];
    var literal = sf.string_format(splits[2]);

    // Conditionals
    if (operate[symbol](variable, literal)) {
      array.push(this[i]);
    }
  }

  return array;
};
