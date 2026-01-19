function makeBiryani(type) {
  if (type === 'Veg') {
    return 'Vegetable Biryani';
  } else if (type === 'Chicken') {
    return 'Chicken Biryani';
  } else {
    return 'Plain Rice';
  }
}

function checkQuality(dish) {
  if (dish.includes('Biryani')) {
    return 'Perfect';
  }
  return 'Send back to kitchen';
}

// Export for testing
module.exports = { makeBiryani, checkQuality };

console.log("Welcome to Delhi Biryani! We are open for business.");

// ankit 

//  ankit commit 1