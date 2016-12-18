"use strict";

const building =
`#########
#S| | | #
#-#-#-#-#
# | | | #
#-#-#-#-#
# | | | #
#-#-#-#-#
# | | |V#
#########`.split('\n').map(y => [...y]);

const crypto = require('crypto'),
      md5 = (s) => crypto.createHash('md5').update(s).digest('hex'),
      moves = (hash) => [...hash].map(h => 'bcdef'.includes(h)), // [up,down,left,right]
      route = [],
      passcode = 'pxxbnzuo';

function go(y,x,path='') {
    let m =  moves(md5(passcode+path).substr(0,4));
    if(building[y][x] === 'V') { route.push(path); return; }
    if(building[y-1][x] !== '#' && m[0]) go(y-2,x,path+'U');
    if(building[y+1][x] !== '#' && m[1]) go(y+2,x,path+'D');
    if(building[y][x-1] !== '#' && m[2]) go(y,x-2,path+'L');
    if(building[y][x+1] !== '#' && m[3]) go(y,x+2,path+'R');
}

if(!module.parent) {
    go(1,1);
    console.log('shortest path:', route.reduce((a,b) => a.length<b.length ? a:b));
    console.log('longest path length:', route.reduce((a,b) => a.length>b.length ? a:b).length);
}

module.exports.moves = moves;