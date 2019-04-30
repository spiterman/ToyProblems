class MineSweeper {
  constructor(height = 10, width = 10, bombs = 9) {
    this.height = height;
    this.width = width;
    this.bombs = bombs;
    this.board = this.instantiateBoard();
    this.addBombs(bombs);
    this.placeCellValuesOnBoard();
  }

  startGame() {
    console.log("Minesweeper!")
    this.printBoard();
    process.stdin.on("data", (data) => {
      let coordinates = data.toString().trim().split(" ");
      let y = parseInt(coordinates[0]);
      let x = parseInt(coordinates[1]);
      this.selectCell(y, x);
      this.printBoard(); //Moved this into the select cell call, discuss why that's bad?
    })
  }

  selectCell(y, x) {

    let b = this;

    function recursivelyFlip(y, x) {
      if(b.isValidMove(y, x)) {
        let cell = b.board[y][x];
        cell.isFlipped = true;
        if(cell.value === 0) {
          let adjacentCells = b.getAdjacentCells();
          adjacentCells.forEach(coordinate => {
            let offSetY = y + coordinate[0];
            let offSetX = x + coordinate[1];
            recursivelyFlip(offSetY, offSetX);
          })
        }
      }
    }

    if(this.isValidMove(y, x)) {
      let cell = b.board[y][x];
      if(cell.isBomb) {
        b.announceLoss();
      }
      recursivelyFlip(y, x);
      if(b.checkIfPlayerWon()) {
        b.announceWin();
      }
    } else {
      this.declareInvalidMove();
    }
  }

  checkIfPlayerWon() {
    let didPlayerWin = true;
    this.board.forEach(row => {
      row.forEach(cell => {
        if(!cell.isFlipped && !cell.isBomb) {
          didPlayerWin = false;
        } //If cell is not flipped and isn't a bomb, then the game continues;
      });
    });
    return didPlayerWin;
  }

  announceWin() {
    console.log("Great Job, You Won!");
    this.printBoard();
    process.exit();
  }

  announceLoss() {
    console.log("Oh no! That was a Bomb!");
    this.printBoard();
    process.exit();
  }

  declareInvalidMove() {
    console.log("Invalid move, go again");
  }

  isValidMove(y, x) {
    return Number.isInteger(y) && Number.isInteger(x) && this.isInbounds(y, x) && !this.board[y][x].isFlipped;
  }

  instantiateBoard() {
    let board = [];
    for (let i = 0; i < this.height; i++) {
      let row = [];
      for (let i = 0; i < this.width; i++) {
        row.push(new Cell());
      }
      board.push(row);
    }
    return board;
  }

  placeCellValuesOnBoard() {
    this.board.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (!cell.isBomb) {
          cell.value = this.countSurroundingBombs(rowIndex, cellIndex);
        }
      })
    })
  }

  addBombs(bombs) {
    while (bombs > 0) {
      let y = Math.floor(Math.random() * this.height);
      let x = Math.floor(Math.random() * this.width);
      let cell = this.board[y][x]
      if (!cell.isBomb) {
        cell.isBomb = true;
        cell.value = "B";
        bombs -= 1;
      }
    }
  }

  getAdjacentCells() {
    return [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  }

  countSurroundingBombs(y, x) {
    let sum = 0;
    let neighbors = this.getAdjacentCells();
    neighbors.forEach(coordinate => {
      let offSetY = y + coordinate[0]
      let offSetX = x + coordinate[1]
      if (this.isInbounds(offSetY, offSetX) && this.board[offSetY][offSetX].isBomb) {
        sum += 1;
      }
    })
    return sum;
  }

  isInbounds(y, x) {
    return 0 <= y && y < this.height && 0 <= x && x < this.width;
  }

  printBoard() {
    process.stdout.write("  ")
    for(let i = 0; i < this.height; i++) {
      process.stdout.write(`  ${i} `)
    }
    process.stdout.write("\n")
    this.board.forEach((row, rowIndex) => {
      process.stdout.write("  ")
      row.forEach(cell => process.stdout.write(" ___"))
      process.stdout.write("\n")
      let r = [`${rowIndex} | `];
      row.forEach(cell => {
        if (cell.isFlipped) {
          r.push(cell.value);
        } else {
          r.push(" ");
        }
        r.push(' | ');
      })
      console.log(r.join(""));
    })
    process.stdout.write("  ")
    this.board.forEach(row => process.stdout.write(" ___"))
    process.stdout.write("\n\n")
  }

  __seeUnderlyingBoard() { // Utility Method, also resets board (turns all tiles back to flipped)
    this.board.forEach(row => {
      row.forEach(cell => {
        cell.isFlipped = true;
      })
    })
    this.printBoard();
    this.board.forEach(row => {
      row.forEach(cell => {
        cell.isFlipped = false;
      })
    })
  }
}

class Cell {
  constructor() {
    this.isBomb = false;
    this.isFlipped = false;
    this.value = 0;
    this.isFlagged = false;
    this.isQuestion = false;
  }
}

let ms = new MineSweeper(10, 10, 5);
ms.startGame();

/*
Known issues:
* Announcing invalid moves properly (helper method recursion)
* First move shouldn't be a bomb

Features to implement:
* Flagging
* Adding question marks
*/
