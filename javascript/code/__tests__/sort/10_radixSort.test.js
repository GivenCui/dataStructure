import radixSort from '../../sort/10_radixSort'
import testRandomArr from './randomArr';

testRandomArr({
  sortFn: radixSort,
  sortName: '基数排序'
})
