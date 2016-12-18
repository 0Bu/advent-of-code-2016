const assert = require('assert'),
      underTest = require("../17/17");

describe('17', () => {
    describe('open doors by hash b111', function() {
        it('should be only up - [true,false,false,false]', () => {
            assert.deepEqual([true,false,false,false], underTest.moves('b111'));
        });
    });
    describe('all doors by hash bcde', function() {
        it('should be open - [true,true,true,true]', () => {
            assert.deepEqual([true,true,true,true], underTest.moves('bcde'));
        });
    });
    describe('all doors by hash fedc', function() {
        it('should be open as well - [true,true,true,true]', () => {
            assert.deepEqual([true,true,true,true], underTest.moves('fedc'));
        });
    });
    describe('all doors by hash a092', function() {
        it('should be closed - [false,false,false,false]', () => {
            assert.deepEqual([false,false,false,false], underTest.moves('a092'));
        });
    });
});