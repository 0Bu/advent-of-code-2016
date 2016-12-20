const assert = require('assert'),
      underTest = require("../20/20");

describe('20', () => {
    describe('filter blacklist rules 0-2,1-5,8-11,10-20', function() {
        it('should be 0-5,8-20', () => {
            assert.deepEqual([[0,5],[8,20]], underTest.filter([[0,2],[1,5],[8,11],[10,20]]));
        });
    });
    describe('filter blacklist rules 0-10,11-20', function() {
        it('should be 0-20', () => {
            assert.deepEqual([[0,20]], underTest.filter([[0,10],[11,20]]));
        });
    });
    describe('filter blacklist rules 0-10,1000-2000', function() {
        it('should be 0-10,1000-2000', () => {
            assert.deepEqual([[0,10],[1000,2000]], underTest.filter([[0,10],[1000,2000]]));
        });
    });
    describe('filter blacklist rules 0-10,5-8', function() {
        it('should be 0-10', () => {
            assert.deepEqual([[0,10]], underTest.filter([[0,10],[5,8]]));
        });
    });
});