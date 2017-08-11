var expect = require('expect')

var {generateMessage, generateLocationMessage} = require('./message.js')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'me'
    var text = 'something'
    var message = generateMessage(from, text)

    expect(message.createdAt).toBeA('number')
    expect(message).toInclude({from, text})
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = "Lucy"
    var long = 15
    var lat = 22
    var url = 'https://www.google.com/maps?q=22,15'
    var loc = generateLocationMessage(from, lat, long)

    expect(loc.createdAt).toBeA('number')
    expect(loc.url).toBe(`https://www.google.com/maps?q=${lat},${long}`)
    expect(loc).toInclude({from, url})
  })
})
