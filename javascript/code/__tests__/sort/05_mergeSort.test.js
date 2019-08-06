import mergeSort from '../../sort/05_mergeSort'
import testRandomArr from './randomArr';

testRandomArr({
  sortFn: mergeSort,
  sortName: '归并排序'
})
