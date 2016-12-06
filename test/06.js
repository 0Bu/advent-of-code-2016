const assert = require('assert'),
      underTest = require("../06/06");

describe('06', () => {
    describe('the frequent letter in the string "aabcddea"', function() {
        it('should be a', () => {
            assert.equal('a', underTest.gram('aabcddea')[0]);
        });
        it('with the frequency of 3', () => {
            assert.equal(3, underTest.gram('aabcddea')[1]);
        });
    });
});