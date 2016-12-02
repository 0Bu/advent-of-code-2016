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

if (!module.parent) {
   console.log('PIN', go(getInstructions()));
}

module.exports.go = go;