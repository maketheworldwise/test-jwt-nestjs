import { env } from '@/auth/config/env';
import { JwtVerifyOpt } from '@/auth/type/custom.type';

export class VerifyOptions {
  private static default(): JwtVerifyOpt {
    return {
      secret: env.JWT_SECRET,
      issuer: env.JWT_ISSUER,
      audience: env.JWT_AUDIENCE,
      algorithms: ['HS256'],
      ignoreExpiration: false,
      ignoreNotBefore: false,
      allowInvalidAsymmetricKeyTypes: false,
    };
  }

  public static get(subject?: string): JwtVerifyOpt {
    return {
      ...this.default(),
      subject,
    };
  }
}
