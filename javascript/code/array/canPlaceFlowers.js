// const canPlaceFlowers = function (flowerbed, n) {
//   return n <= availableNum(flowerbed)
// };

// var t1 = [1, 0, 0, 0, 1]   // t1 --> [1] --> 1 
// var t2 = [0, 1, 0, 0, 0, 1, 0, 0, 0, 0,]   // t2 --> [1, 3] --> floor((1 + 1)/2) + floor((2 + 1)/2) = 3

// function availableNum(arr) {
//   let res = []
//   let cnt = 0
//   let sum = 0
//   let len = arr.length

//   if (len == 0) return 0
//   if (len == 1 && arr[0] == 0) return 1

//   for (let i = 0; i < len; i++) {
//     if (i == 0) {
//       // 头
//       if (arr[0] === 0 && arr[1] === 0) {
//         cnt++
//       }
//     } else {
//       // 中间
//       if (arr[i] !== 0) {
//         cnt && res.push(cnt)
//         cnt = 0
//       } else if (i == len - 1) {
//         if (arr[i - 1] == 0) {
//           cnt++
//         }
//       } else if (arr[i - 1] == 0 && arr[i + 1] == 0) {
//         cnt++
//       }
//     }
//   }
//   if (cnt) {
//     res.push(cnt)
//   }

//   res.forEach((el) => {
//     sum += Math.floor((el + 1) / 2)
//   })
//   return sum
// }

// 方法二:
// 当前种后, 跳过下一个和当前置1效果一样
const canPlaceFlowers = function (flowerbed, n) {
  let len = flowerbed.length
  if (Math.floor((len + 1) / 2) < n) return false
  let max = 0
  let prev, cur, next
  for (let i = 0; i < len; i++) {
    prev = flowerbed[i - 1] || 0
    cur = flowerbed[i]
    next = flowerbed[i + 1] || 0
    if (cur === 0 && prev === 0 && next === 0) {
      max++
      i++   // 效果等同于flowerbed[i] = 1
    }
  }
  return max >= n
};
