"use strict";

const fs = require('fs'),
    sep = require('path').sep,
    input = fs.readFileSync(__dirname + sep + '01.data', 'utf-8');

function getMoves() {
    // todo regexp for input /(L|R\d, )./ig
    return input.split(', ');
}

function go(moves, coordinates = [0, 0], direction = 'north') {
    // no more moves?
    if (!moves.length) return coordinates;
    // get next move
    let move = moves.shift();
    // wich side, count of steps to go
    let [side, steps] = move.split(/LR|(\d+)/, 2);
    // current coordinates
    let [x, y] = coordinates;
    // next direction
    let dir;

    if (direction === 'north') {
        x += side === 'R' ? +steps : -1 * steps;
        dir = side === 'R' ? 'east' : 'west';
    } else if (direction === 'east') {
        y += side === 'L' ? +steps : -1 * steps;
        dir = side === 'L' ? 'north' : 'south';
    } else if (direction === 'south') {
        x += side === 'L' ? +steps : -1 * steps;
        dir = side === 'L' ? 'east' : 'west';
    } else if (direction === 'west') {
        y += side === 'R' ? +steps : -1 * steps;
        dir = side === 'R' ? 'north' : 'south';
    }

    return go(moves, [x, y], dir);
}

function distance(coordinates) {
    return Math.abs(coordinates[0]) + Math.abs(coordinates[1]);
}

let coordinates = go(getMoves());
console.log('terminal coordinates: ', coordinates);
console.log('taxicab distance: ', distance(coordinates));


function dejavu(moves, x = 0, y = 0, dir = 'n') {
    let points = [], point;

    moves.forEach(move => {
        let [side, steps] = [move.charAt(0), +move.slice(1)];
        for (let step = 0; step < steps; step += 1) {
            if (dir === 'n') {
                x += side === 'R' ? 1 : -1;
            } else if (dir === 's') {
                x += side === 'R' ? -1 : 1;
            } else if (dir === 'e') {
                y += side === 'R' ? -1 : 1;
            } else if (dir === 'w') {
                y += side === 'R' ? 1 : -1;
            }
            if (!point && points.indexOf(x + ',' + y) != -1) point = [x, y];
            points.push(x + ',' + y);
        }

        if (dir === 'n') {
            dir = side === 'R' ? 'e' : 'w';
        } else if (dir === 'e') {
            dir = side === 'R' ? 's' : 'n';
        } else if (dir === 's') {
            dir = side === 'R' ? 'w' : 'e';
        } else if (dir === 'w') {
            dir = side === 'R' ? 'n' : 's';
        }
    });

    return point;
}

let visited = dejavu(getMoves());
console.log('dejavu coordinates: ', visited);
console.log('dejavu distance: ', distance(visited));

module.exports.go = go;
module.exports.distance = distance;
