const multiply = require('./multiply');

describe('multiply', () => {
    test('Multiplies 1 * 2 to equal 2', () => {
        expect(multiply(1, 2)).toBe(2);
      });
});