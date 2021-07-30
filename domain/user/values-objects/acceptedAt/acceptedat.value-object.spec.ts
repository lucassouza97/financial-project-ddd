import { AcceptedAtValueObject } from "./acceptedat.value-object";

describe('scenario test contain accepted value Object', () => {
    test('should create a valid acceptance date', () => {
        const acceptedAt = AcceptedAtValueObject.create(
            new Date('2020-01-02 10:00:00')
        )

        expect(acceptedAt.isSuccess).toBe(true)
        expect(acceptedAt.getResult().value).toBe('2020-01-02 10:00:00')
    })


    test('should fail if provide an valid date', () => {
        const acceptedAt = AcceptedAtValueObject.create('invalid date' as any)

        expect(acceptedAt.isFailure).toBe(true)
        expect(acceptedAt.error).toBe('Invalid Date')
    })
}) 