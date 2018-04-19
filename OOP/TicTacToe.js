function startGame() {
  // let board = createBoard();
  //
  // const players = {
  //   "X" : placePiece("X", board),
  //   "O" : placePiece("O", board)
  // }
  //
  // process.stdout.write("New Game, it's Xs turn \n ")
  // printBoard(board);
  //
  // let currentPlayer = "X";
  // let numberOfRounds = 9;

  let gameInfo = createGameInfo();
  // const playRound = roundPlayerFactory(gameInfo);
  // process.stdout.write("New Game, it's Xs turn \n ");
  // // console.log(gameInfo)
  // printBoard(gameInfo.board);

  play(gameInfo);

  // process.stdin.on("data", (data) => {
  //   let moves = data.toString().trim().split(" ");
  //   let row = parseInt(moves[0]);
  //   let col = parseInt(moves[1]);
  //   process.stdout.write("\n\n")
  //
  //   if(players[currentPlayer](row, col)) {
  //     if(!checkWinCondition(currentPlayer, board) && numberOfRounds <= 0) {
  //       declareNoWinners();
  //     }
  //     currentPlayer = switchPlayer(currentPlayer)
  //     numberOfRounds -= 1;
  //   }
  //
  // })

}

function createGameInfo() {
  let board = createBoard();
  let currentPlayer = "X";
  let numberOfRounds = 9;
  // let players = {
  //   "X": placePiece("X", board),
  //   "O": placePiece("O", board)
  // }
  return {board, currentPlayer, numberOfRounds}
  // , players}
}

function play(gameInfo) {

  process.stdout.write("Let's play Tic Tac Toe!\n\n")

  // , it's ${gameInfo.currentPlayer}'s turn \n `);
  // console.log(gameInfo)
  // let gameInfo = createGameInfo();
  printBoard(gameInfo);
  printCurrentPlayersTurn(gameInfo);

  let playRound = roundPlayerFactory(gameInfo);

  process.stdin.on("data", (data) => {
    let moves = data.toString().trim().split(" ");
    let row = parseInt(moves[0]);
    let col = parseInt(moves[1]);
    process.stdout.write("\n")
    playRound(row, col);
    // printBoard(gameInfo);
    // printCurrentPlayersTurn(gameInfo);
  });
}

function roundPlayerFactory(gameInfo) {
  function playRound(row, col) {
    // let attemptSuccessful = gameInfo.players[gameInfo.currentPlayer](row, col);

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

// function placePiece(piece, board) {
//   return function(row, col) {
//     if(isNaN(row) || isNaN(col) || row > 2 || row < 0 || col > 2 || col < 0 || board[row][col] === "X" || board[row][col] === "O") {
//       process.stdout.write("Invalid position, try another \n\n");
//       // process.stdout.write(`${piece}'s turn\n\n`)
//       return false;
//     } else {
//       board[row][col] = piece;
//       process.stdout.write(`An ${piece} was placed at row ${row}, col ${col} \n\n`);
//       printBoard(board);
//       return true;
//     }
//   }
// }


function placePiece(gameInfo) {
  return function(row, col) {
    if(isNaN(row) || isNaN(col) || row > 2 || row < 0 || col > 2 || col < 0 || gameInfo.board[row][col] === "X" || gameInfo.board[row][col] === "O") {
      // process.stdout.write("Invalid position, try another \n\n");
      // process.stdout.write(`${piece}'s turn\n\n`)
      return false;
    } else {
      gameInfo.board[row][col] = gameInfo.currentPlayer;
      // printCurrentMove(gameInfo)(row, col)
      // process.stdout.write(`An ${piece} was placed at row ${row}, col ${col} \n\n`);
      // printBoard(gameInfo);
      return true;
    }
  }
}

// Functions to create and print board

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

function createBoard(){
  return [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
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

// Functions to check for winners
function declareWinner(gameInfo) {
  process.stdout.write(`\n${gameInfo.currentPlayer} is the winner! \n`);
  process.exit();
}

function declareNoWinners() {
  process.stdout.write("\nCat's game! \n");
  process.exit();
}

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

startGame();
