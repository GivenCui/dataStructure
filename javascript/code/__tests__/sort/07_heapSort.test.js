import heapSort from '../../sort/07_heapSort'
import testRandomArr from './randomArr';

testRandomArr({
  sortFn: heapSort,
  sortName: '堆排序'
})
