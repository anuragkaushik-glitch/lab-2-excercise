const { makeBiryani, checkQuality } = require('./index.js');

test('Chef should prepare Chicken Biryani correctly', () => {
  const dish = makeBiryani('Chicken');
  expect(dish).toBe('Chicken Biryani');
});

test('Quality check should pass for Biryani', () => {
  const dish = 'Chicken Biryani';
  const result = checkQuality(dish);
  expect(result).toBe('Perfect');
});

test('Chef should prepare Veg Biryani for vegetarians', () => {
    const dish = makeBiryani('Veg');
    expect(dish).toBe('Vegetable Biryani');
});

// ankit commit 1