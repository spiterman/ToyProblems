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

module.exports = Button;
