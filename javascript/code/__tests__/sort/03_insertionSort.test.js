import insertionSort from '../../sort/03_insertionSort'
import testRandomArr from './randomArr';

testRandomArr({
  sortFn: insertionSort,
  sortName: '插入排序'
})

// testRandomArr({
//   sortFn: insertionSort,
//   sortName: '插入排序'
// })

// testRandomArr({
//   sortFn: insertionSort,
//   sortName: '插入排序',
//   len: 30
// })

// testRandomArr({
//   sortFn: insertionSort,
//   sortName: '插入排序',
//   len: 50
// })
