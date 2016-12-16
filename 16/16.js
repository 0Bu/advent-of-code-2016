"use strict";

function generate(i) {
    return i+'0'+[...i].reverse().map(c => 1 - c).join('');
}

function checksum(i) {
    let s = i.match(/.{2}/g).map(d => d.match(/(.)\1/g) ? 1 : 0).join('');
    return s.length % 2 ? s : checksum(s);
}

function calculate(state, size) {
    while((state = generate(state)).length <= size);
    state = state.substr(0, size);
    return checksum(state);
}

if(!module.parent) {
    console.log('the checksum for 10010000000110000, length 272 is', calculate('10010000000110000', 272));
    console.log('the checksum for 10010000000110000, length 35651584 is', calculate('10010000000110000', 35651584));
}

module.exports.generate = generate;
module.exports.checksum = checksum;
module.exports.calculate = calculate;