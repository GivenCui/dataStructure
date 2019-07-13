/**
 * 需求: 写程序实现一个函数PrintN, 出入正整数N后, 能顺序打印出1到N的全部整数
 * /
/** 迭代是算法描述, 具体实现是for循环 */
// 从小到大
const printN1 = (N) => {
  for (let i = 1; i <= N; i++) {
    console.log('迭代', i)
  }
}


/** 递归 */
// 从小到大
const printN2 = (N) => {
  if (N) {
    printN2(N - 1)
    console.log('递归', N)
  }
}

// 从大到小
const printN2Decs = (N) => {
  if (N) {
    console.log('递归', N)
    printN2(N - 1)
  }
}

/**
 * 计算多项式在给定点x处的值
 */

/**
 * e.g. f(x) = 1 + 0x^1 + 3x^2 + 0x^3 + 0x^4 + 5x^5
 * @param {Number} n 多项式的项数
 * @param {Array} a 升幂排列的系数组成的数组
 * @param {Number} x 给定点x
 */
const polynomial1 = (a, x) => {
  let sum = 0
  // 从左到有累加
  console.time('polynomial1')
  for (let i = 0; i <a.length; i++) {
    console.count('polynomial1')
    sum += a[i] * x ** i
  }
  console.timeEnd('polynomial1')
  console.log('从左往右累加 ->', sum)
}

// f(x) = 1 + x(0 + x(3 + x(0 + x( 0 + 5(x) ))))
// a = [1, 0, 3, 0, 0, 5]
// 更快
const polynomial2 = (a, x) => {
  const n = a.length-1
  let sum = a[n]
  // 从里到外
  console.time('polynomial2')
  for (let i = n; i > 0; i--) {
    console.count('polynomial2')
    sum = a[i-1] + x*sum
  }
  console.timeEnd('polynomial2')
  console.log('从里到外计算 ->', sum)
}
// 运算法f(100, 1.1)
const poly3 = (n, x) => {
  console.time('poly3')
  let sum = 1
  for (let i = 1; i <= n; i++) {
    console.count('poly3')
    sum += (x**i)/i
  }
  console.log('f(100, 1.1)', sum)
  console.timeEnd('poly3')
}
const poly4 = (n, x) => {
  console.time('poly4')
  let sum = 1/n
  for (let i = n; i > 1; i--) {
    console.count('poly4')
    sum = 1/(i-1) + sum*x
  }
  sum = 1 + sum*x
  console.log('f(100, 1.1)', sum)
  console.timeEnd('poly4')
}

export default {
  printN1,
  printN2,
  polynomial1,
  polynomial2,
  poly3,
  poly4,
}
