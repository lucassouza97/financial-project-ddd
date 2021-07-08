import { EmailValueObject } from './email.value-object'

describe('email.value-object', () => {
  test('should return a valid email', () => {
    const email = EmailValueObject.create('valid_mail@domain.com')

    expect(email.isSuccess).toBe(true)
    expect(email.getResult().value).toBe('valid_mail@domain.com')
  })

  test('should return failed if provide a invalid email', () => {
    const email = EmailValueObject.create('invalid_maildomain')

    expect(email.isFailure).toBe(true)
    expect(email.error).toBe('Invalid Email')
  })

  test('should normalize email to lowercase', () => {
    const email = EmailValueObject.create('vaLID_EMAIL@domain.com')
    expect(email.getResult().value).toBe('valid_email@domain.com')
  })
})
