"use strict";

const fs = require('fs'),
    sep = require('path').sep,
    input = fs.readFileSync(__dirname + sep + '10.data', 'utf-8'),
    value_re = /value (\d+) goes to bot (\d+)/,
    command_re = /bot (\d+) gives low to (bot|output) (\d+) and high to (bot|output) (\d+)/,
    bots = [],
    values = [],
    outputs = [];

class Bot {
    constructor(cmd) {
        [,this.nr,this.lowout,this.low,this.highout,this.high] = cmd.match(command_re);
        bots[this.nr] = this;
        this.microchips = [];
    }
    set value(v) {
        this.microchips.push(v);
        if(this.microchips.length === 2) {
            this.microchips.sort((a,b) => a-b);
            if (+this.microchips[0] === 17 && +this.microchips[1] === 61) console.log(`the bot ${this.nr} comparing 61 with 17`);
            // console.log(`bot ${this.nr} gives ${this.microchips[0]} to ${this.lowout} ${this.low} and ${this.microchips[1]} to ${this.highout} ${this.high}`);
            this.lowout  === 'bot' ? bots[this.low].value = this.microchips[0] : outputs[this.low]  = this.microchips[0];
            this.highout === 'bot' ? bots[this.high].value = this.microchips[1] : outputs[this.high] = this.microchips[1];
            this.microchips = [];
        }
    }
}

class Value {
    constructor(cmd) {
        [,this.v, this.nr] = cmd.match(value_re);
        values.push(this);
    }
    push() {
        //console.log(`value ${this.v} goes to bot ${this.nr}`);
        bots[this.nr].value = this.v;
    }
}

function start() {
    input.split('\n').forEach(i => {
        if(command_re.test(i)) new Bot(i);
        if(value_re.test(i)) new Value(i);
    });
    values.forEach(value => value.push());
}

if(!module.parent) {
    start();
    console.log('%d*%d*%d = %d', outputs[0],outputs[1],outputs[2],outputs.slice(0,3).reduce((a,b) => a*b));
}

module.exports.Bot = Bot;
module.exports.Value = Value;
module.exports.bots = bots;
module.exports.values = values;
module.exports.outputs = outputs;