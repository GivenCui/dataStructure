import reverseWords from '../../string/reverseWords'

test('按规则逆序 "Let\'s take LeetCode contest"', () => {
  const str = "Let's take LeetCode contest"
  const res = "s'teL ekat edoCteeL tsetnoc"
  expect(reverseWords(str)).toBe(res)
})

test('按规则逆序 ""', () => {
  const str = ''
  const res = ''
  expect(reverseWords(str)).toBe(res)
})

test('按规则逆序 "vector<string> split (string s, char delimiter)"', () => {
  const str = 'vector<string> split (string s, char delimiter)'
  const res = '>gnirts<rotcev tilps gnirts( ,s rahc )retimiled'
  expect(reverseWords(str)).toBe(res)
})
