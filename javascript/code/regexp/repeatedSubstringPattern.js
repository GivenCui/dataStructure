/**
 * @param {string} s
 * @return {boolean}
 */
// 解一
var repeatedSubstringPattern = function (s) {
  let len = s.length
  let endChar = s[len - 1]
  if (s.indexOf(endChar) >= Math.floor(len / 2)) {
    return false
  }
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    if (len % (i + 1)) continue;
    let reg = s.slice(0, i + 1)
    let res = s.match(new RegExp(reg, 'g'))
    let resLen = res.length
    if (len / resLen === res[0].length) {
      return true
    }
  }
  return false
};

// 解二
var repeatedSubstringPattern = function (s) {
  let len = s.length,
    i = 0,
    t = 0;
  for (t = 1; t <= len / 2; ++t) {
    if (len % t) continue;    // 有余数,一定不为周期串
    for (i = t; i < len && s[i - t] === s[i]; ++i);
    if (i == len) return true;
  }
  return false;
};

// 正则最优解
// ^(\w+)\1+$
var repeatedSubstringPattern = function (s) {
  return /^(\w+)\1+$/.test(s)
};
// 最优解
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  return (s + s).substring(1, s.length * 2 - 1).indexOf(s) != -1;
};

console.log(repeatedSubstringPattern("abaababaab")) // true
console.log(repeatedSubstringPattern("abac")) // false
console.log(repeatedSubstringPattern("abab")) // true
console.log(repeatedSubstringPattern("babbabbabbabbab")) // true
console.log(repeatedSubstringPattern("ab")) // false
console.log(repeatedSubstringPattern("bb")) // true
