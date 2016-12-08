const assert = require('assert'),
      underTest = require("../08/08");

describe('08', () => {
    describe('rotated array of [1,2,3,4,5] by 2', function() {
        it('should be [4,5,1,2,3]', () => {
            assert.deepEqual([4,5,1,2,3], underTest.shift([1,2,3,4,5], 2));
        });
    });
});