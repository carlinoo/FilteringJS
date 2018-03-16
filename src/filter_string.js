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

  number_operations: function(string) {
    return this.operations(string).length;
  }
}
