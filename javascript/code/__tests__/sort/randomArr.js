export const randomArr = (len = 10) => {
  let res = []
  for (let i = 0; i < len; i++) {
    let num = Math.floor(Math.random() * len * 3) + 1   // num属于 [1, 3 * len]
    res.push(num)
  }
  return res
}


const testRandomArr = (config) => {
  const defaultConfig = {
    sortName: '选择排序',
    sortFn: function () {
      console.log('需要传入排序方法')
    },
    len: 10,
    arr: null,
  }
  let {
    sortFn,
    sortName,
    len,
    arr
  } = { ...defaultConfig, ...config }
  let rArr = arr || randomArr(len)
  test(`${sortName}: [${rArr}] (从小到大排序)`, () => {
    expect(sortFn(rArr)).toEqual(rArr.sort((a, b) => a - b))
  })
}

export default testRandomArr
