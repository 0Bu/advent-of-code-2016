"use strict";

const fs = require('fs'),
    sep = require('path').sep,
    code = fs.readFileSync(__dirname + sep + '12.data', 'utf-8').split('\n'),
    registers = [0,0,0,0], // a b c d
    index = (r) => /[a-d]/.test(r) ? r.charCodeAt(0) - 97 : null,
    value = (v) => index(v) !== null ? registers[index(v)] : +v;

function run(lines) {
    let j = 0;
    for(let i = 0; i < lines.length; i+= 1) {
        let [cmd, x, y] = lines[i].split(' ');
        if(cmd.startsWith('cpy')) registers[index(y)] = value(x);
        if(cmd.startsWith('inc')) registers[index(x)] += 1;
        if(cmd.startsWith('dec')) registers[index(x)] -= 1;
        if(cmd.startsWith('jnz') && value(x)) i += +y - 1;
    }
}

if(!module.parent) {
    run(code);
    console.log('Registers', registers);
    registers[2] = 1; // c = 1
    run(code);
    console.log('Registers with c=1 at start', registers[0], registers[1], registers[2], registers[3]);
}

module.exports.run = run;
module.exports.registers = registers;