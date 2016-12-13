"use strict";

const chalk = require('chalk'),
    arrow = chalk.bold.red,
    number = 1362, // magic input
    X = 31*2, // x asis of the building
    Y = 39*2, // y --
    binom = (x,y) => x*x + 3*x + 2*x*y + y + y*y,
    ones = (i) => (i).toString(2).match(/1/g).length, // count 1s in bin number
    os = (x, y) => !(ones(binom(x,y) + number) % 2); // open space == 0

let done = false, // true = stop recursion
    min = 5000, // random max initial value for min path length
    path = 0, // path length
    locations = 0, // part 2, how many location can be reached in 50 steps
    building = []; // office

function fill() {
    for(let y = 0; y < Y; y += 1) {
        let line = [];
        building.push(line);
        for(let x = 0; x < X; x += 1) {
            line.push(os(x,y) ? '.' : '#︎');
        }
    }
}

function display() {
    building.forEach((y,i) => console.log(y.join(''), i));
    console.log('\n');
}

function go(y,x) {
    if(done) return;
    if(x === 31 && y === 39 && min > path) { min = path; display(); console.log(`min path: ${min}`); }
    path += 1;
    if(building[y+1] && building[y+1][x] === '.') { building[y][x] = arrow('↓'); go(y+1,x); }
    if(building[y][x+1] === '.') { building[y][x] = arrow('→'); go(y,x+1); }
    if(building[y][x-1] === '.') { building[y][x] = arrow('←'); go(y,x-1); }
    if(building[y-1] && building[y-1][x] === '.') { building[y][x] = arrow('↑'); go(y-1,x); }
    if(x === 1, y === 1) done = true;
    building[y][x] = '.';
    path -= 1;
}

if(!module.parent) {
    fill();
    go(1,1);
}

module.exports.binom = binom;
module.exports.ones = ones;
module.exports.os = os;