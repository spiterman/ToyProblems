const Floor = require("./Floor");
const Elevator = require("./Elevator");

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

module.exports = ElevatorController;
