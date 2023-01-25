const divide = require('./divide');

describe('divide', () => {
    test('Divides 1 / 2 to equal 0.5', () => {
        expect(divide(1, 2)).toBe(0.5);
      });
});