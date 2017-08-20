const expect = require('expect')
const {isRealString} = require('./validation')


describe('isRealString', () => {
  it('should reject non string values', () => {
    var string = isRealString(1)
    expect(string).toBe(false)
  })

  it('should reject a string with only spaces', () => {
    var string = isRealString('   ')
    expect(string).toBe(false)
  })

  it('should allow a string with non space characters', () => {
    var string = isRealString('  test  ')
    expect(string).toBe(true)
  })
})
