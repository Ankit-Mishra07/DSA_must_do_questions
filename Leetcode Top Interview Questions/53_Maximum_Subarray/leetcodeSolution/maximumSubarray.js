/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var max = -Infinity
  var cursum = 0
  for (var i = 0; i < nums.length; i++) {
    cursum = cursum + nums[i]
    if (cursum > max) {
      max = cursum
    }
    if (cursum < 0) {
      cursum = 0
    }
  }
  return max
}
