"use strict";

const fs = require('fs'),
    sep = require('path').sep,
    input = fs.readFileSync(__dirname + sep + '07.data', 'utf-8');

function data() {
    return input.split('\n');
}

function isAbba(s) {
    for(let i = 0; i < s.length; i += 1) {
        let [a,b,c,d] = [...s.substr(i,4)];
        if(a + b === d + c) return a != b;
    }
    return false;
}

function ips(data) {
    return data.filter(str => {
        let abba = false;
        let hypernet = false;
        str.split(/[\[\]]/).forEach((s, i) => {
            if(i % 2 === 0 && !abba) abba = isAbba(s);
            if(i % 2 && !hypernet) hypernet = isAbba(s);
        });
        return abba && !hypernet;
    });
}

if(!module.parent) {
    console.log('%d IPs support TLS', ips(data()).length);
}

module.exports.isAbba = isAbba;
module.exports.ips = ips;