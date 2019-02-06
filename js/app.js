'use strict';
console.log('Tic Tac Toe :)');

const tictactoe = () => {
  let moves = []; // array to hold all move our state
  let player = 'X'; 
  let moveCounter = 0;

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
    let pos0 = '0';
    let pos1 = '1';
    let pos2 = '2';

    let pos3 = '3';
    let pos4 = '4';
    let pos5 = '5';

    let pos6 = '6';
    let pos7 = '7';
    let pos8 = '8';

    let row0 = ` ${pos0}   |  ${pos1}  |  ${pos2}  `;
    let row1 = ` ${pos3}   |  ${pos4}  |  ${pos5}  `;
    let row2 = ` ${pos6}   |  ${pos7}  |  ${pos8}  `;
    
    console.log('     |     |    ');
    console.log(row0);
    console.log('-----|-----|----');
    console.log(row1);
    console.log('-----|-----|----');
    console.log(row2);
    console.log('     |     |    ');
  
  }; // display()
  displayBoard();

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // while (isPlayinygame) {}

  readline.question(`Select a box to put your ${player} in:  `, (selection) => {
    console.log(`Hi ${selection}!`)
    // readline.close()
  });

};

tictactoe();