import shellSort from '../../sort/04_shellSort'
import testRandomArr from './randomArr';

testRandomArr({
  sortFn: shellSort,
  sortName: '希尔排序'
})
