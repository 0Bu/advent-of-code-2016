"use strict";

const fs = require('fs'),
    sep = require('path').sep,
    input = fs.readFileSync(__dirname + sep + '04.data', 'utf-8');

function data() {
    return input.split('\n');
}

function filter(lines) {
    return lines.map(line => {
        let [, name, id, checksum] = line.match(/([a-z-]+)-(\d+)\[([a-z]+)]/);
        let prevChar, prevRate;
        let token = [...checksum].map((char, index) => {
            let token = name.match(new RegExp(`${char}+`, 'g')); // all chars in the name
            if(token) { // found char in str
                let rate = token.join('').length;
                if(index) { // not first char in str
                    if(rate > prevRate || // wrong frequency order
                        (rate === prevRate // same frequency
                            && char.charCodeAt(0) < prevChar.charCodeAt(0))) // but wrong alphabetical order
                            return 0;
                }
                prevChar = char;
                prevRate = rate;
                return 1; // first char in the checksum
            }
            return 0; // char not found, invalid name|checksum
        });
        // are all of chars in the checmsum valid?
        return {
            name,
            id: token.join('') === '11111' ? +id : 0
        };
    }).filter(line => line.id);
}

function sum(lines) {
    return filter(lines).map(x => x.id).reduce((a,b) => a + b);
}

function decode(lines) {
    return lines.map(line => {
        let name = [...line.name].map(c => {
            if (c === '-') return ' ';
            let code = c.charCodeAt(0) + line.id % 26;
            if( code > 'z'.charCodeAt(0)) {
                return String.fromCharCode('a'.charCodeAt(0) + code - 1 - 'z'.charCodeAt(0));
            }
            return String.fromCharCode(code);
        }).join('');
        return { name, id: line.id };
    });
}

if(!module.parent) {
    console.log('The sum of the sector IDs of the real rooms', sum(data()));
    console.log('Sector ID of the room where North Pole objects are stored',
        decode(filter(data())).filter(line => line.name.match(/northpole/)));
}

module.exports.sum = sum;
module.exports.decode = decode;