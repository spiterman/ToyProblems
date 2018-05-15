class TicTacToe {
  constructor() {
    // Create 3x3 board
    // Number of Rounds
    // Current player
    this.currentPlayer = "X";
    this.numberOfRounds = 9;
    this.board = createBoard();
  }

  play() {
    process.stdout.write("Let's play Tic Tac Toe! \n\n");
    this.printBoard();
    this.printCurrentPlayersTurn();

    process.stdin.on("data", (data) => {
      let moves = data.toString().trim().split(" ");
      let row = parseInt(moves[0]);
      let col = parseInt(moves[1]);
      process.stdout.write("\n");

      this.playRound(row, col);
    })
  }

  printBoard() {
    this.board.forEach((line) => {
      line.forEach((square) => {
        process.stdout.write(`|${square}`);
      })
      process.stdout.write("|");
      process.stdout.write("\n");
    })
    process.stdout.write("\n");
  }

  printCurrentPlayersTurn() {
    process.stdout.write(`It's ${this.currentPlayer}'s turn \n\n`);
  }

  playRound(row, col) {
    if(this.canPlacePiece(row, col)) {
      this.placePiece(row, col);

      this.printBoard();

      this.printCurrentMove(row, col);

      let detectWinner = this.checkWinCondtion();

      if(detectWinner) {
        this.declareWinner();
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

  decrementRounds() {
    this.numberOfRounds -= 1;
  }

  declareWinner() {
    process.stdout.write(`\n${this.currentPlayer} is the winner! \n`);
    process.exit();
  }

  declareTie() {
    process.stdout.write(`\nCat's game!\n`);
    process.exit();
  }

  printInvalidMove(){
    process.stdout.write(`Invalid Move, ${this.currentPlayer} goes again \n\n`)
  }

  switchPlayer() {
    if(this.currentPlayer === "X") {
      this.currentPlayer = "O";
    } else {
      this.currentPlayer = "X";
    }
  }

  printCurrentMove(row, col) {
    process.stdout.write(`An ${this.currentPlayer} was placed at row ${row}, column ${col} \n\n`);
  }

  canPlacePiece(row, col) {
    if(isNaN(row) || isNaN(col) || row > 2 || row < 0 || col > 2 || col < 0 || this.board[row][col] === "X" || this.board[row][col] === "O") {
      return false;
    }
    return true;
  }

  placePiece(row, col) {
    this.board[row][col] = this.currentPlayer;
  }

  checkWinCondtion() {
    if(this.checkRows() || this.checkColumns() || this.checkDiagonals()) {
      return true;
    }
    return false;
  }

  checkDiagonals() {
    if(this.board[0][0] === this.currentPlayer &&
       this.board[1][1] === this.currentPlayer &&
       this.board[2][2] === this.currentPlayer) {
        return true;
      }
    if(this.board[0][2] === this.currentPlayer &&
       this.board[1][1] === this.currentPlayer &&
       this.board[2][0] === this.currentPlayer) {
        return true;
      }
    return false;
  }

  checkRows() {
    for(let row = 0; row < this.board.length; row++) {
      if(this.board[row][0] === this.currentPlayer && this.board[row][1] === this.currentPlayer && this.board[row][2] === this.currentPlayer) {
        return true;
      }
    }
    return false;
  }

  checkColumns() {
    for(let col = 0; col < this.board.length; col++) {
    if(this.board[0][col] === this.currentPlayer && this.board[1][col] === this.currentPlayer && this.board[2][col] === this.currentPlayer) {
        return true;
      }
    }
    return false;
  }
}

function createBoard() {
  return [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
}

let game = new TicTacToe();

game.play();

/*

Separate the update board from is valid move
Decrementing the number of rounds before checking win condtion
*/
