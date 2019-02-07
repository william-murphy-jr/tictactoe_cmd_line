'use strict';
console.log('Tic Tac Toe :)');

const tictactoe = () => {
  let moves = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; // array to hold all move our state
  let currentPlayer = 'X'; 
  let moveCntr = 0;

  const winCombos = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ];

  const displayBoard = () => {
    let row0 = ` ${moves[0]}   |  ${moves[1]}  |  ${moves[2]}  `;
    let row1 = ` ${moves[3]}   |  ${moves[4]}  |  ${moves[5]}  `;
    let row2 = ` ${moves[6]}   |  ${moves[7]}  |  ${moves[8]}  `;
    
    console.log('');
    console.log('     |     |    ');
    console.log(row0);
    console.log('-----|-----|----');
    console.log(row1);
    console.log('-----|-----|----');
    console.log(row2);
    console.log('     |     |    ');
    console.log('');
  
  }; // display()
  displayBoard();

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const checkForWin = (selection) => {
    console.log(selection);

  }

  const updateDateDisplay = () => {
    console.log('updateDislplay()');
    displayBoard();
  }

  const game = (selection) => {
    var boxSelected = Number(selection);

    // isNaN is used just in case a non-number gets through
    if (!isNaN(boxSelected)) {
      // Do an input sanity check here!
      boxSelected -=  1;
      if (moves[boxSelected] !== 'X' || moves[boxSelected] !== 'O' && boxSelected <= 8){
        moves[boxSelected] = currentPlayer;
      } else {
        question('please select a box')
      }

      if (checkForWin(currentPlayer)) {
        winner(currentPlayer);
      }

      if (moveCntr === 8) {
        drawGame();
      }

      updateDateDisplay();

      moveCntr++;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      question('\'s turn!');
    }
  } // game

  const question = (message) => {
    const msg = `Player ${currentPlayer}${message}:  `;
    readline.question(`${msg}`, (selection) => {
      console.log(` ${selection}!`);
      game(selection);
      question(' select a box to play in.');
    });
  }

  question(' select a box to play in.');



};

tictactoe();