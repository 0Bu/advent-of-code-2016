const assert = require('assert'),
      underTest = require("../15/15");

describe('15', () => {
    // reset disks
    underTest.disks.length = 0;
    // Disc #1 has 5 positions; at time=0, it is at position 4.
    underTest.disks.push([1,5,0,4]);
    // Disc #2 has 2 positions; at time=0, it is at position 1.
    underTest.disks.push([2,2,0,1]);

    describe('press the button at time = 5', function() {
        it('should be the right time', () => {
            assert.equal(5, underTest.time());
        });
    });
});