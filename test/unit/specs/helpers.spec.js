import Helpers from '@/helpers'

describe('helpers.js', () => {
  it('should round text', () => {
    expect(Helpers.roundToFour(2.00)).to.deep.equal(2)

    expect(Helpers.roundToFour(1.99999)).to.deep.equal(2)

    expect(Helpers.roundToFour(2.0001)).to.deep.equal(2.0001)
  })
})