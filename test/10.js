const assert = require('assert'),
      underTest = require("../10/10"),
      [bots, values, outputs, Bot, Value] = [underTest.bots, underTest.values, underTest.outputs, underTest.Bot, underTest.Value];

describe('10', () => {
    describe('define 3 bots and 2 values', function() {

        new Bot('bot 0 gives low to bot 1 and high to bot 1');
        new Bot('bot 1 gives low to bot 2 and high to bot 2');
        new Bot('bot 2 gives low to output 0 and high to output 1');
        new Value('value 1 goes to bot 0').push();
        new Value('value 2 goes to bot 0').push();

        it('outputs should be [1,2]', () => {
            assert.deepEqual([1,2], outputs);
        });
    });
});