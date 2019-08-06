// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// let make = (n) => {
//   if (n === 0) {
//     return [0]
//   }
//   if (n === 1) {
//     return [0, 1]
//   }
//   let res = []
//   let maxIndex = Math.pow(2, n) - 1
//   let prevGray = make(n - 1)
//   for (let i = 0, iLen = prevGray.length; i < iLen; i++) {
//     res[i] = `0${prevGray[i]}`
//     res[maxIndex - i] = `1${prevGray[i]}`
//   }
//   return res
// }
// var grayCode = function (n) {
//   let grayList = make(n)
//   return grayList.map((bCode) => (parseInt(bCode, 2)))

// };

const bToGray = (bStri) => {
  let firstIdx = bStri.indexOf('1')
  let part1 = bStri.slice(0, firstIdx)
  let part2 = bStri.slice(firstIdx)
  let res = ''
  for (let i = 0; i < part2.length; i++) {
    if (i === 0) {
      res += part2[0]
    } else {
      res += part2[i - 1] ^ part2[i]
    }
  }
  return part1 + res
}
const grayCode = (n) => {
  if (n == 0) {
    return [0]
  }
  let max = Math.pow(2, n)
  let res = []
  for (let i = 0; i < max; i++) {
    let bStri = i.toString(2).padStart(max / 2 - 1, '0')
    res.push(parseInt(bToGray(bStri), 2))
  }
  return res
}

console.log(grayCode(0))
