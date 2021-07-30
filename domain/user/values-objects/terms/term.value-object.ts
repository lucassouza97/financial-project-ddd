import { ValueObject, Result } from '../../../shared'
import { AcceptedAtValueObject } from "../acceptedAt/acceptedat.value-object";
import { IpValueObject } from "../ip/ip.value-object";

export interface IUserAgent {
        name: string,
        version: string,
        os: string,
        type: string
}


export interface TermValueObjectProps {
    ip: IpValueObject,
    acceptedAt: AcceptedAtValueObject,
    userAgent: IUserAgent
}



export class TermValueObject extends ValueObject<TermValueObjectProps>{
    private constructor(props: TermValueObjectProps){
        super(props)
    }

    get value(): TermValueObjectProps {
        return this.props
        
      }

    public static create(props: TermValueObjectProps): Result<TermValueObject> {
        return Result.ok<TermValueObject>(new TermValueObject(props))
    }
}