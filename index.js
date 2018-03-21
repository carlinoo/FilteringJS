"use strict";

// To export methods
module.exports = {

}

var operate = require('./src/operations');
var sf = require('./src/filter_string');
var vr = require('./src/variables_replacement');

// Prototypes
Array.prototype.where = function(string) {
  var array = [];

  // Replace AND and OR to && and ||
  string = sf.replace_symbols(string);

  string = vr.replace_variables(string, "this[i]");
  
  for (var i = 0; i < this.length; i++) {

    // var symbol = splits[1];
    // var variable = sf.stringify(this[i][splits[0]]);
    // var literal = sf.stringify(sf.string_format(splits[2]));

    // Conditionals
    // if (eval(variable + " " + symbol + " " + literal)) {
    if (eval(string)) {
      array.push(this[i]);
    }
  }

  return array;
};
