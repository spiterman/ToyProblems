class DynamicArray {

  constructor(){
    this.storage = new Array(8);
    this.index = 0;
  }

  append(item) {
    if(this.index >= this.storage.length) {
      let temp = this.storage;
      this.index = 0;
      this.storage = new Array(this.storage.length * 2);

      while(this.index < temp.length) {
        this.storage[this.index] = temp[this.index];
        this.index++;
      }
    }
    this.storage[this.index] = item;
    this.index++;
  }
}

// let d = new DynamicArray();

// d.append(10);
// d.append(10);
// d.append(10);
// d.append(10);
// d.append(10);
// d.append(10);
// d.append(10);
// d.append(10);
// d.append(10);
// d.append(10);
// d.append(10);


// console.log(d.storage)

module.exports = DynamicArray;
