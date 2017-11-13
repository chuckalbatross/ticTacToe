const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

////////////////////////////////////////////////////////////////////////////////
// PLAYERS
////////////////////////////////////////////////////////////////////////////////
const players = {
  0: 'Player 1',
  1: 'Player 2'
}
const playerMove = {
  0: 'Player 1 Move:\n',
  1: 'Player 2 Move:\n'
}
const playerPieces = {
  0: 'X',
  1: 'O'
}
var moveCount = 0;

////////////////////////////////////////////////////////////////////////////////
// BOARD
////////////////////////////////////////////////////////////////////////////////
var allowableMoves = ['0,0', '0,1', '0,2', 
                      '1,0', '1,1', '1,2',
                      '2,0', '2,1', '2,2'];

var boardState = [[null, null, null],
                  [null, null, null],
                  [null, null, null]];

// var firstRow   = '__|__|__\n'
// var secondRow  = '__|__|__\n'
// var thirdRow   = '  |  |  \n'


// var board = firstRow + secondRow + thirdRow + playerMove[0];
// rl.write(board);
console.log(boardState);
console.log(playerMove[moveCount]);

var gameWon = function(piece) {
  var won = false;
  // iterate through rows
  for (var i = 0; i < boardState.length; i++) {
    // iterate through each col
    if (boardState[i][0] === piece && boardState[i][1] === piece && boardState[i][2] === piece) {
      return true;
    } 
    if (boardState[0][i] === piece && boardState[1][i] === piece && boardState[2][i] === piece) {
      return true;
    }
    if (boardState[0][0] === piece && boardState[1][1] === piece && boardState[2][2] === piece) {
      return true;
    }
  }
}

var printBoard = function() {
  
}

////////////////////////////////////////////////////////////////////////////////
// GAME LOOP
////////////////////////////////////////////////////////////////////////////////

rl.on('line', input => {
  // console.log(`${players[moveCount]} move: ${input}`);

  // confirm input is available
  if (allowableMoves.includes(input)) {
    // confirm coordinate is available
    var row = input[0];
    var col = input[2];
    // if space is available
    if (boardState[row][col] === null) {
      boardState[row][col] = playerPieces[moveCount % 2];
      if (gameWon(playerPieces[moveCount % 2])) {
        console.log(players[moveCount % 2] + ' WINS!!!');
        rl.close();
      }

      moveCount++;
      console.log(boardState);
      console.log(playerMove[moveCount % 2]);
      
    // else, space is taken
    } else {
      // prompt user for new move
      console.log(`Invalid Move! Coordinate ${input} is taken. Choose available spot:`);
      console.log(boardState);
      console.log(playerMove[moveCount]);
    }

  // else: invalid move
  } else {
    console.log('Invalid Input. Enter Board Coordinates (e.g. 0,0 or 2,2)');
  }

})


// while (!game.won && game.movesRemaining > 0) {

// }

