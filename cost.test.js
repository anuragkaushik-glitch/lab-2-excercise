const calculateCost = require('./cost-calculator.js');
test('Calculates cost for 100 servings', () => {
  expect(calculateCost(100)).toBe(15000);
});