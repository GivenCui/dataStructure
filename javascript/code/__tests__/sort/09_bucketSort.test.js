import bucketSort from '../../sort/09_bucketSort'
import testRandomArr from './randomArr';

testRandomArr({
  sortFn: bucketSort,
  sortName: '桶排序'
})
