// To export methods
// Object with functions to do operations read as a string
module.exports = {
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
  },

  '!=': function(i, j) {
    return i != j;
  }
}
