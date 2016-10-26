var thisYear = 2016;
var thisMonth = 10;
var dividedBy = thisYear / thisMonth;
var remainder = 279 % 7;
var eightteenSquared = 18 * 18;
var fakeStreet = '123 Market Street';
var thisCity = 'San Francisco';
var thisState = 'California';
var fakeAddress = fakeStreet + ' ' + thisCity + ', ' + thisState;
function greet(){
  return 'Hello World!';
};

function greetName(name) {
  return 'Hello ' + name;
}

var longestString = function(string1, string2) {
  if (string1 !== undefined && string2 !== undefined) {
    console.log(string1, string2);
    if (string1.length > string2.length) {
      return string1;
    }
    else if (string2.length > string1.length) {
      return string2;
    }
    else {
      return 'Equal';
    }
  } else console.log("meh'")
}

var sum = function(x, y) {
  return x + y;
}