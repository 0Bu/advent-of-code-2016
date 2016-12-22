const assert = require('assert'),
      underTest = require("../22/22");

describe('22', () => {
    let input = ['/dev/grid/node-x0-y0     92T   70T    22T   76%',
                 '/dev/grid/node-x0-y1     86T   10T    76T   75%',
                 '/dev/grid/node-x0-y2     88T   73T    15T   82%'];

    let nodes = underTest.nodes(underTest.lines(input));

    describe('parse input of nodes', function() {
        it('should return an array of objects', () => {
            assert.equal(3, nodes.length);
        });
    });
    describe('parse input of nodes', function() {
        it('should return an array of objects', () => {
            assert.deepEqual({
                x:0,
                y:0,
                size:92,
                used:70,
                avail:22,
                use:76
            }, nodes[0]);
        });
    });
    describe('viable of first node', function() {
        it('should return 1', () => {
            assert.equal(1, underTest.viable(nodes,nodes[0]));
        });
    });
    describe('pairs for the input', function() {
        it('should be 4', () => {
            assert.equal(4, underTest.pairs(nodes));
        });
    });
});