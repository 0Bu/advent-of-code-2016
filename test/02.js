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

describe('02-2', () => {
    describe('going down -> DDDD', () => {
        it('should return 5', () => {
            assert.equal(5, underTest.bathroom(['DDDD']));
        });
    });
    describe('going up -> UUUUUU', () => {
        it('should return 5', () => {
            assert.equal(5, underTest.bathroom(['UUUUUU']));
        });
    });
    describe('going left -> LLL', () => {
        it('should return 5', () => {
            assert.equal(5, underTest.bathroom(['LLL']));
        });
    });
    describe('going right -> RRRRRRRRRR', () => {
        it('should return 9', () => {
            assert.equal(9, underTest.bathroom(['RRRRRRRRRR']));
        });
    });
    describe('test all boundaries clockwise -> DRDDRDD', () => {
        it('should return D', () => {
            assert.equal('D', underTest.bathroom(['DRDDRDD']));
        });
    });
    describe('test all boundaries clockwise -> DRDDRDDRRURRR', () => {
        it('should return C', () => {
            assert.equal('C', underTest.bathroom(['DRDDRDDRRURRR']));
        });
    });
    describe('test all boundaries clockwise -> DRDDRDDRRURRRUR', () => {
        it('should return 9', () => {
            assert.equal('9', underTest.bathroom(['DRDDRDDRRURRRUR']));
        });
    });
    describe('test all boundaries clockwise -> DRDDRDDRRURRRURLUUUU', () => {
        it('should return 4', () => {
            assert.equal('4', underTest.bathroom(['DRDDRDDRRURRRURLUUUU']));
        });
    });
    describe('test all boundaries clockwise -> DRDDRDDRRURRRURLUUUULUURRLLLLL', () => {
        it('should return 1', () => {
            assert.equal('1', underTest.bathroom(['DRDDRDDRRURRRURLUUUULUURRLLLLL']));
        });
    });
});