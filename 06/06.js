"use strict";

const fs = require('fs'),
    sep = require('path').sep,
    input = fs.readFileSync(__dirname + sep + '06.data', 'utf-8');

function data() {
    return input.split('\n');
}

// the generator function returns a row every yield as string
function* row(lines) {
    for(let i = 0; i < 8; i += 1) {
        yield lines.map(x => x.charAt(i)).join('');
    }
}

// returns a bigram of the frequent char and frequency, e.g ['a', 5]
function gram(str) {
    let char = str.charAt(0);
    let frequency = str.match(new RegExp(char, 'g')).length;
    let remainder = str.replace(char,''); // remove already checked char from string
    if (remainder) {
        let [c,f] = gram(remainder);
        return frequency > f ? [char, frequency] : [c,f];
    }
    return [char, frequency];
}

function message(lines) {
    // iterate every row and get the frequent char
    return [...row(lines)].map(line => gram(line)[0]).join('');
}

if(!module.parent) {
    console.time('time');
    console.log('message', message(data()));
    console.timeEnd('time');
}

module.exports.gram = gram;
module.exports.message = message;