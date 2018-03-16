const a = require('./');
array = [
  {
    letter: 2,
    dog: 'cat'
  },
  {
    letter: 1,
    dog: 'donkey'
  },
  {
    letter: 4,
    dog: 'doggy'
  }
];

console.log(array.where("letter <= 1"));
