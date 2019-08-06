// 插入排序

// 利用splice()方法
// const insertionSort = (arr) => {
//   let res = arr.slice()
//   for (let i = 1, len = res.length; i < len; ++i) {
//     let j = i
//     while (j > 0 && res[j - 1] > res[i]) {
//       // console.count('总共:')
//       j--
//     }
//     if (j !== i) {
//       res.splice(j, 0, res.splice(i, 1)[0])
//     }
//     // console.log(`第${i}轮: `, res)
//   }
//   return res
// }

// 原始做法
const insertionSort = (arr) => {
  let res = arr.slice()
  for (let i = 1, len = res.length; i < len; ++i) {
    let cur = res[i]
    let j = i
    while (j > 0 && res[j - 1] > cur) {
      res[j] = res[j - 1]
      j--
      // console.count('共计')
    }
    res[j] = cur
  }

  return res
}
export default insertionSort
