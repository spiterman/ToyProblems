class Matrix {
  constructor(m, n) {
    this.m = m;
    this.n = n;
    this.storage = [];
    for(let i = 0; i < m; i++) {
      this.storage.push(new Array(n).fill(0));
    }
  }

  isValidPosition(i, j) {
    if(i < 0 || j < 0 || i >= this.m || j >= this.n) {
      return false
    }
    return true
  }

  insert(i, j, val) {
    if(this.isValidPosition(i, j)) {
      this.storage[i][j] = val
      return true;
    }
    return false;
  }

  retrieve(i, j) {
    if(this.isValidPosition(i, j)) {
      return this.storage[i][j]
    }
    return -Infinity;
  }

  scale(factor) {
    for(let i = 0; i < this.m; i++) {
      for(let j = 0; j < this.n; j++) {
        let newVal = this.retrieve(i, j) * factor;
        this.insert(i, j, newVal);
      }
    }
  }

  fill(val) {
    for(let i = 0; i < this.m; i++) {
      for(let j = 0; j < this.n; j++) {
        this.insert(i, j, val)
      }
    }
  }

  flatten() {
    let result = [];
    for(let i = 0; i < this.m; i++) {
      for(let j = 0; j < this.n; j++) {
        result.push(this.storage[i][j]);
      }
    }
    return result;
  }


  transpose() {
    let newMatrix = new Matrix(this.n, this.m);
    for(let i = 0; i < this.m; i++) {
      for(let j = 0; j < this.n; j++) {
        let val = this.retrieve(i, j);
        newMatrix.insert(j, i, val);
      }
    }
    return newMatrix;
  }

  multiply(matrix) {
    if(this.n !== matrix.m) {
      return null;
    }
    let newMatrix = new Matrix(this.m, matrix.n);
    for(let i = 0; i < newMatrix.m; i++) {
      for(let j = 0; j < newMatrix.n; j++) {

        let newVal = 0;

        for(let k = 0; k < this.n; k++) {
          newVal += this.retrieve(i, k) * matrix.retrieve(k, j);
        }

        newMatrix.insert(i, j, newVal);
      }
    }

  return newMatrix;
  }


}

let matrix1 = new Matrix(2, 3)
// console.log(matrix.storage);

matrix1.insert(0, 0, 5)
matrix1.insert(0, 1, 4)
matrix1.insert(0, 2, 6)
matrix1.insert(1, 0, 7)
matrix1.insert(1, 1, 8)
matrix1.insert(1, 2, 9)
// console.log(matrix1.storage);

let matrix2 = new Matrix(3,2)
// console.log(matrix.storage);

matrix2.insert(0, 0, 1)
matrix2.insert(1, 0, 1)
matrix2.insert(2, 0, 1)

matrix2.insert(0, 1, 2)
matrix2.insert(1, 1, 2)
matrix2.insert(2, 1, 2)

// console.log(matrix2.storage);

console.log(matrix1.multiply(matrix2).storage)

// console.log(matrix.transpose().storage)
