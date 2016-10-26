// Objects
var yoda = {
  species: 'Green swamp monster',
  affiliation: 'Jedi Order Galactic Republic',
  occupation: 'Jedi Grand Master of the Order Jedi Master of the High Council',
  forceUser: true,
  lightSide: true,
  darkSide: false
};

var yodaTitle = 'Yoda ' + yoda.occupation;

// arrays
var zeroToTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numsAsWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

// beast mode
function addsToObject(obj, key, val) {
  obj[key] = val;
  return obj;
}

var isOdd = function (number) {
  return number % 2 !== 0;
};

function objectFromArrays(listOne, listTwo) {
  var strings;
  var nums;

  if (typeof listOne[0] === 'string') {
    strings = listOne;
    nums = listTwo;
  }
  else {
    strings = listTwo;
    nums = listOne;
  }

  var obj = {};

  for (var i = 0; i < strings.length; i++) {
    obj[strings[i]] = nums[i];
  }

  return obj;
};

var myMap = function(list, func) {
  var newArr = [];

  for (var i = 0; i < list.length; i++) {
    newArr.push(func(list[i]));
  }

  return newArr;
}

function myFilter(list, func) {
  var finalArr = [];
  for (var i = 0; i < list.length; i++) {
    if (func(list[i])) { // same as if (func(list[i]) === true)
      finalArr.push(list[i]);
    }
  }
  return finalArr;
}