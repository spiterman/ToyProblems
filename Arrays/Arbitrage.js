/*
 * Complete the function below.
 */
function arbitrage(quotes) {
    //Step 1. Split quotes up into an array of arrays containing floats
    var arr = [];
    quotes.forEach((item) => {
       var lst = item.split(' ');
       lst.forEach((entry, index) => {
          lst[index] = Number(entry);
       });
       arr.push(lst);
    });
    //Step 2.
    var result = [];

    arr.forEach((item) => {
       var total = 100000;
       item.forEach((entry)=> total /= entry);
       if(total > 100000){
           result.push(Math.floor(total - 100000));
       } else {
           result.push(0);
       }
    });
    return result;
};
