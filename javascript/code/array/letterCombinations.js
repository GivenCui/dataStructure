/**
 * @param {string} digits
 * @return {string[]}
 * 
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */

// 方法一:
// 思路: reducer
// const dict = {
//   2: ['a', 'b', 'c'],
//   3: ['d', 'e', 'f'],
//   4: ['g', 'h', 'i'],
//   5: ['j', 'k', 'l'],
//   6: ['m', 'n', 'o'],
//   7: ['p', 'q', 'r', 's'],
//   8: ['t', 'u', 'v'],
//   9: ['w', 'x', 'y', 'z']
// }
// const combine = (preList, curList) => {
//   let res = []
//   for (let i = 0, lenL1 = preList.length; i < lenL1; i++) {
//     for (let j = 0, lenL2 = curList.length; j < lenL2; j++) {
//       res.push(preList[i] + curList[j])
//     }
//   }
//   return res
// }
// const letterCombinations = (digits) => {
//   if (!digits) {
//     return []
//   }
//   const arr = digits.split('').map(el => dict[el])
//   return arr.reduce((ac, cur) => {
//     ac = combine(ac, cur)
//     return ac
//   })
// };

// 方法二:
// ['abc', 'def', 'ghi',]展开
const comb = (arr) => {
  // 临时变量用来保存前两个组合结果
  let el0 = arr[0]
  let el1 = arr[1]
  let tmp = []
  if (arr.length == 1) {
    el1 = ['']
  }

  for (let i = 0, iL = el0.length; i < iL; i++) {
    for (let j = 0, jL = el1.length; j < jL; j++) {
      tmp.push(`${el0[i]}${el1[j]}`)
    }
  }
  // arr = [ tmp, 'ghi' ]
  arr.splice(0, 2, tmp)
  if (arr.length == 1) {
    return arr[0]
  }

  return comb(arr)
}
const letterCombinations = (digits) => {
  if (!digits) {
    return []
  }
  // 建立电话号码键盘映射
  let dict = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 数字字符串拆分成数组  '23' => ['2', '3']
  let num = digits.split('')
  // 保存映射后的字母内容 '23' => ['abc', 'def', 'ghi',]
  let code = []
  num.forEach(item => {
    let res = dict[item]
    if (res) {
      code.push(res)
    }
  });
  return comb(code)
};
export default letterCombinations
