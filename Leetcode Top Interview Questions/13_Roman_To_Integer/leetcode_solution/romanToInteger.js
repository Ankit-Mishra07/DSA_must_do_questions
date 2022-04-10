/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = (s) => {
  const storage = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = storage[s[i]];
    let next = storage[s[i + 1]];

    if (cur < next) {
      result += next - cur;
      i++;
    } else {
      result += cur;
    }
  }

  return result;
};

//Test
console.log(romanToInt("MCMXCIV"))