/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var left = 0
  var right = 1
  var maxprofit = 0
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      var profit = prices[right] - prices[left]
      maxprofit = Math.max(maxprofit, profit)
    } else {
      left = right
    }
    right++
  }
  return maxprofit
}
