"use strict";

const fs = require('fs'),
    sep = require('path').sep,
    input = fs.readFileSync(__dirname + sep + '01.data', 'utf-8');

function getMoves() {
    // todo regexp for input /(L|R\d, )./ig
    return input.split(', ');
}

function go (moves, coordinates = [0,0], direction = 'north') {
    // no more moves?
    if (!moves.length) return coordinates;
    // get next move
    let move = moves.shift();
    let [side, steps] = move.split(/LR|(\d+)/, 2);
    let [x, y] = coordinates;
    if (direction === 'north') {
        x += side === 'R' ? +steps : -1 * steps;
        return go(moves, [x, y], side === 'R' ? 'east' : 'west');
    } else if (direction === 'east') {
        y += side === 'L' ? +steps : -1 * steps;
        return go(moves, [x, y], side === 'L' ? 'north' : 'south');
    } else if (direction === 'south') {
        x += side === 'L' ? +steps : -1 * steps;
        return go(moves, [x, y], side === 'L' ? 'east' : 'west');
    } else if (direction === 'west') {
        y += side === 'R' ? +steps : -1 * steps;
        return go(moves, [x, y], side === 'R' ? 'north' : 'south');
    }
}

function distance(coordinates) {
    // |x2 - x1| + |y2 - y1|
    // |x2 -  0| + |y2 -  0|
    return Math.abs(coordinates[0]) + Math.abs(coordinates[1]);
}

let coordinates = go(getMoves());
console.log('coordinates: ', coordinates);
console.log('distance: ', distance(coordinates));

module.exports.go = go;
module.exports.distance = distance;
