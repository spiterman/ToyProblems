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

module.exports = Person
