class Button {
  constructor() {
    this.isLit = false;
  }
  turnOnLight(){
    this.isLit = true;
  }
  turnOffLight(){
    this.isLit = false;
  }
}

class FloorButton extends Button {
  constructor(direction, elevatorController) {
    super();
    this.direction;
    this.elevatorController;
  }
  getDirection(){
    return this.direction;
  }
}

class ElevatorButton extends Button {
  constructor(floorNumber) {
    super();
    this.floorNumber = floorNumber;
  }
  getFloorNumber(){
    return this.FloorNumber;
  }
}

class Person {
  constructor(name, weight){
    this.name = name;
    this.weight = weight;
    this.currentfloor;
    this.desiredFloor;
    this.floorButtons = null;
  }

  setCurrentFloor(floorNumber) {
    this.currentfloor = floorNumber;
  }
  setDesiredFloor(floorNumber) {
    this.desiredFloor = floorNumber;
  }

  setFloorButtons(floorButtons) {
    this.floorButtons = floorButtons;
  }
  // Alternatively, give person access to their current floor, but larger coupling

  pressFloorButton() {
    if(!this.floorButtons) { //if they haven't entered the building
      return;
    }
    if(this.currentFloor < this.desiredFloor) {
      this.buttons.get('up').turnOnLight();
    } else {
      this.buttons.get('down').turnOnLight();
    }
  }
}


class Queue {

  constructor() {
    this.head = new ListNode(-Infinity);
    this.tail = new ListNode(Infinity); // this way we always have nodes
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Some Code Duplication here
  insertFromFront(floorNumber) {
    let current = this.head;
    while(current.val < floorNumber) {
      current = current.next;
    }
    if(current.val === floorNumber) {
      return false;
    }
    let newNode = new ListNode(floorNumber);
    current.prev.next = newNode;
    current.prev = newNode;
  }

  insertFromBack(floorNumber) {
    let current = this.tail;
    while(current.val > floorNumber) {
      current = current.prev;
    }
    if(current.val === floorNumber) {
      return false;
    }
    let newNode = new ListNode(floorNumber);
    current.next.prev = newNode;
    current.next = newNode;
  }
}

class ListNode {
  constructor(floorNumber) {
    this.floorNumber = floorNumber;
    this.next = null;
    this.prev = null;
  }
}




class ElevatorController {
  // Keeps track of how many floors and elevators there are
  // Handles how to send floor requests to different elevators
  // Handles transferring people between the floor and the elevator

  constructor(numberOfFloors , numberOfElevators) {

    this.floors = new Map();
    this.elevators = new Map();

    // this.elevator = new Elevator(numberOfFloors); //old

    for(let i = 1; i <= numberOfFloors; i++) {
      this.floors.set(i, new Floor(i, this.elevator));
    }

    for(let i = 1; i <= numberOfElevators; i++) {
      this.elevators.set(i, new Elevator(numberOfFloors));
    }

  }

  addPersonToBuilding(person) {
    this.floors.get(1).addPerson(person);
  }


  loadPeopleIntoElevator(floorNumber, elevatorNumber) {
    let floor = this.floors.get(floorNumber);
    let elevator = this.elevators.get(elevatorNumber);
    elevator.addPeople(floor.removePeople()); //Adds in excess people
  }

  unloadPeopleFromElevator(floorNumber, elevatorNumber) {
    let floor = this.floors.get(floorNumber);
    let elevator = this.elevators.get(elevatorNumber);

    floor.addPeople(elevator.removePeople(floorNumber))
  }

  processSingleRequest(direction, floorNumber) {
    let elevator = chooseElevator(direction, floorNumber);
    elevator.addRequest(direction, floorNumber);
  }


  refreshRequests() {
    // Runs periodically to clear requests and pass them along to different elevators
  }

  handleRequests() {
    // Loop over every floor, see if up or down buttons have been pushed
    this.floors.forEach((floor) => {
      if(floor.buttons.get('up').isLit){
        this.chooseElevator('up', floor.floorNumber).addUpRequest(floor.floorNumber);
      }
      if(floor.buttons.get('down').isLit){
        this.chooseElevator('down', floor.floorNumber).addDownRequest(floor.floorNumber);
      }
    })
  }

  chooseElevator(direction, floorNumber) {
    let closestElevator = this.elevators.get(1); //Just in case none are at capacity, choose first oen
    let elevatorList = this.findElevatorsNotAtCapacity();

    if(elevatorList.length === 0) { //If there are no elevators available, just send to the first;
      return closestElevator;
    }

    let sameDirectionElevators = this.findElevatorsGoingSameDirection(direction, elevatorList);

    if(sameDirectionElevators.length === 0) {
      return this.findFurthestElevator(direction, elevatorList);
    }

    return this.findClosestElevator(direction, elevatorList);

    // Given a request direction from a certain floor decide which elevator to prioritize
    // If going up, choose closest elevator, below capacity, going up, that is under you
    // If there are none going the same direction, choose the furthest one going the opposite direction
    // If going down, choose closest elevator, below capcity, going down, that is above

    // Can optimize it even further if you can see how far the final destination will be on each elevator
    // And also potentially how many requests it will have to handle an the way back down.
    // Gets pretty hairy, maybe some kind of load balancing, that accounts for how much wait time
  }

  findElevatorsNotAtCapacity() {
    let elevatorList = [];
    this.elevators.forEach((elevator) => {
        if(elevator.currentWeight < elevator.maxWeight - 150) {
          elevatorList.push(elevator);
        }
    })
    return elevatorList;
  }

  findElevatorsGoingSameDirection(direction, elevatorList) { //Used to find all elevators going the same direction
    let sameDirectionElevators = [];
    elevatorList.forEach((elevator) => {
      if(elevator.direction === direction) {
        sameDirectionElevators.push(elevator);
      }
    })
    return sameDirectionElevators;
  }

  findFurthestElevator(floorNumber, elevatorList) { //Used to find the furthest elevator if none are going the same direction
    let furthestElevator;
    let furthestElevatorDistance = 0;

    elevatorList.forEach((elevator) => {
      let newDistance = Math.abs(elevator.currentFloor - floorNumber);
      if(newDistance > furthestElevatorDistance) {
        furthestElevatorDistance = newDistance;
        furthestElevator = elevator;
      }
    });
    return furthestElevator;
  }

  findClosestElevator(floorNumber, elevatorList) { //Used to find the closest elevator from a list of elevators going the same direction
    let closestElevator;
    let closestElevatorDistance = Infinity;

    elevatorList.forEach((elevator) => {
      let newDistance = Math.abs(elevator.currentFloor - floorNumber);
      if(newDistance < closestElevatorDistance) {
        closestElevatorDistance = newDistance;
        closestElevator = elevator;
      }
    });
    return closestElevator;
  }

}




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


// Where does coupling exist?
