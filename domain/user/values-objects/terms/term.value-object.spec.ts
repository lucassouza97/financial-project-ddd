import { AcceptedAtValueObject } from "../acceptedAt/acceptedat.value-object"
import { IpValueObject } from "../ip/ip.value-object"
import {TermValueObject} from './term.value-object'

describe('term.value-object', () => {
    test('should create a valid term', () => {
        const term = TermValueObject.create({
            ip: IpValueObject.create('192.168.1.1').getResult(),
            acceptedAt: AcceptedAtValueObject.create(new Date()).getResult(),
            userAgent: {
                name: 'firefox',
                version: '86.0.0',
                os: 'Linux',
                type: 'browser'
            }
        })

        expect(term.isSuccess).toBe(true)
        expect(term.getResult().value).toBe(term.getResult().value)
    })
})