function sayHello() {
  console.log('Hello, World');
}

sayHello();

//Time/Space:
//In:
//Out: Number of days
// [1, 15, 2016][2, 15, 2016]

function calculateDays(date1, date2){
  //Start with years
    //if years differ, then add 365 to total for each year
    //in between
    //if the same, or once we're on the same year
      //Do the same for the months
    //Finally do the same for the days

    //Edge case:
      //if year divisible by 4, then total number of days is 366
    //and february has 29 days
  //Also need a check for which date is the one in the future
  var months = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  }

  var year1 = date1[2];
  var year2 = date2[2];

  var result = 0;

  while(year1 < year2){
    if(year1 % 4 === 0){
     result += 366;
     year1++;
    } else {
     result += 365;
     year1++;
    }
  }
  // console.log('check1');
  // year1 =  2017
  // result = 366;
  console.log(result);

  if(year2 % 4 === 0){
    months[2] = 29;
  }

  var month1 = date1[0];
  var month2 = date2[0];

  if(month2 > month1){
    while(month1 < month2){
      result += months[month1];
      month1++;
    }
  } else {
    while(month1 > month2){
      result -= months[month2];
      month2++;
    }
  }
  //month1 = 2;
  //result 397;


  var day1 = date1[1];
  var day2 = date2[1];

  result += (day2 - day1);

  //result 398;
  return result;
}

// console.log(calculateDays([3, 15, 2016], [1, 15, 2017]));

// 3/15/2016 -> 3/15/2017

// 1/15/2017 -> 3/15/2017

// 1/1/2016 -> 3/14/2016
