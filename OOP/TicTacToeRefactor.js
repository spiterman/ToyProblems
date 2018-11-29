class TicTacToe {
  constructor() {
    // Current Player starts at X
    // Number of Rounds
    // Create 3x3 board
    this.currentPlayer = "X";
    this.numberOfRounds = 9;
    this.board = new Board();
  }

  play() {
    process.stdout.write("Let's play Tic Tac Toe! \n\n");
    process.stdout.write("To play, input two numbers: row column \n")
    process.stdout.write("For example: 0 0 \n\n")

    this.board.printBoard();
    this.printCurrentPlayersTurn();

    process.stdin.on("data", (data) => {
      let moves = data.toString().trim().split(" ");
      let row = parseInt(moves[0]);
      let col = parseInt(moves[1]);
      process.stdout.write("\n");

      this.playRound(row, col);
    })
  }

  playRound(row, col) {
    if(this.board.canPlacePiece(row, col)) {
      this.board.placePiece(row, col, this.currentPlayer);

      this.board.printBoard();

      this.printCurrentMove(row, col);

      let detectWinner = this.board.checkWinCondtion(this.currentPlayer);

      if(detectWinner) {
        this.declareWinner(this.currentPlayer);
      }

      this.decrementRounds();

      if(!detectWinner && this.numberOfRounds <= 0) {
        this.declareTie();
      }
      this.switchPlayer();

      this.printCurrentPlayersTurn();
    } else {
      this.printInvalidMove();
    }
  }

  printCurrentPlayersTurn() {
    process.stdout.write(`It's ${this.currentPlayer}'s turn \n\n`);
  }

  decrementRounds() {
    this.numberOfRounds -= 1;
  }

  declareWinner(player) {
    process.stdout.write(`\n${player} is the winner! \n`);
    process.exit();
  }

  declareTie() {
    process.stdout.write(`\nCat's game!\n`);
    process.exit();
  }

  printInvalidMove(){
    process.stdout.write(`Invalid Move, ${this.currentPlayer} goes again \n\n`)
  }

  printCurrentMove(row, col) {
    process.stdout.write(`An ${this.currentPlayer} was placed at row ${row}, column ${col} \n\n`);
  }

  switchPlayer() {
    if(this.currentPlayer === "X") {
      this.currentPlayer = "O";
    } else {
      this.currentPlayer = "X";
    }
  }

}

class Board {
  constructor() {
    this.storage = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
  }

  printBoard() {
    process.stdout.write("  0 1 2\n")
    process.stdout.write("  _ _ _\n")
    this.storage.forEach((line, row) => {
      process.stdout.write(`${row}`);
      line.forEach((square) => {
        process.stdout.write(`|${square}`);
      })
      process.stdout.write("|");
      process.stdout.write("\n");
      process.stdout.write("  - - -\n")
    })
    process.stdout.write("\n");
  }

  canPlacePiece(row, col) {
    if(isNaN(row) || isNaN(col) || row > 2 || row < 0 || col > 2 || col < 0 || this.storage[row][col] === "X" || this.storage[row][col] === "O") {
      return false;
    }
    return true;
  }

  placePiece(row, col, player) {
    this.storage[row][col] = player;
  }

  checkWinCondtion(player) {
    if(this.checkRows(player) || this.checkColumns(player) || this.checkDiagonals(player)) {
      return true;
    }
    return false;
  }

  checkDiagonals(player) {
    if(this.storage[0][0] === player &&
       this.storage[1][1] === player &&
       this.storage[2][2] === player) {
        return true;
      }
    if(this.storage[0][2] === player &&
       this.storage[1][1] === player &&
       this.storage[2][0] === player) {
        return true;
      }
    return false;
  }

  checkRows(player) {
    for(let row = 0; row < this.storage.length; row++) {
      if(this.storage[row][0] === player && this.storage[row][1] === player && this.storage[row][2] === player) {
        return true;
      }
    }
    return false;
  }

  checkColumns(player) {
    for(let col = 0; col < this.storage.length; col++) {
    if(this.storage[0][col] === player && this.storage[1][col] === player && this.storage[2][col] === player) {
        return true;
      }
    }
    return false;
  }
}

let game = new TicTacToe();

game.play();
