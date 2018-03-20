const a = require('./');
array = [
  {
    letter: 2,
    dog: 'cat',
    obj: {
      meme: true
    }
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

console.log(array.where("dog == 'doggy' OR (dog == 'cat' AND obj.meme == true)"));

// console.log(array.where("dog != doggy"));
