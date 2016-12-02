"use strict";

const fs = require('fs'),
      sep = require('path').sep,
      input = fs.readFileSync(__dirname + sep + '02.data', 'utf-8');

function getInstructions() {
    return input.split('\n');
}

function go (instructions) {
    // inline array of 3x3 to one dimention
    //             1    2    3    4    5    6    7    8    9
    let keypad = ['00','10','20','01','11','21','02','12','22'];
    // start at 5
    let x = 1, y = 1;
    let pin = [];

    instructions.forEach( instruction => {
        // split chars
        [...instruction].forEach(move => {
            move === 'L' && x > 0 && x--;
            move === 'R' && x < 2 && x++;
            move === 'U' && y > 0 && y--;
            move === 'D' && y < 2 && y++;
        });
        pin.push(x + '' + y);
    });

    return pin.map(p => keypad.indexOf(p) + 1).join('');
}

function bathroom (instructions) {
    const keypad = [
      [0, 0,  1,  0, 0],
      [0, 2,  3,  4, 0],
      [5, 6,  7,  8, 9],
      [0,'A','B','C',0],
      [0, 0, 'D', 0, 0],
    ];
    // start at 5
    let x = 0, y = 2;
    let pin = [];

    instructions.forEach( instruction => {
        [...instruction].forEach(move => {
            move === 'L' && x > 0 && keypad[y][x-1] && x--;
            move === 'R' && x < 4 && keypad[y][x+1] && x++;
            move === 'U' && y > 0 && keypad[y-1][x] && y--;
            move === 'D' && y < 4 && keypad[y+1][x] && y++;
        });
        pin.push([x, y]);
    });

    return pin.map(p => keypad[p[1]][p[0]]).join('');
}

if (!module.parent) {
   //console.log('PIN', go(getInstructions()));
   console.log('PIN Bathroom', bathroom(getInstructions()));
}

module.exports.go = go;
module.exports.bathroom = bathroom;