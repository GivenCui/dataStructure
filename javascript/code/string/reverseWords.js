/**
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc"
 *
 *  https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 */
// 方法一:
// const reverseWords = str => {
//   return str
//     .split(' ')
//     .map((el, index) => {
//       return el
//         .split('')
//         .reverse()
//         .join('')
//     })
//     .join(' ')
// }

// 方法二:
// 1. 字符串整个逆序
// 2. 字符串按空格拆分后, 数组逆序, 在拼接字符串后输出
// const reverseWords = str => {
//   return str
//     .split('')
//     .reverse()
//     .join('')
//     .split(/\s/g) // split()也支持正则
//     .reverse()
//     .join(' ')
// }

// 方法三:
const reverseWords = str => {
  if (!str) {
    return ''
  }
  return str
    .match(/[\S]+/g)
    .map((el, index) => {
      return el
        .split('')
        .reverse()
        .join('')
    })
    .join(' ')
}
export default reverseWords
