function newDate(month, day, year){
  this.month = month;
  this.day = day;
  this.year = year;
};

var d1 = new newDate(08, 14, 1991);
var d2 = new newDate(10, 13, 2016);

function difference(d1, d2){
  var years = d2.year - d1.year;
  var day = d2.day - d1.day;
  var month = d2.month - d1.month;

  return years;
};

console.log(difference(d1, d2));
