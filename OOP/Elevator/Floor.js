const FloorButton = require("./FloorButton");


class Floor {
  // Knows how many people there
  // Knows how to add people to the floor
  // Knows how to remove people from the floor
  constructor(floorNumber, elevator) {
    this.people = new Set();
    this.floorNumber = floorNumber;
    this.capacity = 0;
    // this.maxCapcity = 100; will implement later
    this.elevator = elevator;
    this.buttons = new Map();
    this.buttons.set('up', new FloorButton('up'));
    this.buttons.set('down', new FloorButton('down'));
  }

  addPerson(person){
    this.people.add(person);
    person.setFloorButtons(this.buttons); //
    this.capacity += 1;
  }

  addPeople(people) {
    people.forEach((person) => {
      this.people.add(person);
    })
  }

  removePerson(person) {
    this.people.delete(person);
    person.setFloorButtons(null); //resets their floor buttons
    this.capacity -= 1;
    return person;
  }

  removePeople(elevatorDirection) {
    // Can do this with functional programming, filter based on some callback function
    // Returns people on the floor based on a given condition (all the ones going up oer down)
    let people = new Set();
    this.people.forEach((person) => {
      // Removes a person if the direction is going up and the elevator is headed up
      if(person.desiredFloor > this.floorNumber && elevatorDirection === "up"){
        people.add(this.removePerson(person));
      //Removes a person if the direction is going down and the elevator is headed down
      } else if(person.desiredFloor < this.floorNumber && elevatorDirection === "down") {
        people.add(this.removePerson(person));
      }
    })

    this.buttons.get(elevatorDirection).turnOffLight(); //Resets button
    //Doesn't handle when elevator is at capacity
    // * (the people the elevator can't add need to stay on the floor, and re-request it, can't just be discarded)

    return people;
  }

  turnButtonLightOff(direction) {
    this.buttons.get(direction).turnOffLight();
  }
}

module.exports = Floor;
