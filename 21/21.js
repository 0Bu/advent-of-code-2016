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
      let [a,b] = [min(x,y), max(x,y)];
      return s.slice(0,a) + s.slice(a,b+1).split('').reverse().join('') + s.slice(b+1);
}
function move(s,x,y) {
      if(x<y) return s.slice(0,x) + s.slice(x+1,y+1) + s.slice(x,x+1) + s.slice(y+1);
      if(x>y) return s.slice(0,y) + s.slice(x,x+1) + s.slice(y,x) + s.slice(x+1);
      return s;
}
function operation(cmd, pass, unscramble = false) {
      if(cmd.startsWith('swap position')) {
            let [,x,y] = cmd.match(/swap position (\d+) with position (\d+)/);
            if(unscramble) return swap_position(pass,+y,+x);
            return swap_position(pass,+x,+y);
      }
      if(cmd.startsWith('swap letter')) {
            let [,a,b] = cmd.match(/swap letter (\w) with letter (\w)/);
            if(unscramble) return swap_letter(pass,b,a);
            return swap_letter(pass,a,b);
      }
      if(/rotate (left|right)/.test(cmd)) {
            let [,dir,x] = cmd.match(/rotate (left|right) (\d+)/);
            if(unscramble) return dir === 'right' ? rotate_left(pass,+x) : rotate_right(pass, +x);
            if(dir === 'right') return rotate_right(pass, +x);
            return rotate_left(pass,+x);
      }
      if(cmd.startsWith('rotate based')) {
            let [,c] = cmd.match(/rotate based on position of letter (\w)/);
            if(unscramble) {
                  let i = pass.length;
                  while(pass !== rotate(rotate_left(pass, i), c)) i -= 1;
                  return rotate_left(pass, i);
            }
            return rotate(pass,c);
      }
      if(cmd.startsWith('reverse positions')) {
            let [,x,y] = cmd.match(/reverse positions (\d+) through (\d+)/);
            if(unscramble) return reverse(pass,+y,+x);
            return reverse(pass,+x,+y);
      }
      if(cmd.startsWith('move position')) {
            let [,x,y] = cmd.match(/move position (\d+) to position (\d+)/);
            if(unscramble) return move(pass,+y,+x);
            return move(pass,+x,+y);
      }
}

const generate = (operations, pass) => { operations.forEach(cmd => pass = operation(cmd, pass)); return pass; },
      unscramble = (operations, pass) => { operations.forEach(cmd => pass = operation(cmd, pass, true)); return pass; };

if(!module.parent) {
      console.log('the result of scrambling abcdefgh:', generate(input, 'abcdefgh'));
      console.log('the un-scrambled version of the scrambled password fbgdceah:', unscramble(input.reverse(), 'fbgdceah'));
}

module.exports = {
      swap_position,
      swap_letter,
      rotate_left,
      rotate_right,
      rotate,
      reverse,
      move,
      operation,
      generate
};
