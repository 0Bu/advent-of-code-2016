"use strict";

const fs = require('fs'),
      sep = require('path').sep,
      input = fs.readFileSync(__dirname + sep + '18.data', 'utf-8'),
      tiles = [];

const trap = (r,x) => ['^^.','.^^','^..','..^'].includes((r[x-1]||'.') + r[x] + (r[x+1]||'.')),
      row = (prev) => [...prev].map((r,i) => trap(prev, i) ? '^':'.').join(''),
      generate = (s) => { while(tiles.length < s) tiles.push(row(tiles[tiles.length-1])) },
      safe = () => tiles.map(y => y.match(/\./g).length).reduce((a,b) => a+b);

if(!module.parent) {
    tiles.push(input);
    generate(40);
    console.log('safe tiles in 40 rows', safe());
    tiles.length = 0;
    tiles.push(input);
    generate(400000);
    console.log('safe tiles in 400000 rows', safe());
}

module.exports.trap = trap;
