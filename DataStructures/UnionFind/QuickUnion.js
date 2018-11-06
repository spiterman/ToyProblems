class QuickUnion {
  // Lazy Approach
  constructor(size) {
    this.ids = [];
    for(let i = 0; i < size; i++) {
      this.ids.push(i);
    }
  }

  root(id) {
    while(this.ids[id] !== id) {
      id = this.ids[id];
    }
    return id;
  }

  union(id1, id2) {
    let root1 = this.root(id1);
    let root2 = this.root(id2);

    this.ids[root1] = root2;
  }

  connected(id1, id2) {
    return this.root(id1) === this.root(id2);
  }
}


let u = new QuickUnion(10)

u.union(4, 3)
u.union(3, 8)
u.union(8, 9)

u.union(0, 1)

console.log(u.root(9))
