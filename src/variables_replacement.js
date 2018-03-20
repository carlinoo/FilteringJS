// SQL example
// 1 == 1 AND (2 == 3 OR 23 != 5) AND as == a
var operations = ['==', '<', '>', '<=', '>=', '!='];

module.exports = {

  // Replace all variables with what the variable is supposed to look like
  replace_variables: function(string, variable) {
    var splits = string.split(" ");

    // replace all variables with the variables
    // A variable is found if the next in the splits is an operation
    for (var i = 0; i < splits.length; i++) {
      if (operations.includes(splits[i])) {
        splits[i - 1] = variable + "." + splits[i - 1];
      }
    }

    string = splits.join(" ");

    return string;
  }
}
