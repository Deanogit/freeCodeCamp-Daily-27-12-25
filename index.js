// Rock, Paper, Scissors
// Given two strings, the first representing Player 1 and the second representing Player 2, determine the winner of a match of Rock, Paper, Scissors.

// The input strings will always be "Rock", "Paper", or "Scissors".
// "Rock" beats "Scissors".
// "Paper" beats "Rock".
// "Scissors" beats "Paper".
// Return:

// "Player 1 wins" if Player 1 wins.
// "Player 2 wins" if Player 2 wins.
// "Tie" if both players choose the same option.

// function rockPaperScissors(player1, player2) {
//   console.log(player1, player2);

//   // tie
//   if (player1 === player2) {
//     return 'Tie';
//   }

//   // Rock beats Scissors
//   if (
//     (player1 === 'Rock' && player2 === 'Scissors') ||
//     (player1 === 'Paper' && player2 === 'Rock') ||
//     (player1 === 'Scissors' && player2 === 'Paper')
//   ) {
//     return 'Player 1 wins';
//   } else {
//     return 'Player 2 wins';
//   }

//   // return player1;
// }

function rockPaperScissors(player1, player2) {
  if (player1 === player2) return 'Tie';

  const beats = {
    Rock: 'Scissors',
    Paper: 'Rock',
    Scissors: 'Paper',
  };

  if (beats[player1] === player2) {
    return 'Player 1 wins';
  } else {
    return 'Player 2 wins';
  }
}
