function Person(a){
  this.a = a;
}
Person.prototype.talk = function(){
  console.log('I say: ', this.a);
}

function spawn(constructor){
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  constructor.apply(obj, )

  return obj;
}
//1. Create a new Object
//2. Set prototype to the constructor's prototype
//3. Execute the constructor with 'this'
//4. Return created object

var crockford = spawn(Person, 'Semicolons');

// crockford.talk();

