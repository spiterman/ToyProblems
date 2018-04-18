const ElevatorButton = require("./ElevatorButton");
const Queue = require("./Queue");

class Elevator {

  constructor(numberOfFloors) {
    this.direction = 'up';

    this.passengers = new Map();
    this.buttons = new Map();
    this.passengers.set('up', new Map());
    this.passengers.set('down', new Map());

    this.currentUpRequests = new Queue();
    this.futureDownRequests = new Queue();

    this.currentDownRequests = new Queue();
    this.futureDownRequests = new Queue();



    for(let i = 1; i <= numberOfFloors; i++) {
      this.passengers.get('up').set(i, new Set());
      this.passengers.get('down').set(i, new Set());
      this.buttons.set(i, new ElevatorButton());
    }

    this.currentFloor = 1;
    this.currentWeight = 0;
    this.maxWeight = 1500;
    this.numberOfFloors = numberOfFloors;
  }

  // Adds a person, and
  addPerson(person, destination) {
    if(this.canAddWeight(person)) {
      this.passengers.get(this.direction).get(destination).add(person);
      this.currentWeight += person.weight;
      return true;
    }
  }

  // Takes in a Set of Person objects and calls addPerson on each one
  addPeople(people) {
    let excessPeople = new Set();
    people.forEach((person) => {
      if(this.canAddWeight(person)){
        this.addPerson(person, person.desiredFloor);
      } else {
        excessPeople.add(person);
      }
    })
    return excessPeople;
  }

  removePerson(person, destination) {
    this.currentWeight -= person.weight;
    this.passengers.get(this.direction).get(destination).delete(person);
    person.setCurrentFloor(destination);
    return person;
  }

  // Returns a set of people getting off at a certain floor;
  removePeople(destination) {
    let people = new Set();
    this.passengers.get(this.direction).get(destination).forEach((person) => {
      people.add(this.removePerson(person, destination));
    })
    this.buttons.get(destination).turnOffLight();
    return people;
  }

  canAddWeight(person) {
    if(this.currentWeight + person.weight > this.maxWeight) {
      return false;
    }
    return true;
  }

  moveUpFloor(){
    this.currentFloor += 1;
  }

  moveDownFloor(){
    this.currentFloor -= 1;
  }

  changeDirection() {
    if(this.direction === 'up') {
      this.direction = 'down';
      this.currentUpRequests = this.futureUpRequests
      this.futureUpRequests = new Queue();
    } else {
      this.direction = 'up';
      this.currentDownRequests = this.futureDownRequests;
      this.futureDownRequests = new Queue();
    }
  }

  addRequest(direction, floorNumber) {
    if(direction === 'up') {
      this.addUpRequest(floorNumber);
    } else {
      this.addDownRequest(floorNumber);
    }
  }

  addUpRequest(floorNumber) {
    if(floorNumber > this.currentFloor) {
      this.currentUpRequests.insertFromBack(floorNumber);
    } else {
      this.futureUpRequests.insertFromFront(floorNumber);
    }
  }

  addDownRequest(floorNumber) {
    if(floorNumber < this.currentFloor) {
      this.currentDownRequests.insertFromFront(floorNumber);
    } else {
      this.futureDownRequests.insertFromBack(floorNumber);
    }
  }

  goToNextFloor() {
    // Move up the queue until the next floor
    // Once there, unload any people that need to get off
    // And load people that need to get on
  }
}

module.exports = Elevator;
