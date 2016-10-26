var yoda = {
  species: 'Green swamp monster',
  affiliation: 'Jedi Order Galactic Republic',
  occupation: 'Jedi Grand Master of the Order Jedi Master of the High Council',
  forceUser: true,
  lightSide: true,
  darkSide: false
};

var yodaTitle = 'Yoda ' + yoda.occupation;

function addsToObject(obj, key, val) {
  obj[key] = val;
  return obj;
}