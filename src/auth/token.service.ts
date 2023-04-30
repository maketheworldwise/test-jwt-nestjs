import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

type JwtResult = {
  accessToken: string;
  refreshToken: string;
};

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async sign(payload: string): Promise<JwtResult> {
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: '2h',
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '14 days',
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async verify<T>(token: string): Promise<T> {
    try {
      const decoded = await this.jwtService.verifyAsync(token);
      return decoded.payload;
    } catch (e) {
      throw new BadRequestException('jwt error');
    }
  }
}
