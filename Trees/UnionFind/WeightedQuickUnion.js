class WQU {
  constructor(size) {
    this.ids = [];
    this.sizes = [];
    for(let i = 0; i < size; i++) {
      this.ids.push(i);
      this.sizes.push(1);
    }
  }

  root(id) {
    while(this.ids[id] !== id) {
      this.ids[id] = this.ids[this.ids[id]]; //Path Compression Piece
      id = this.ids[id];
    }
    return id;
  }


  union(id1, id2) {
    let root1 = this.root(id1)
    let root2 = this.root(id2)
    if(root1 === root2) {
      return;
    }
    if(this.sizes[root1] < this.sizes[root2]) {
      this.ids[root1] = root2;
      this.sizes[root2] += this.sizes[root1];
    } else {
      this.ids[root2] = root1;
      this.sizes[root1] += this.sizes[root2];
    }
  }

  connected(id1, id2) {
    return this.root(id1) === this.root(id2);
  }

}


let wqu = new WQU(10);

wqu.union(1, 2)
wqu.union(3, 4)
wqu.union(3, 5)
wqu.union(2, 3)

console.log(wqu)
