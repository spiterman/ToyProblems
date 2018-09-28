//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha chai sinon sinon-chai moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

// function power(base, exponent){

//     //Step 1: Local Variables
//     var result = 1;

//     //Step 3: Define Helper Function

//     function multiply(count){
//         //Step 5: Base Case
//         if(count === exponent){
//             return;
//         }
//         //Step 6: Recursive Case
//         else {
//             result *= base;
//             multiply(count + 1);
//         }
//     }

//     //Step 4: Invoke Helper Function
//     multiply(0);


//     //Step 2: Return Local Variables
//     return result;

// }



function fib(n){
    if( n === 0 || n === 1){
        return 1;
    }
    return fib(n - 1) + fib( n - 2);
}

function power(base, exponent){

    //Step 1: Local Variables
    // var result = 1;

    //Step 3: Define Helper Function

    function multiply(count, result){
        //Step 5: Base Case
        if(count === exponent){
            return result;
        }
        //Step 6: Recursive Case
        else {
            // result *= base;
            return multiply(count + 1, result * base);
        }
    }

    //Step 4: Invoke Helper Function
    return multiply(0, 1);


    // //Step 2: Return Local Variables
    // return result;

}

console.log(power(2, 10))
