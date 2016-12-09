"use strict";

const fs = require('fs'),
    sep = require('path').sep,
    input = fs.readFileSync(__dirname + sep + '09.data', 'utf-8'),
    re = /([A-Z]*)\((\d+)x(\d+)\)(.*)/;

function decompress(data) {
    if(!re.test(data)) return data;
    let [,prefix,length,times,tail] = data.match(re);
    let [txt2repeat, rest] = [tail.substr(0, +length), tail.substr(+length)];
    let decompressed = Array(+times + 1).join(txt2repeat);
    if(rest) return prefix + decompressed + decompress(rest);
    return prefix + decompressed;
}

function decompress2(data) {
    if(!re.test(data)) return data.length;
    let [,prefix,length,times,tail] = data.match(re);
    let [txt2repeat, rest] = [tail.substr(0, +length), tail.substr(+length)];
    let decompressed = +times * decompress2(txt2repeat);
    if(rest) return prefix.length + decompressed + decompress2(rest);
    return prefix.length + decompressed;
}

if(!module.parent) {
    console.log('decompressed length of the file:', decompress(input).length);
    console.log('full decompressed length of the file:', decompress2(input));
}

module.exports.decompress = decompress;
module.exports.decompress2 = decompress2;