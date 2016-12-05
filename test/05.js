const assert = require('assert'),
      underTest = require("../05/05");

describe('05', () => {
    describe('password of the door id "abc"', function() {
        this.timeout(0);
        it('should be 18f47a30', () => {
            assert.equal('18f47a30', underTest.password('abc'));
        });
    });

    describe('2-nd password of the door id "abc"', function() {
        this.timeout(0);
        it('should be 05ace8e3', () => {
            assert.equal('05ace8e3', underTest.password2('abc'));
        });
    });
});