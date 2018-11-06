const Button = require("./Button");

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

module.exports = FloorButton;
