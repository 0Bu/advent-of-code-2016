const assert = require('assert'),
      underTest = require("../16/16");

describe('16', () => {
    describe('generated output for 101', function() {
        it('should be 1010010', () => {
            assert.equal('1010010', underTest.generate('101'));
        });
    });
    describe('generated output for 11111', function() {
        it('should be 11111000000', () => {
            assert.equal('11111000000', underTest.generate('11111'));
        });
    });
    describe('generated output for 111100001010', function() {
        it('should be 1111000010100101011110000', () => {
            assert.equal('1111000010100101011110000', underTest.generate('111100001010'));
        });
    });
    describe('checksum of 110010110100', function() {
        it('should be 100', () => {
            assert.equal('100', underTest.checksum('110010110100'));
        });
    });
    describe('the checksum of the state=10000 and length=20', function() {
        it('should be 01100', () => {
            assert.equal('01100', underTest.calculate('10000', 20));
        });
    });
});