"use strict";

const fs = require('fs'),
      sep = require('path').sep,
      input = fs.readFileSync(__dirname + sep + '20.data', 'utf-8').split('\n');

let matrix = input.map(i => i.split('-').map(x => +x)).sort((a,b) => a[0]-b[0]);

// Part 1
for(let i = 0; i < matrix.length; i += 1) {
    if(matrix[i][1] < matrix[i+1][0] && matrix[i][1]+1 < matrix[i+1][0]) {
        console.log('%d is the lowest-valued not blocked IP', matrix[i][1]+1);
        break;
    }
}

// Part 2
function filter(m) {
    let filtered = [];
    for(let a=0; a < m.length; a += 1){
        let [f1,t1] = m[a];
        for(let b=a+1; b < m.length; b += 1, a = b-1){
            let [f2,t2] = m[b];
            if(t1+1 >= f2) {
                t1 = t2 > t1 ? t2 : t1;
            } else {
                break;
            }
        }
        filtered.push([f1,t1]);
    }
    return filtered;
}

let filtered = filter(matrix);
let allowed = 0;
for(let f = 0; f < filtered.length-1; f += 1) {
    allowed += filtered[f+1][0] - filtered[f][1] - 1;
}
console.log('%d IPs are allowed by the blacklist', allowed);

module.exports.filter = filter;