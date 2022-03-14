/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    let store = {}
    
    for(let [index, num] of nums.entries()) {
        if(store[num] !== undefined) {
            return [store[num], index]
        }
        store[target-num] = index
    }
    
};


