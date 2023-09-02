import { calcTrip } from './taximeter'

describe('calcTrip', () => {
  it('should be normal fare', () => {
    const fare = calcTrip(new Date('2018-10-10T10:00'), 1000)
    expect(fare).toBe(2100)
  })

  it('should be sunday fare', () => {
    const fare = calcTrip(new Date('2018-10-07T10:00'), 1000)
    expect(fare).toBe(3000)
  })

  it('should be overnight fare', () => {
    const fare = calcTrip(new Date('2018-10-10T23:00'), 1000)
    expect(fare).toBe(3900)
  })

  it('should be wrong date', () => {
    const fare = calcTrip('2018-10-10T23:00', 1000)
    expect(fare).toBe(-1)
  })
})