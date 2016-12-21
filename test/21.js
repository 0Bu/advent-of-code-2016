const assert = require('assert'),
      underTest = require("../21/21");

describe('21', () => {
    describe('swap position 4 with position 0 of abcde', function() {
        it('should be ebcda', () => {
            assert.equal('ebcda', underTest.swap_position('abcde',4,0));
        });
    });
    describe('swap letter d with letter b of ebcda', function() {
        it('should be edcba', () => {
            assert.equal('edcba', underTest.swap_letter('ebcda','d','b'));
        });
    });
    describe('rotate left 1 step of abcde', function() {
        it('should be bcdea', () => {
            assert.equal('bcdea', underTest.rotate_left('abcde',1));
        });
    });
    describe('rotate left 6 steps of abcde', function() {
        it('should be bcdea', () => {
            assert.equal('bcdea', underTest.rotate_left('abcde',6));
        });
    });
    describe('rotate right 1 step of abcde', function() {
        it('should be eabcd', () => {
            assert.equal('eabcd', underTest.rotate_right('abcde',1));
        });
    });
    describe('rotate right 6 step of abcde', function() {
        it('should be eabcd', () => {
            assert.equal('eabcd', underTest.rotate_right('abcde',6));
        });
    });
    describe('rotate based on position of letter b of abdec', function() {
        it('should be ecabd', () => {
            assert.equal('ecabd', underTest.rotate('abdec','b'));
        });
    });
    describe('rotate based on position of letter d of ecabd', function() {
        it('should be decab', () => {
            assert.equal('decab', underTest.rotate('ecabd','d'));
        });
    });
    describe('reverse positions 0 through 4 of edcba', function() {
        it('should be abcde', () => {
            assert.equal('abcde', underTest.reverse('edcba',0,4));
        });
    });
    describe('reverse positions 1 through 4 of abcdef', function() {
        it('should be aedcbf', () => {
            assert.equal('aedcbf', underTest.reverse('abcdef',1,4));
        });
    });
    describe('move position 1 to position 4 0 of bcdea', function() {
        it('should be bdeac', () => {
            assert.equal('bdeac', underTest.move('bcdea',1,4));
        });
    });
    describe('move position 3 to position 0 of bdeac', function() {
        it('should be abdec', () => {
            assert.equal('abdec', underTest.move('bdeac',3,0));
        });
    });
    describe('move position 3 to position 2 of abcdef', function() {
        it('should be abdcef', () => {
            assert.equal('abdcef', underTest.move('abcdef',3,2));
        });
    });

    describe('swap position 4 with position 0', function() {
        it('should be ebcda', () => {
            assert.equal('ebcda', underTest.operation('swap position 4 with position 0', 'abcde'));
        });
    });
    describe('swap letter d with letter b', function() {
        it('should be edcba', () => {
            assert.equal('edcba', underTest.operation('swap letter d with letter b', 'ebcda'));
        });
    });
    describe('reverse positions 0 through 4', function() {
        it('should be abcde', () => {
            assert.equal('abcde', underTest.operation('reverse positions 0 through 4', 'edcba'));
        });
    });
    describe('rotate left 1 step', function() {
        it('should be bcdea', () => {
            assert.equal('bcdea', underTest.operation('rotate left 1 step', 'abcde'));
        });
    });
    describe('move position 1 to position 4', function() {
        it('should be bdeac', () => {
            assert.equal('bdeac', underTest.operation('move position 1 to position 4', 'bcdea'));
        });
    });
    describe('move position 3 to position 0', function() {
        it('should be abdec', () => {
            assert.equal('abdec', underTest.operation('move position 3 to position 0', 'bdeac'));
        });
    });
    describe('rotate based on position of letter b', function() {
        it('should be ecabd', () => {
            assert.equal('ecabd', underTest.operation('rotate based on position of letter b', 'abdec'));
        });
    });
    describe('rotate based on position of letter d', function() {
        it('should be decab', () => {
            assert.equal('decab', underTest.operation('rotate based on position of letter d', 'ecabd'));
        });
    });

    describe('the result of scrambling abcde', function() {
        it('should be decab', () => {
            let operations = [
                'swap position 4 with position 0',
                'swap letter d with letter b',
                'reverse positions 0 through 4',
                'rotate left 1 step',
                'move position 1 to position 4',
                'move position 3 to position 0',
                'rotate based on position of letter b',
                'rotate based on position of letter d'
            ];
            assert.equal('decab', underTest.generate(operations, 'abcde'));
        });
    });

});