const assert = require('assert'),
      underTest = require("../07/07");

describe('07', () => {
    describe('the string "abba"', function() {
        it('should be Autonomous Bridge Bypass Annotation (ABBA)', () => {
            assert.ok(underTest.is_abba('abba'));
        });
    });
    describe('the string "aaaa"', function() {
        it('should note be ABBA', () => {
            assert.ok(!underTest.is_abba('aaaa'));
        });
    });
    describe('the number of TLS IPs', function() {
        it('should be 2', () => {
            assert.equal(3, underTest.tls([
                'abba[mnop]qrst', // tls
                'abcd[bddb]xyyx', // not tls
                'aaaa[qwer]tyui', // not tls
                'ioxxoj[asdfgh]zxcvbn', // tls
                'abcddc[xyzab]abyzd[abyz]yzab', // tls
                'abcddc[xyzab]abyzd[abba]yzab' // not tls
            ]).length);
        });
    });
    describe('the string "aba"', function() {
        it('should return an array with "bab"', () => {
            assert.equal('bab', underTest.get_babs('aba')[0]);
        });
    });
    describe('the string "abazzzxyx"', function() {
        it('should return an array with ["bab","yxy"]', () => {
            assert.deepEqual(['bab','yxy'], underTest.get_babs('abazzzxyx'));
        });
    });
    describe('the number of SSL IPs', function() {
        it('should be 4', () => {
            assert.equal(4, underTest.ssl([
                'aba[bab]xyz', // ssl
                'xyx[xyx]xyx', // not ssl
                'zazbz[bzb]cdb', // ssl
                'abcba[xyz]efgigfe[uvigivu]yzab', // ssl
                'abzcba[xycbczab]efbcbfe[uvigivu]yzab', // ssl
                'abzcba[xycbczab]efbbfe[uvigivu]yzab' // not ssl
            ]).length);
        });
    });
});