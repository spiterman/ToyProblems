function wait3For1(callback){
  setTimeout(function(){
    callback('one')
  }, 300)
}

function wait2For5(callback){
  setTimeout(function(){
    callback('five')
  }, 200)
}


function asyncMap(tasks, callback){
  return callback(
  tasks.map((item) =>
    item((element) => element)))
}

asyncMap([wait3For1, wait2For5], function(arr){
  console.log(arr) //expect ['one', 'two']
});

//Keep getting [undefined, undefined]
//I'm pretty sure it's because I'm not doing the callbacks wait2For5 and wait3For1 correctly, but not sure what the problem is
