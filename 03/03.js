"use strict";

const fs = require('fs'),
    sep = require('path').sep,
    input = fs.readFileSync(__dirname + sep + '03.data', 'utf-8');

function numbers() {
    // turn each string into array of numbers
    return input.split('\n').map(line => line.match(/\d+/g).map(n => +n));
}

function count(numbers) {
    return numbers
        .map(trio => trio.sort((x, y) => x - y))
        .filter(trio => trio[0] + trio[1] > trio[2])
        .length;
}

function vertically(numbers) {
    if(!numbers.length % 3) throw new Error('wrong input');

    let output = [];
    for(let i = 0; i < numbers.length; i += 3) {
        for(let j = 0; j < 3; j += 1) {
            output.push([numbers[i][j], numbers[i + 1][j], numbers[i + 2][j]]);
        }
    }
    return output;
}

if(!module.parent) {
    console.log('count of valid triangles', count(numbers()));
    console.log('vertically count of valid triangles', count(vertically(numbers())));
}

module.exports.count = count;
module.exports.vertically = vertically;