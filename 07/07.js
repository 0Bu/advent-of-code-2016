"use strict";

const fs = require('fs'),
    sep = require('path').sep,
    input = fs.readFileSync(__dirname + sep + '07.data', 'utf-8');

function data() {
    return input.split('\n');
}

function is_abba(s) {
    for(let i = 0; i < s.length; i += 1) {
        let [a,b,c,d] = [...s.substr(i,4)];
        if(a + b === d + c) return a != b;
    }
    return false;
}

function tls(data) {
    return data.filter(str => {
        let abba = false;
        let hypernet = false;
        str.split(/[\[\]]/).forEach((s, i) => {
            if(i % 2 === 0 && !abba) abba = is_abba(s);
            if(i % 2 && !hypernet) hypernet = is_abba(s);
        });
        return abba && !hypernet;
    });
}

// returns BABs of ABAs or empty array
function get_babs(s) {
    let babs = [];
    for(let i = 0; i < s.length; i += 1) {
        let [a,b,c] = s.substr(i,3);
        if(a === c && a !== b) {
            babs.push(b + a + b);
        }
    }
    return babs;
}

function ssl(data) {
    return data.filter(str => {
        let babs = []; // array of BABs
        let hypernets = []; // array of hypernet
        str.split(/[\[\]]/).forEach((s, i) => {
            if(i % 2 === 0) babs = [...babs, ...get_babs(s)];
            if(i % 2) hypernets.push(s);
        });
        let h = hypernets.join('|');
        for(let bab of babs) {
            if (h.includes(bab)) return true;
        }
        return false;
    });
}

if(!module.parent) {
    console.log('%d IPs support TLS', tls(data()).length);
    console.log('%d IPs support SSL', ssl(data()).length);
}

module.exports.is_abba = is_abba;
module.exports.tls = tls;
module.exports.get_babs = get_babs;
module.exports.ssl = ssl;
