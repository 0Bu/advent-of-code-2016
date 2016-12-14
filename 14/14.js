"use strict";

const crypto = require('crypto'),
      salt = 'yjdafjpo',
      keys = [],
      triplets = [],
      quintuplets = [],
      hasher = (s) => crypto.createHash('md5').update(s).digest('hex'),
      hasher2016 = (s) => Array(2017).fill().reduce(a => hasher(a), s);

function generate(s, hash) {
    for(let index = 0; keys.length < 65; index += 1) {
        let key = hash(`${s}${index}`),
            triplet = key.match(/([a-z0-9])\1{2}/g),
            quintuplet = key.match(/([a-z0-9])\1{4}/g);

        if(triplet) {
            triplets.push([key, triplet[0][0], index]);
            triplets.forEach(t => {
                if(!keys.find(k => t[2] === k[2])) {
                    let key = quintuplets.find(q => q[1] === t[1] && q[2] > t[2] && q[2] - t[2] < 1000);
                    if(key) keys.push(t)
                }
            });
        }
        if(quintuplet) quintuplets.push([key, quintuplet[0][0], index]);
    }
}

if(!module.parent) {
    console.time('time');
    generate(salt, hasher);
    console.timeEnd('time');
    console.log('found keys=%d, triplets=%d, quintuplets=%d', keys.length, triplets.length, quintuplets.length);
    console.log(`the index produces the 64th one-time pad key is ${keys[63][2]}`);

    console.time('time');
    generate(salt, hasher2016);
    console.timeEnd('time');
    console.log('found keys=%d, triplets=%d, quintuplets=%d', keys.length, triplets.length, quintuplets.length);
    console.log(`the index produces the 64th one-time pad key is ${keys[63][2]}`);
}

module.exports.hasher = hasher;
module.exports.hasher2016 = hasher2016;