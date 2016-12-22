"use strict";

const fs = require('fs'),
      sep = require('path').sep,
      input = fs.readFileSync(__dirname + sep + '22.data', 'utf-8').split('\n').slice(2),
      lines = (i) => i.map(i => i.match(/(\d+)/g).map(i => +i)),
      nodes = (i) => i.map(([x,y,size,used,avail,use]) => ({x,y,size,used,avail,use})),
      viable = (i,n) => n.used && i.filter(o => n !== o && o.avail >= n.used).length,
      pairs = (i) => i.reduce((a,n) => a + viable(i,n), 0);

if(!module.parent) {
      console.log('viable pairs of nodes', pairs(nodes(lines(input))));
}

module.exports = {lines, nodes, viable, pairs};