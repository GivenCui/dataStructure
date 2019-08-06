/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let reg = '^' + p + '$'
  return new RegExp(reg).test(s)
};

console.log(isMatch('a', 'a*'))
console.log(isMatch('abbb', 'ab*'))
console.log(isMatch('aabb', '.*'))
