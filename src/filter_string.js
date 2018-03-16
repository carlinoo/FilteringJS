var operations = {
  simple: ['<=', '>=', '==', '!='],
  complex: ['=', '<', '>']
}

var conjuctions = ['&&', '||', 'AND', 'OR', 'and', 'or'];


module.exports = {

  // This method will return an array of separated operations depending of the conjuctions
  operations: function(string) {
    var str = string.split(' ');
    var ops = [];
    var count = 0;
    ops[count] = [];

    // loop through all the splits and check if the contain a conjuction
    for (var i = 0; i < str.length; i++) {
      if (conjuctions.includes(str[i])) {
        ops[count] = ops[count].join(' ');
        count++;
        ops[count] = [];
      } else {
        ops[count].push(str[i]);
      }
    }

    ops[count] = ops[count].join(' ');

    return ops;
  },


  // This method will return the number of operations on a string
  number_operations: function(string) {
    return this.operations(string).length;
  },




  // This method will format a string so is readable
  string_format: function(string) {
    return string.split(/[\s'\s"]/).join('');
  },



  // This method will format an operation to make it readable
  operation_format: function(string) {
    splits = string.split(" ");

    // TODO add logic

  }
}
