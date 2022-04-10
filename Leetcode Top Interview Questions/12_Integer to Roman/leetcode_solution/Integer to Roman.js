/**
 * @param {number} num
 * @return {string}
 */


const intToRoman = (num) => {
    const romanCode = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const int =  [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

    let ans = ""
    for(let i = 0; i < romanCode.length; i++) {
        while(num >= int[i]) {
            ans = ans + romanCode[i]
            num = num - int[i]
        }
    }
    return ans
}

console.log(intToRoman(950))