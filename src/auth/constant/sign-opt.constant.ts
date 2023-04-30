import { env } from '@/auth/config/env';
import { JwtSignOpt, JwtType } from '@/auth/type/custom.type';

export class SignOptions {
  private static default(): JwtSignOpt {
    return {
      secret: env.JWT_SECRET,
      issuer: env.JWT_ISSUER,
      audience: env.JWT_AUDIENCE,
      algorithm: 'HS256',
      mutatePayload: false,
      noTimestamp: false,
      allowInsecureKeySizes: false,
      allowInvalidAsymmetricKeyTypes: false,
    };
  }

  public static get(type: JwtType, subject: string): JwtSignOpt {
    const expiresIn =
      type === 'access' ? env.JWT_ACCESS_EXP : env.JWT_REFRESH_EXP;
    return {
      ...this.default(),
      subject,
      expiresIn,
    };
  }
}
