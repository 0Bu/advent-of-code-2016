const assert = require('assert'),
      underTest = require("../14/14");

describe('14', () => {
    describe('hash of abc0', function() {
        it('should be 577571be4de9dcce85a041ba0410f29f', () => {
            assert.equal('577571be4de9dcce85a041ba0410f29f', underTest.hasher('abc0'));
        });
    });
    describe('hash2017 of abc0', function() {
        it('should be a107ff634856bb300138cac6568c0f24', () => {
            assert.equal('a107ff634856bb300138cac6568c0f24', underTest.hasher2017('abc0'));
        });
    });
});