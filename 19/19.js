"use strict";

const chalk = require('chalk'),
      r = chalk.red;

// part 1
let elves = Array(3018458).fill().map((e,i) => i+1);

while(elves.length > 1) {
    let shift = elves.length % 2;
    elves = elves.map((e,i) => i % 2 ? 0 : e).filter(e => e);
    if(shift) elves.unshift(elves.pop()); // move last at first position if odd
}

console.log('%d-th Elf gets all the presents', elves);

// Part 2
elves = Array(3018458).fill().map((e,i) => i+1);

while(elves.length > 1) {
    elves.splice(elves.length>>1,1); // remove the opposite Elf
    elves.push(elves.shift()); // move first to the end of the array
}

console.log('%d-th Elf gets all the presents in the part 2', elves);