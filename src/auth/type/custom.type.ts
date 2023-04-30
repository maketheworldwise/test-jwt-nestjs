import { JwtSignOptions, JwtVerifyOptions } from '@nestjs/jwt';

export type JwtType = 'access' | 'refresh';

export type JwtResponse = {
  accessToken: string;
  refreshToken: string;
};

export type JwtRequest = {
  account: string;
  name: string;
};

export type JwtPayload = JwtRequest & {
  type: JwtType;
};

export type JwtSignOpt = JwtSignOptions;
export type JwtVerifyOpt = JwtVerifyOptions;
