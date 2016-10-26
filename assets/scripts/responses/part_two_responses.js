function sumsArray(data){
  if (Array.isArray(data)) {
    var total = 0;
    for (var i = data.length - 1; i > -1; i--) {
      total += data[i];
    }
    return total;
  }
}

function fizzBuzz(num) {
  var str = '';
  for (var i = 0; i <= num; i++) {
    if ((i % 15 === 0) && (i !== 0)) {
      str += 'fizzBuzz!';
    }
    else if ((i % 3 === 0) && (i !== 0)) {
      str += 'fizz';
    }
    else if ((i % 5 === 0) && (i !== 0)) {
      str += 'buzz';
    }
    else {
      str += i;
    }
  }
  return str;
}
