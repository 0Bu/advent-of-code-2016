"use strict";

const fs = require('fs'),
    sep = require('path').sep,
    input = fs.readFileSync(__dirname + sep + '08.data', 'utf-8'),
    matrix = new Array(6);

function operations() {
    return input.split('\n');
}

// fill matrix from 0,0 to a,b with the c
function fill(c, a = 50, b = 6) {
    for(let y = 0; y < b; y += 1) {
        if(!matrix[y]) matrix[y] = new Array(50);
        for(let x = 0; x < a; x += 1) {
            matrix[y][x] = c;
        }
    }
}

// display operation and array
function display(op) {
    if(op) console.log(op);
    matrix.forEach(y => console.log(y.join('')));
}

// cut off the array a at the position p and append the rest at the begin
function shift(a, p) {
    return a.splice(a.length - p % a.length, p % a.length).concat(a);
}

// rotate row or column as d, i as axis, p as array coordinate
function rotate([,d,i,p]) {
    if(d === 'row') {
        matrix[i] = shift(matrix[i], p);
    } else if(d === 'column') {
        shift(matrix.map(y => y[i]), p).forEach((item,y) => matrix[y][i] = item);
    }
}

function start(ops) {
    ops.forEach(o => {
        if(o.startsWith('rect')) {
            let [, x, y] = o.match(/(\d+)x(\d)+/);
            fill('#', x, y);
        } else if (o.startsWith('rotate')) {
            rotate(o.match(/(column|row).+=(\d+).+ (\d+)/));
        }
        // display(o);
    });
}

function lit_pixels() {
    return matrix.map(y => y.join('').match(/#/g).length).reduce((a,b) => a+b);
}

if(!module.parent) {
    fill(' ');
    start(operations());
    display();
    console.log('lit pixels: %d', lit_pixels());
}

module.exports.shift = shift;