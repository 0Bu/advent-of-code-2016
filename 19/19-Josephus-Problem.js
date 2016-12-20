"use strict";

// https://en.wikipedia.org/wiki/Josephus_problem#k.3D2
// The Josephus Problem - Numberphile https://youtu.be/uCsD3ZGzMgE

// Part 1
const josephus = (n) => parseInt(n.toString(2).substr(1) + n.toString(2)[0], 2);
console.log('%d-th Elf gets all the presents', josephus(3018458));

// Part 2
const josephus2 = (n) => {
    let p = Math.pow(3, n.toString(3).length-1);
    return p === n ? p : (p >= n/2 ? n-p : 2*n - 3*p);
}

console.log('%d-th Elf gets all the presents in the part 2', josephus2(3018458));