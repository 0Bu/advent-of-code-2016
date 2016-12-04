const assert = require('assert'),
      underTest = require("../04/04");

describe('04', () => {
    describe('sum of the lines', () => {
        it('should be 1514', () => {
            assert.equal(1514, underTest.sum([
                'aaaaa-bbb-z-y-x-123[abxyz]',
                'a-b-c-d-e-f-g-h-987[abcde]',
                'not-a-real-room-404[oarel]',
                'totally-real-room-200[decoy]'
                ]));
        });
    });

    describe('decode the name of the line', () => {
        it('should be very encrypted name', () => {
            assert.equal('very encrypted name', underTest.decode([{
                name: 'qzmt-zixmtkozy-ivhz',
                id: 343
            }])[0].name);
        });
    });
});