"use strict";

const crypto = require('crypto'),
      salt = 'yjdafjpo',
      keys = [],
      triplets = [],
      quintuplets = [],
      a2016 = Array(2017).fill(),
      hasher = (s) => crypto.createHash('md5').update(s).digest('hex'),
      hasher2016 = (s) => a2016.reduce(a => hasher(a), s);

function generate(s, hash) {
    for(let index = 0; keys.length < 65; index += 1) {
        let key = hash(`${s}${index}`),
            triplet = key.match(/([a-z0-9])\1{2}/g),
            quintuplet = key.match(/([a-z0-9])\1{4}/g);

        if(quintuplet) quintuplets.push([key, quintuplet[0][0], index]);
        if(triplet) {
            triplets.push([key, triplet[0][0], index]);
            triplets.forEach(t => {
                if(!keys.find(k => t[2] === k[2])) {
                    if(quintuplets.find(q => q[1]===t[1] && q[2]>t[2] && q[2]-t[2]<1000)) keys.push(t);
                }
            });
        }
    }
}

if(!module.parent) {
    generate(salt, hasher);
    console.log('found keys=%d, triplets=%d, quintuplets=%d', keys.length, triplets.length, quintuplets.length);
    console.log(`the index produces the 64th one-time pad key is ${keys[63][2]}`);

    keys.length = triplets.length = quintuplets.length = 0;
    generate(salt, hasher2016);
    console.log('found keys=%d, triplets=%d, quintuplets=%d', keys.length, triplets.length, quintuplets.length);
    console.log(`the index produces the 64th one-time pad key is ${keys[63][2]}`);
}

module.exports.hasher = hasher;
module.exports.hasher2016 = hasher2016;