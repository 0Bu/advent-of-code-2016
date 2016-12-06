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
function gram(str, order) {
    let char = str.charAt(0);
    let re = new RegExp(char, 'g');
    let frequency = str.match(re).length;
    let remainder = str.replace(re,''); // remove already checked char from string
    if (remainder) {
        let [c,f] = gram(remainder, order);
        return frequency * order > f * order ? [char, frequency] : [c,f];
    }
    return [char, frequency];
}

// oder === 1 ? 'most frequest letter' : 'less frequent letter'
function message(lines, order) {
    // iterate every row and get the frequent char
    return [...row(lines)].map(line => gram(line, order)[0]).join('');
}

if(!module.parent) {
    console.time('time');
    console.log('the error-corrected version of the message is "%s"', message(data(), 1));
    console.timeEnd('time');

    console.time('time');
    console.log('the original message that Santa is trying to send is "%s"', message(data(), -1));
    console.timeEnd('time');

    //console.log(gram('aaabbc', 1));
    console.log(gram('aaabbbbbccccc', -1));
}

module.exports.gram = gram;
module.exports.message = message;