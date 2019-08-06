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

let case1 = '1000'   // gray: 1100
let case2 = '0010'   // gray: 0011
let case3 = '0111'   // gray: 0100

const test = function (cs) {
  console.log(cs + '的格雷码为: ' + bToGray(cs))
}
test(case1)
test(case2)
test(case3)
