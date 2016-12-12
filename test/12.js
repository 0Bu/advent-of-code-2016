const assert = require('assert'),
      underTest = require("../12/12");

describe('12', () => {
    describe('define example code', function() {
        it('the registers should be [42,0,0,0]', () => {
            underTest.run([
                'cpy 41 a',
                'inc a',
                'inc a',
                'dec a',
                'jnz a 2',
                'dec a']);
            assert.deepEqual([42,0,0,0], underTest.registers);
        });
    });
});