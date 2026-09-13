const { sum, subtract } = require('../sum');

test('2 + 3 = 5', () => {
    expect(sum(2, 3)).toBe(5);
});

test('5 - 2 = 3', () => {
    expect(subtract(5, 2)).toBe(3);
});