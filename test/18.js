const assert = require('assert'),
      underTest = require("../18/18");

describe('18', () => {
    describe('row ..', function() {
        it('should be safe', () => {
            assert.equal(false, underTest.trap([...'..'],0));
        });
    });
    describe('row ..', function() {
        it('should be safe', () => {
            assert.equal(false, underTest.trap([...'..'],1));
        });
    });
    describe('row ^^.', function() {
        it('should be a trap', () => {
            assert.equal(true, underTest.trap([...'^^.'],1));
        });
    });
    describe('row .^^', function() {
        it('should be a trap', () => {
            assert.equal(true, underTest.trap([...'.^^'],1));
        });
    });
    describe('row ^..', function() {
        it('should be a trap', () => {
            assert.equal(true, underTest.trap([...'^..'],1));
        });
    });
    describe('row ..^', function() {
        it('should be a trap', () => {
            assert.equal(true, underTest.trap([...'..^'],1));
        });
    });
});