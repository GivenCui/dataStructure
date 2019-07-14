// 思路一: 动态拼接regExp
// 字符串超过一定长度, 后超时 ???

// const countBinarySubstrings = function (s) {
//   const len = s.length
//   let count = 0
//   let s1 = ''
//   let s2 = ''
//   for (let index = 1; index <= Math.floor(len / 2); index++) {
//     s1 += '0'
//     s2 += '1'
//     let res1 = s.match(new RegExp(s1 + s2, 'g')) || []
//     let res2 = s.match(new RegExp(s2 + s1, 'g')) || []
//     count += res1.length
//     count += res2.length
//   }

//   return count
// }

// 思路二

// const matchSubStri = (s, i) => {
//   let len = s.length
//   let c0 = 0
//   let c1 = 0
//   let changeCount = 0 // 变化的次数
//   let last = s[i]  // 上一个数
//   for (; i < len; i++) {
//     let current = s[i]  // 当前的数
//     if (current == 0) {
//       ++c0
//     } else {
//       ++c1
//     }
//     if (last != current) { // 0或1改变
//       ++changeCount
//     }
//     if (changeCount >= 2) { // 再次变化说明从开头的子串不符合
//       return false
//     }
//     if (changeCount && c0 == c1) { // 第一次变化, 并且0和1的个数相同
//       return true
//     }
//     last = current
//   }
//   return false
// }

// const countBinarySubstrings = (s) => {
//   let count = 0
//   let len = s.length
//   for (let i = 0; i < len - 1; i++) {
//     if (matchSubStri(s, i)) {
//       count++
//     }
//   }
//   return count
// }

// 思路三:
// const countBinarySubstrings = (str) => {
//   // 建立数据结构，堆栈，保存数据
//   let r = []
//   // 给定任意子输入都返回第一个符合条件的子串
//   let match = (str) => {
//     let j = str.match(/^(0+|1+)/)[0]
//     let o = (j[0] ^ 1).toString().repeat(j.length)
//     let reg = new RegExp(`^(${j}${o})`)
//     if (reg.test(str)) {
//       return RegExp.$1
//     } else {
//       return ''
//     }
//   }
//   // 通过for循环控制程序运行的流程
//   for (let i = 0, len = str.length - 1; i < len; i++) {
//     let sub = match(str.slice(i))
//     if (sub) {
//       r.push(sub)
//     }
//   }
//   return r.length
// }

// 新思路:
// 
// 方法四
// 步骤: 
// 1. 转为连续子串个数形式 e.g. “1111000011010001011”转化为[4, 4, 2, 1, 1, 3, 1, 1, 2] 
// 2. 相邻元素min求最小值再求和

// const countBinarySubstrings = (s) => {
//   const resArr = []
//   let cnt = 0
//   let last = s.length - 1
//   // i属于 [0, last-1]
//   for (let i = 0; i < last; i++) {
//     cnt++
//     if (s[i] != s[i + 1]) {
//       resArr.push(cnt)
//       cnt = 0
//     }
//   }
//   // 最后一位特殊处理
//   if (s[last - 1] == s[last]) {
//     resArr.push(cnt + 1)
//   } else {
//     resArr.push(1)
//   }
//   let sum = 0
//   for (let i = 0; i < resArr.length - 1; i++) {
//     sum += Math.min(resArr[i], resArr[i + 1])
//   }
//   return sum
// }

// 思路五: 
// last 上一种连续的个数
// cur  当前数字连续的个数
// count

const countBinarySubstrings = (s) => {
  let last = 0
  let cur = 0
  let count = 0
  let len = s.length
  for (let i = 0; i < len - 1; i++) {
    cur++
    if (last >= cur) {
      count++
    }
    if (s[i] != s[i + 1]) {
      last = cur
      cur = 0
    }
  }

  // 最后一位情况
  // cur ==0 <=> 后两位不同
  if (cur == 0) {
    cur = 1
  } else {
    cur++
  }

  if (last >= cur) {
    count++
  }

  return count
}

countBinarySubstrings("00110011")

export default countBinarySubstrings

