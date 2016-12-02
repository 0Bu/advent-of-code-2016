const assert = require('assert'),
      underTest = require("../02/02");

describe('02', () => {

    describe('going down -> DDDD', () => {
        it('should return 8', () => {
            assert.equal(8, underTest.go(['DDDD']));
        });
    });
    describe('going up -> UUUU', () => {
        it('should return 2', () => {
            assert.equal(2, underTest.go(['UUUU']));
        });
    });
    describe('going right -> RRRRRRRR', () => {
        it('should return 6', () => {
            assert.equal(6, underTest.go(['RRRRRRRR']));
        });
    });
    describe('going left -> LLLLLLL', () => {
        it('should return 4', () => {
            assert.equal(4, underTest.go(['LLLLLLL']));
        });
    });
    describe('test all boundaries clockwise -> UUUURRRRRDRRDDDLDDDLLLLLULLLLUUUU', () => {
        it('should return 1', () => {
            assert.equal(1, underTest.go(['UUUURRRRRDRRDDDLDDDLLLLLULLLLUUUU']));
        });
    });

});
