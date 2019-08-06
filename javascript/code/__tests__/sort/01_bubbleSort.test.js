import bubbleSort from '../../sort/01_bubbleSort'
import testRandomArr from './randomArr';

// testRandomArr({
//   sortFn: bubbleSort,
//   sortName: '冒泡排序'
// })

// 测试优化功能
testRandomArr({
  sortFn: bubbleSort,
  sortName: '冒泡排序',
  arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
})
