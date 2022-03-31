/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    
    //Approach1 using maths logic as per follow up of problem statement
    
    if(x < 0) {
        return false
    }
    let reverse_store = ""
    let store = x
    
    while(x !== 0) {
        let rem = Math.floor(x%10)
        reverse_store += rem
        x = Math.floor(x/10)
    }
    
    if(+reverse_store === store) {
        return true
    }else {
        return false
    }
    
//Approach2 using inbuilt functions
    
    let reverse = x.toString().split('').reverse().join('');
    
    if(+reverse === x) {
        return true
    }else {
        return false
    }
    
};