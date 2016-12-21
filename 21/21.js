"use strict";

const fs = require('fs'),
      sep = require('path').sep,
      input = fs.readFileSync(__dirname + sep + '21.data', 'utf-8').split('\n'),
      {min,max} = Math;

function swap_position(s,x,y) {
      let [a,b] = [min(x,y), max(x,y)];
      return s.slice(0,a) + s[b] + s.slice(a+1,b) + s[a] + s.slice(b+1);
}
function swap_letter(s,a,b) {
      return swap_position(s,s.indexOf(a),s.indexOf(b));
}
function rotate_right(s,x) {
      x = x % s.length; // modulo of positions to rotate
      return s.substr(s.length-x, s.length) + s.slice(0, s.length-x);
}
function rotate_left(s,x) {
      x = x % s.length;
      return s.slice(x) + s.substr(0, x);
}
function rotate(s,c) {
      let p = s.indexOf(c);
      return rotate_right(s, 1 + p + (p>3 ? 1:0));
}
function reverse(s,x,y) {
      return s.slice(0,x) + s.slice(x,y+1).split('').reverse().join('') + s.slice(y+1);
}
function move(s,x,y) {
      if(x<y) return s.slice(0,x) + s.slice(x+1,y+1) + s.slice(x,x+1) + s.slice(y+1);
      if(x>y) return s.slice(0,y) + s.slice(x,x+1) + s.slice(y,x) + s.slice(x+1);
      return s;
}
function operation(cmd, pass) {
      if(cmd.startsWith('swap position')) {
            let [,x,y] = cmd.match(/swap position (\d+) with position (\d+)/);
            return swap_position(pass,+x,+y);
      }
      if(cmd.startsWith('swap letter')) {
            let [,a,b] = cmd.match(/swap letter (\w) with letter (\w)/);
            return swap_letter(pass,a,b);
      }
      if(/rotate (left|right)/.test(cmd)) {
            let [,dir,x] = cmd.match(/rotate (left|right) (\d+)/);
            if(dir==='right') rotate_right(pass, +x);
            return rotate_left(pass,+x);
      }
      if(cmd.startsWith('rotate based')) {
            let [,c] = cmd.match(/rotate based on position of letter (\w)/);
            return rotate(pass,c);
      }
      if(cmd.startsWith('reverse positions')) {
            let [,x,y] = cmd.match(/reverse positions (\d+) through (\d+)/);
            return reverse(pass,+x,+y);
      }
      if(cmd.startsWith('move position')) {
            let [,x,y] = cmd.match(/move position (\d+) to position (\d+)/);
            return move(pass,+x,+y);
      }
}
function generate(operations, pass) {
      for(let cmd of operations) {
            let p = operation(cmd, pass);
            console.log(pass,p,cmd);
            console.log('01234567 01234567');
            pass = p;
      }
      return pass;
}

if(!module.parent) {
      console.log('the result of scrambling abcdefgh:', generate(input, 'abcdefgh'));
}

module.exports.swap_position = swap_position;
module.exports.swap_letter = swap_letter;
module.exports.rotate_left = rotate_left;
module.exports.rotate_right = rotate_right;
module.exports.rotate = rotate;
module.exports.reverse = reverse;
module.exports.move = move;
module.exports.operation = operation;
module.exports.generate = generate;
