"use strict";

const crypto = require('crypto'),
    input = 'abbhdwsy';

function password(p) {
    let password = [];
    for(let index = 0; password.length < 8; index += 1) {
        let hash = crypto.createHash('md5').update(`${p}${index}`).digest('hex');
        if(hash.startsWith('00000')) {
            password.push(hash.charAt(5));
        }
    }
    return password.join('');
}

function password2(p) {
    let password = [];
    for(let index = 0; password.join('').length < 8; index += 1) {
        let hash = crypto.createHash('md5').update(`${p}${index}`).digest('hex');
        if(hash.startsWith('00000')) {
            let [position, char] = [...hash.substr(5, 2)];
            if(position.match(/[0-7]/) && !password[+position]) {
                password[position] = char;
            }
        }
    }
    return password.join('');
}

if(!module.parent) {
    console.time('time');
    console.log('The password of the door id "%s" is %s', input, password(input));
    console.timeEnd('time');

    console.time('time');
    console.log('The 2-nd password of the door id "%s" is %s', input, password2(input));
    console.timeEnd('time');
}

module.exports.password = password;
module.exports.password2 = password2
