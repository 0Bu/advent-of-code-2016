const assert = require('assert'),
      underTest = require("../09/09");

describe('09', () => {
    describe('decompressed ADVENT', function() {
        it('should has length of 6', () => {
            assert.equal(6, underTest.decompress('ADVENT').length);
        });
    });
    describe('decompressed A(1x5)BC', function() {
        let decompressed = underTest.decompress('A(1x5)BC');
        it('should become ABBBBBC', () => {
            assert.equal('ABBBBBC', decompressed);
        });
        it('should has length of 7', () => {
            assert.equal(7, decompressed.length);
        });
    });
    describe('decompressed (3x3)XYZ', function() {
        let decompressed = underTest.decompress('(3x3)XYZ');
        it('should become XYZXYZXYZ', () => {
            assert.equal('XYZXYZXYZ', decompressed);
        });
        it('should has length of 9', () => {
            assert.equal(9, decompressed.length);
        });
    });
    describe('decompressed A(2x2)BCD(2x2)EFG', function() {
        let decompressed = underTest.decompress('A(2x2)BCD(2x2)EFG');
        it('should become ABCBCDEFEFG', () => {
            assert.equal('ABCBCDEFEFG', decompressed);
        });
        it('should has length of 11', () => {
            assert.equal(11, decompressed.length);
        });
    });
    describe('decompressed X(8x2)(3x3)ABCY', function() {
        let decompressed = underTest.decompress('X(8x2)(3x3)ABCY');
        it('should become X(3x3)ABC(3x3)ABCY', () => {
            assert.equal('X(3x3)ABC(3x3)ABCY', decompressed);
        });
        it('should has length of 18', () => {
            assert.equal(18, decompressed.length);
        });
    });
});

describe('09-2', () => {
    describe('decompressed ADVENT', function() {
        it('should has length of 6', () => {
            assert.equal(6, underTest.decompress2('ADVENT'));
        });
    });
    describe('decompressed (3x3)XYZ', function() {
        it('should has length of 9', () => {
            assert.equal(9, underTest.decompress2('(3x3)XYZ'));
        });
    });
    describe('decompressed X(8x2)(3x3)ABCY', function() {
        it('should has length of 20', () => {
            assert.equal(20, underTest.decompress2('X(8x2)(3x3)ABCY'));
        });
    });
    describe('decompressed (27x12)(20x12)(13x14)(7x10)(1x12)A', function() {
        it('should has length of 241920', () => {
            assert.equal(241920, underTest.decompress2('(27x12)(20x12)(13x14)(7x10)(1x12)A'));
        });
    });
    describe('decompressed (25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN', function() {
        it('should has length of 445', () => {
            assert.equal(445, underTest.decompress2('(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN'));
        });
    });
});