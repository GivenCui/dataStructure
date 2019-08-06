import countingSort from '../../sort/08_countingSort'
import testRandomArr from './randomArr';

testRandomArr({
  sortFn: countingSort,
  sortName: '计数排序'
})
