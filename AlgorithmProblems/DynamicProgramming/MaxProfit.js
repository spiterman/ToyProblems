function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = Infinity;

  prices.forEach((price) => {
    minPrice = Math.min(price, minPrice);
    maxProfit = Math.max(price - minPrice, maxProfit);
  })
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
