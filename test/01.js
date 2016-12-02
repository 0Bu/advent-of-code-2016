const underTest = require("../01/01"),
      assert = require('assert');

describe('01', () => {

    describe('5 as path -> R5, L5, L5, R5, R5', () => {
        const path = 'R5, L5, L5, R5, R5'.split(', ');
        const coordinates = underTest.go(path);

        it('coordinates should be [5,10]', () => {
            assert.deepEqual([5,10], coordinates);
        });
        it('distance should be 15', () => {
            assert.equal(15, underTest.distance(coordinates));
        });
    });

    describe('mirrored 5 as path -> L5, L5, L5, R5, R5', () => {
        const path = 'L5, L5, L5, R5, R5'.split(', ');
        const coordinates = underTest.go(path);

        it('coordinates should be [-5,-10]', () => {
            assert.deepEqual([-5,-10], coordinates);
        });
        it('distance should be 15', () => {
            assert.equal(15, underTest.distance(coordinates));
        });
    });

    describe('0 as path clockwise -> R5, R5, R5, R5', () => {
        const path = 'R5, R5, R5, R5'.split(', ');
        const coordinates = underTest.go(path);

        it('coordinates should be [0,0]', () => {
            assert.deepEqual([0,0], coordinates);
        });
        it('distance should be 0', () => {
            assert.equal(0, underTest.distance(coordinates));
        });
    });

    describe('0 as path contraclockwise -> L5, L5, L5, L5', () => {
        const path = 'L5, L5, L5, L5'.split(', ');
        const coordinates = underTest.go(path);

        it('coordinates should be [0,0]', () => {
            assert.deepEqual([0,0], coordinates);
        });
        it('distance should be 0', () => {
            assert.equal(0, underTest.distance(coordinates));
        });
    });


    describe('8 as path -> R5, L5, L10, R5, R5, R10', () => {
        const path = 'R5, L5, L10, R5, R5, R10'.split(', ');
        const coordinates = underTest.go(path);

        it('coordinates should be [0,0]', () => {
            assert.deepEqual([0,0], coordinates);
        });
        it('distance should be 0', () => {
            assert.equal(0, underTest.distance(coordinates));
        });
    });

    describe('8 as path, the end is the middle of 8, 2 time same way -> L11, L11, L11, L11, L11, L22, R11, R11, R11', () => {
        const path = 'L11, L11, L11, L11, L11, L22, R11, R11, R11'.split(', ');
        const coordinates = underTest.go(path);

        it('coordinates should be [-11,-11]', () => {
            assert.deepEqual([-11,-11], coordinates);
        });
        it('distance should be 22', () => {
            assert.equal(22, underTest.distance(coordinates));
        });
    });

    describe('find intersection and distance -> R8, R4, R4, R8', () => {
        const path = 'R8, R4, R4, R8'.split(', ');
        const coordinates = underTest.dejavu(path);

        it('coordinates should be [4,0]', () => {
            assert.deepEqual([4,0], coordinates);
        });
        it('distance should be 4', () => {
            assert.equal(4, underTest.distance(coordinates));
        });
    });
});
