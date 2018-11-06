const Button = require("./Button");

class ElevatorButton extends Button {
  constructor(floorNumber) {
    super();
    this.floorNumber = floorNumber;
  }
  getFloorNumber(){
    return this.FloorNumber;
  }
}

module.exports = ElevatorButton;
