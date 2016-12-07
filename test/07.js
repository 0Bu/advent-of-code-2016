const assert = require('assert'),
      underTest = require("../07/07");

describe('07', () => {
    describe('the string "abba"', function() {
        it('should be Autonomous Bridge Bypass Annotation (ABBA)', () => {
            assert.ok(underTest.isAbba('abba'));
        });
    });
    describe('the string "aaaa"', function() {
        it('should note be ABBA', () => {
            assert.ok(!underTest.isAbba('aaaa'));
        });
    });

    describe('the number of ips', function() {
        it('should be 2', () => {
            assert.equal(3, underTest.ips([
                'abba[mnop]qrst', // tls
                'abcd[bddb]xyyx', // not tls
                'aaaa[qwer]tyui', // not tls
                'ioxxoj[asdfgh]zxcvbn', // tls
                'abcddc[xyzab]abyzd[abyz]yzab', // tls
                'abcddc[xyzab]abyzd[abba]yzab' // not tls
            ]).length);
        });
    });
});