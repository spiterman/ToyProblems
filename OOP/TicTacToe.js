function startGame() {
  let gameInfo = createGameInfo();
  play(gameInfo);
}

function createGameInfo() {
  let board = createBoard();
  let currentPlayer = "X";
  let numberOfRounds = 9;
  return {board, currentPlayer, numberOfRounds}
}

function createBoard(){
  return [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
}

function play(gameInfo) {

  process.stdout.write("Let's play Tic Tac Toe!\n\n")

  printBoard(gameInfo);
  printCurrentPlayersTurn(gameInfo);
  let playRound = roundPlayerFactory(gameInfo);

  process.stdin.on("data", (data) => {
    let moves = data.toString().trim().split(" ");
    let row = parseInt(moves[0]);
    let col = parseInt(moves[1]);
    process.stdout.write("\n")
    playRound(row, col);
  });
}

function roundPlayerFactory(gameInfo) {
  function playRound(row, col) {
    let canPlacePiece = placePiece(gameInfo)(row, col);
    if(canPlacePiece) {
      printBoard(gameInfo);
      printCurrentMove(gameInfo)(row, col)
      let detectWinner = checkWinCondition(gameInfo);
      if(detectWinner) {
        declareWinner(gameInfo);
      }
      if(!detectWinner && gameInfo.numberOfRounds <= 0) {
        declareNoWinners();
      }
      switchPlayer(gameInfo)
      gameInfo.numberOfRounds -= 1;
      printCurrentPlayersTurn(gameInfo);
    } else {
      printInvalidMove(gameInfo);
    }
  }
  return playRound;
}

function switchPlayer(gameInfo) {
  if(gameInfo.currentPlayer === "X") {
    gameInfo.currentPlayer = "O"
  } else {
    gameInfo.currentPlayer = "X"
  }
}

function placePiece(gameInfo) {
  return function(row, col) {
    if(isNaN(row) || isNaN(col) || row > 2 || row < 0 || col > 2 || col < 0 || gameInfo.board[row][col] === "X" || gameInfo.board[row][col] === "O") {
      return false;
    } else {
      gameInfo.board[row][col] = gameInfo.currentPlayer;
      return true;
    }
  }
}

// Functions to Print Board and Messages
function printInvalidMove(gameInfo){
  process.stdout.write(`Invalid Move, ${gameInfo.currentPlayer} goes again \n\n`)
}

function printCurrentMove(gameInfo) {
  return function(row, col){
    process.stdout.write(`An ${gameInfo.currentPlayer} was placed at row ${row}, column ${col} \n\n`);
  }
}

function printCurrentPlayersTurn(gameInfo) {
  process.stdout.write(`It's ${gameInfo.currentPlayer}'s turn \n\n`);
}

function printBoard(gameInfo) {
  gameInfo.board.forEach((line) => {
    line.forEach((square) => {
      process.stdout.write(`|${square}`);
    })
    process.stdout.write("|");
    process.stdout.write("\n");
  })
  process.stdout.write("\n");
}

// Functions to end process and broadcast winner messages
function declareWinner(gameInfo) {
  process.stdout.write(`\n${gameInfo.currentPlayer} is the winner! \n`);
  process.exit();
}

function declareNoWinners() {
  process.stdout.write("\nCat's game! \n");
  process.exit();
}

// Functions to check for winners
function checkWinCondition(gameInfo) {
  // check rows, columns and diagonals
  if(checkRows(gameInfo) ||
      checkColumns(gameInfo) ||
      checkDiagonals(gameInfo)) {
    return true;
  }
  return false;
}

function checkDiagonals(gameInfo){
  if(gameInfo.board[0][0] === gameInfo.currentPlayer &&
     gameInfo.board[1][1] === gameInfo.currentPlayer &&
     gameInfo.board[2][2] === gameInfo.currentPlayer){
    return true;
  }
  if(gameInfo.board[0][2] === gameInfo.currentPlayer &&
     gameInfo.board[1][1] === gameInfo.currentPlayer &&
     gameInfo.board[2][0] === gameInfo.currentPlayer){
    return true;
  }
  return false;
}

function checkRows(gameInfo){
  for(let row = 0; row < gameInfo.board.length; row++) {
    if(gameInfo.board[row][0] === gameInfo.currentPlayer && gameInfo.board[row][1] === gameInfo.currentPlayer && gameInfo.board[row][2] === gameInfo.currentPlayer) {
      return true;
    }
  }
  return false;
}

function checkColumns(gameInfo) {
  for(let col = 0; col < gameInfo.board.length; col++) {
    if(gameInfo.board[0][col] === gameInfo.currentPlayer && gameInfo.board[1][col] === gameInfo.currentPlayer && gameInfo.board[2][col] === gameInfo.currentPlayer) {
      return true;
    }
  }
  return false;
}

// Runs the Game
startGame();
