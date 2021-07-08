import { PasswordValueObject } from './password.value-object'

describe('tests contain password value object', () => {
  test('should create a valid password', () => {
    const password = PasswordValueObject.create('123abc')
    expect(password.isSuccess).toBe(true)
    expect(password.getResult().value).toBe('123abc')
  })

  test('should failed if password is not on range min 3 char and max 20 char', () => {
    const shortPassword = PasswordValueObject.create('i')

    expect(shortPassword.isFailure).toBe(true)
    expect(shortPassword.error).toBe('Password invalid')

    const longPassword = PasswordValueObject.create(
      'invalid_long_password_to_validate_20_characters',
    )
    expect(longPassword.isFailure).toBe(true)
    expect(longPassword.error).toBe('Password invalid')
  })
})
