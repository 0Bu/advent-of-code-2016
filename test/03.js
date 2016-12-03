const assert = require('assert'),
      underTest = require("../03/03");

describe('03', () => {
    describe('trios of [5,4,3] [1,1,1]', () => {
        it('should be valid triangles', () => {
            assert.equal(2, underTest.count([[5,3,4],[1,1,1]]));
        });
    });
    describe('trios of [3,7,4] [2,1,1]', () => {
        it('should be invalid triangles', () => {
            assert.equal(0, underTest.count([[3,7,4],[2,1,1]]));
        });
    });
    describe('trios of [270,523,604] [84,149,910]', () => {
        it('should be 1 valid and 1 invalid triangles', () => {
            assert.equal(1, underTest.count([[270,523,604],[84,149,910]]));
        });
    });

    describe('convert vertically [1,1,1] [2,2,2] [3,3,3]', () => {
        it('should be 3 of [1,2,3]', () => {
            assert.deepEqual([1,2,3], underTest.vertically([ [1,1,1],[2,2,2],[3,3,3] ])[0]);
            assert.deepEqual([1,2,3], underTest.vertically([ [1,1,1],[2,2,2],[3,3,3] ])[1]);
            assert.deepEqual([1,2,3], underTest.vertically([ [1,1,1],[2,2,2],[3,3,3] ])[2]);
        });
    });

    describe('convert vertically [1,1,1] [2,2,2]', () => {
        it('should throw an error', () => {
            assert.throws(() => {
                underTest.vertically([ [1,1,1],[2,2,2] ]);
            },Error);
        });
    });
});