// SQL example
// 1 == 1 AND (2 == 3 OR 23 != 5) AND as == a
var operations = ['==', '<', '>', '<=', '>=', '!='];

module.exports = {

  // Replace all variables with what the variable is supposed to look like
  replace_variables: function(string, variable) {

    new_string = "";

    // Loop through the string, and if there is any brackets, put a space before and after
    for (var i = 0; i < string.length; i++) {
      if (string[i] == "(" || string[i] == ")") {
        new_string += " " + string[i] + " ";
      } else {
        new_string += string[i];
      }
    }


    var splits = new_string.split(" ");

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
