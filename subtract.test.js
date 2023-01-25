const subtract = require('./subtract');

describe('subtract', () => {
    test('Subtracts 1 - 2 to equal -1', () => {
        expect(subtract(1, 2)).toBe(-1);
    });
});