class Drone {
  up(){
    setTimeout(() => console.log("moved up"), 200);
  }
  left() {
    setTimeout(() => console.log("moved left"), 100);
  }
  spin() {
    setTimeout(() => console.log("spun"), 400);
  }
}

class SuperDrone extends Drone {
  up() {
    setTimeout(super.up, 0);
    return this;
  }
  left() {
    setTimeout(super.left, 0);
    return this;
  }
  spin() {
    setTimeout(super.spin, 0);
    return this;
  }
}


//Given a drone class with different timing for their moves.  The moves are
//async.
'use strict';

// Do not edit this drone class at all
class Drone {

  up(callback){
    setTimeout(() => {
      console.log('moved up');
      callback();
    }, 800);
  }

  down(callback){
    setTimeout(() => {
      console.log('moved down');
      callback();
    }, 500);
  }

  forward(callback){
    setTimeout(() => {
      console.log('moved forward');
      callback();
    }, 400);
  }

  backward(callback){
    setTimeout(() => {
      console.log('moved down');
      callback();
    }, 700);
  }

  left(callback){
    setTimeout(() => {
      console.log('moved left');
      callback();
    }, 200);
  }
  right(callback){
    setTimeout(() => {
      console.log('moved right');
      callback();
    }, 250);
  }

  spin(callback){
    setTimeout(() => {
      console.log('spun around 30 degrees');
      callback();
    }, 400);
  }
}

let drone = new SuperDrone();

drone.spin().up().left();
