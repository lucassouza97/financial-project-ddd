import { IpValueObject } from './ip.value-object'

describe('ip value object', () => {
  test('should return a valid ip object', () => {
    const ip = IpValueObject.create('192.168.1.1')

    expect(ip.isSuccess).toBe(true)
    expect(ip.getResult().value).toBe('192.168.1.1')
  })

  test('should return failed if provide a invalid email', () => {
    const email = IpValueObject.create('192.168.a.a')

    expect(email.isFailure).toBe(true)
    expect(email.error).toBe('Invalid IP')
  })
})
