const assert = require('assert'),
      underTest = require("../13/13");

describe('13', () => {
    describe('binom of x=0, y=0', function() {
        it('should be 0', () => {
            assert.equal(0, underTest.binom(0,0));
        });
    });
    describe('binom of x=7, y=8', function() {
        it('should be 254', () => {
            assert.equal(254, underTest.binom(7,8));
        });
    });
    describe(`count of 1 in binary 8=${(8).toString(2)}`, function() {
        it('should be 1', () => {
            assert.equal(1, underTest.ones(8));
        });
    });
    describe(`count of 1 in binary 1362=${(1362).toString(2)}`, function() {
        it('should be 5', () => {
            assert.equal(5, underTest.ones(1362));
        });
    });
    describe('x=0 y=0', () => {
        it('should be a wall, 5 ones % 2 == 1', () => {
            assert(!underTest.os(0,0));
        });
    });
    describe('x=1 y=1', () => {
        it('should be open space, 6 % 2 == 0', () => {
            assert(underTest.os(1,1));
        });
    });
    describe('x=0 y=1', () => {
        it('should be a wall, 5 % 2 == 1', () => {
            assert(!underTest.os(0,1));
        });
    });
    describe('x=1 y=0', () => {
        it('should be open space, 6 % 2 == 0', () => {
            assert(underTest.os(1,0));
        });
    });

});