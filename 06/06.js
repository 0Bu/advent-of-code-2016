"use strict";

const fs = require('fs'),
    sep = require('path').sep,
    input = fs.readFileSync(__dirname + sep + '06.data', 'utf-8');

function data() {
    return input.split('\n');
}

function* row(lines) {
    for(let i = 0; i < 8; i += 1) {
        yield lines.map(x => x.charAt(i)).join(''); // yields every row as string
    }
}

function gram(str) {
    let char = str.charAt(0);
    let frequency = str.match(new RegExp(char, 'g')).length;
    let remainder = str.replace(char,'');
    if (remainder) {
        let [c,f] = gram(remainder); // remove already checked char from string
        if(f === frequency) throw new Error(`frequency conflict ${c}:${f} and ${char}:${frequency}`);
        return frequency > f ? [char, frequency] : [c,f];
    }
    return [char, frequency];
}

function message(lines) {
    for(let str of row(lines)) {
        console.log(gram(str));
    }
}

if(!module.parent) {
    //message(data());
    console.log(gram('aabbaabbbceeee'));
    //console.log('message', message(data()));
}

module.exports.gram = gram;
module.exports.message = message;