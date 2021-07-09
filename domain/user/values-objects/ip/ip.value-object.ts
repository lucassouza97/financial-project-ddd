import { ValueObject, Result } from '../../../shared'
import isIp from 'validator/lib/isIP'
export interface IpValueObjectProps {
  value: string
}

export class IpValueObject extends ValueObject<IpValueObjectProps> {
  private constructor(props: IpValueObjectProps) {
    super(props)
  }

  get value(): string {
    return this.props.value
  }

  public static create(ip: string): Result<IpValueObject> {
    const isValidIp = isIp(ip)

    if (!isValidIp) {
      return Result.fail<IpValueObject>('Invalid IP')
    }

    return Result.ok<IpValueObject>(new IpValueObject({ value: ip }))
  }
}
