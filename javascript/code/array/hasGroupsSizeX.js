/**
 * @param {number[]} deck
 * @return {boolean}
 * 
 * 1 <= deck.length <= 10000
 * 0 <= deck[i] < 10000
 * 
 * 给定一副牌，每张牌上都写着一个整数。
 * 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 * 每组都有 X 张牌。
 * 组内所有的牌上都写着相同的整数。
 * 仅当你可选的 X >= 2 时返回 true。
 * 
 * => 连续的数表示
 * 求这些值是否有公约数
 */

const hasGroupsSizeX = function (deck) {
  let max = 10000
  let len = deck.length
  // 2 <= deck.length <= 10000
  if (len < 2 || len > max) {
    return false
  }
  if (len == 2) {
    if (deck[0] != deck[1]) {
      return false
    }
    return true
  }
  // 排序
  deck.sort((a, b) => a - b)
  // 转化组为长度表示
  let tmp = []
  let count = 1
  for (let i = 0; i < len - 1; i++) {
    // 0 <= deck[i] < 10000
    if (deck[i] < 0 || deck[i] >= max) {
      return false
    }
    if (deck[i] != deck[i + 1]) {
      tmp.push(count)
      count = 0
    }
    count++
  }
  if (count > 1) {
    // 最后两位相同的情况
    tmp.push(count)
  } else {
    tmp.push(count)
  }
  // tmp排序
  tmp.sort((a, b) => a - b)
  // tmp从2开始除, 是否有相同约数
  let tmpMax = tmp.slice(-1)
  for (let j = 2; j <= tmpMax; j++) {
    let hasX = true
    for (let i = 0, tmpLen = tmp.length; i < tmpLen; i++) {
      if (tmp[i] % j != 0) {
        hasX = false
        break
      }
    }
    if (hasX) {
      return true
    }
  }
  return false
};

export default hasGroupsSizeX

