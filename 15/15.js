"use strict";

const fs = require('fs'),
    sep = require('path').sep,
    input = fs.readFileSync(__dirname + sep + '15.data', 'utf-8').split('\n'),
    disks = input.map(d => [...d.match(/\d+/g)].map(d => +d)), // convert str to numbers
    done = (t) => disks.every(([disk,positions,,start]) => (disk + start + t) % positions === 0);

function time() {
    let t = 0;
    for(; !done(t); t += 1);
    return t;
}


console.log('time to press the button', time());
disks.push([7,11,0,0]);
console.log('2-nd time to press the button', time());
