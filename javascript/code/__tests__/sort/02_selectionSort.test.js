import selectionSort from '../../sort/02_selectionSort'
import testRandomArr from './randomArr';

testRandomArr({
  sortFn: selectionSort,
  sortName: '选择排序'
})
testRandomArr({
  sortFn: selectionSort,
  sortName: '选择排序'
})
testRandomArr({
  sortFn: selectionSort,
  sortName: '选择排序',
  len: 20
})
testRandomArr({
  sortFn: selectionSort,
  sortName: '选择排序',
  len: 30
})
