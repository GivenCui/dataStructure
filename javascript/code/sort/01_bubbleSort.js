const bubbleSort = (arr) => {
  let res = arr.slice()

  for (let i = 0, len = res.length; i < len - 1; i++) {
    let isSorted = true
    for (let j = 0, tmp; j < len - i - 1; j++) {
      if (res[j] > res[j + 1]) {
        tmp = res[j + 1]
        res[j + 1] = res[j]
        res[j] = tmp

        isSorted = false
      }
      // console.count('总共') // 优化后, 最好情况O(n)
    }
    if (isSorted) {
      break
    }
  }

  return res
}

export default bubbleSort
