import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtRequest, JwtResponse } from '@/auth/type/custom.type';
import { VerifyOptions } from '@/auth/constant/verify-opt.constant';
import { SignOptions } from '@/auth/constant/sign-opt.constant';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async sign(payload: JwtRequest): Promise<JwtResponse> {
    const accessToken = await this.jwtService.signAsync(
      { ...payload, type: 'access' },
      SignOptions.get('access', payload.account),
    );
    const refreshToken = await this.jwtService.signAsync(
      { ...payload, type: 'refresh' },
      SignOptions.get('refresh', payload.account),
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  async verify<T>(token: string): Promise<T> {
    try {
      const decoded = await this.jwtService.verifyAsync(
        token,
        VerifyOptions.get(),
      );
      return decoded;
    } catch (e) {
      throw new BadRequestException('jwt error');
    }
  }
}
