function processData(input) {
    var data = input.split('\n');
    var n = Number(data[0]);
    var q = Number(data[n + 1]);

    var patterns = [];
    var count = [];

    //Create RegExp objects
    for(var i = n + 2; i < data.length; i++){
        patterns.push(new RegExp(data[i]));
    };

    patterns.forEach((pattern) => {
        var counter = 0;
        for(var i = 1; i <= n; i++){
           if(pattern.test(data[i])){
               counter++;
           }
        }
        count.push(counter);
    });

    //console.log(count)
    //console.log(patterns);
    //console.log(n, q);

}
