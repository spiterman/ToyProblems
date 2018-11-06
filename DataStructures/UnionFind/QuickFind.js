
class QuickFind {
  // Eager Approach
  constructor(size) {
    this.ids = [];
    for(let i = 0; i < size; i++) {
      this.ids.push(i);
    }
  }

  union(id1, id2) {
    let root1 = this.ids[id1]
    let root2 = this.ids[id2]
    for(let i = 0; i < this.ids.length; i++) {
      if(this.ids[i] === root1) {
        this.ids[i] = root2;
      }
    }
  }

  connected(id1, id2) {
    return this.ids[id1] === this.ids[id2]
  }
}

let u = new QuickFind(10);

u.union(4, 3)
u.union(3, 8)
u.union(6, 5)
u.union(5, 8)
u.union(0, 1)
u.union(1, 8)
u.union(9, 2)
u.union(2, 4)


console.log(u)




/*

"Is Connected To" is an equivalence relation

Reflexive: p is connected to p
Symmetric: If p is connected to q, then q is connected to p
Transitive: If p is connected to q, and q is connected to r,
            then p is connected to r
*/
