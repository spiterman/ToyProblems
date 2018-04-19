function startGame() {
  let board = createBoard();

  const players = {
    "X" : placePiece("X", board),
    "O" : placePiece("O", board)
  }

  process.stdout.write("New Game, it's Xs turn \n ")
  printBoard(board);

  let currentPlayer = "X";
  let numberOfRounds = 9;


  process.stdin.on("data", (data) => {
    let moves = data.toString().trim().split(" ");
    let row = parseInt(moves[0]);
    let col = parseInt(moves[1]);
    process.stdout.write("\n\n")

    if(players[currentPlayer](row, col)) {
      if(!checkWinCondition(currentPlayer, board) && numberOfRounds <= 0) {
        declareNoWinners();
      }
      currentPlayer = switchPlayer(currentPlayer)
      numberOfRounds -= 1;
    }

  })
}


function switchPlayer(currentPlayer) {
  if(currentPlayer === "X") {
    return "O"
  } else {
    return "X"
  }
}

function placePiece(piece, board) {
  return function(row, col) {
    if(isNaN(row) || isNaN(col) || row > 2 || row < 0 || col > 2 || col < 0 || board[row][col] === "X" || board[row][col] === "O") {
      process.stdout.write("Invalid position, try another \n\n");
      process.stdout.write(`${piece}'s turn\n\n`)
      return false;
    } else {
      board[row][col] = piece;
      process.stdout.write(`An ${piece} was placed at row ${row}, col ${col} \n\n`);
      printBoard(board);
      return true;
    }
  }
}

// Functions to create and print board
function printBoard(board) {
  process.stdout.write("\n")
  board.forEach((line) => {
    line.forEach((square) => {
      process.stdout.write(`|${square}`);
    })
    process.stdout.write("|");
    console.log("\n");
  })
  console.log("\n");
}

function createBoard(){
  return [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
}

// Functions to check for winners
function declareWinner(winner) {
  process.stdout.write(`\n ${winner} is the winner! \n`);
  process.exit();
}

function declareNoWinners() {
  process.stdout.write("\n Cat's game! \n");
  process.exit();
}

function checkWinCondition(player, board) {
  // check rows, columns and diagonals
  if(checkRows(player, board) || checkColumns(player, board) || checkDiagonals(player, board)) {
    declareWinner(player);
    return true;
  }
  return false;
}

function checkDiagonals(player, board){
  if(board[0][0] === player &&
     board[1][1] === player &&
     board[2][2] === player){
    return true;
  }
  if(board[0][2] === player &&
     board[1][1] === player &&
     board[2][0] === player){
    return true;
  }
  return false;
}

function checkRows(player, board){
  for(let row = 0; row < board.length; row++) {
    if(board[row][0] === player && board[row][1] === player && board[row][2] === player) {
      return true;
    }
  }
  return false;
}

function checkColumns(player, board) {
  for(let col = 0; col < board.length; col++) {
    if(board[0][col] === player && board[1][col] === player && board[2][col] === player) {
      return true;
    }
  }
  return false;
}

startGame();
