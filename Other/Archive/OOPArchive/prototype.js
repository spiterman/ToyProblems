function talk() {
  console.log(this.sound);
};

var animal = {
  talk
};

var cat = {
  sound: 'meow'
}


function hey(name){
  this.name = name;
}


var a = new hey('hello');

hey.prototype.sup = function(){
  console.log('sup')
}

// console.log(a)

// console.log(Object.getPrototypeOf(a))
console.log(Object)

// console.log(hey.prototype)


// Object.setPrototypeOf(cat, animal);

// console.log(cat.prototype)
// cat.talk();
