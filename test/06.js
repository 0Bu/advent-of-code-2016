const assert = require('assert'),
      underTest = require("../06/06");

describe('06', () => {
    describe('the most frequent letter in the string "aaaabbbccd"', function() {
        let bigram = underTest.gram('aaaabbbccd', 1);

        it('should be a', () => {
            assert.equal('a', bigram[0]);
        });
        it('with the frequency of 3', () => {
            assert.equal(4, bigram[1]);
        });
    });

    describe('the less frequent letter in the string "aaaabbbccd"', function() {
        let bigram = underTest.gram('aaaabbbccd', -1);

        it('should be d', () => {
            assert.equal('d', bigram[0]);
        });
        it('with the frequency of 1', () => {
            assert.equal(1, bigram[1]);
        });
    });
});