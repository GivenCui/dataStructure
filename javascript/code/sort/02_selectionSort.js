// 选择排序
// 10个元素排序需要    10 * 9 / 2 = 45
const selectionSort = (arr) => {
  let res = arr.slice()

  // 外层控制"坑", 待交换的位置
  for (let i = 0, len = res.length; i < len - 1; ++i) {
    let minIdx = i

    // 当前轮, 需要比较 len - i -1次
    for (let j = i + 1; j < len; ++j) {
      if (res[j] < res[minIdx]) {
        minIdx = j
      }
      // console.count('总共')  // 45
    }

    // 交换最小值得位置和坑
    let tmp = res[minIdx]
    res[minIdx] = res[i]
    res[i] = tmp

    // console.log('第' + (i + 1) + '轮: ' + res)
  }

  return res
}
export default selectionSort
