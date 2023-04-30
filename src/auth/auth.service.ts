import { BadRequestException, Injectable } from '@nestjs/common';
import { TokenService } from '@/auth/token.service';
import { JwtPayload, JwtResponse } from '@/auth/type/custom.type';

@Injectable()
export class AuthService {
  constructor(private readonly tokenService: TokenService) {}

  async signIn(account: string, password: string): Promise<JwtResponse> {
    if (account !== 'test@example.com' || password !== 'q1w2e3r4!') {
      throw new BadRequestException('account not found');
    }
    const name = account.split('@')[0];
    return await this.tokenService.sign({ account, name });
  }

  async verify(
    accessToken: string,
    refreshToken: string,
  ): Promise<JwtPayload[]> {
    return await Promise.all([
      await this.tokenService.verify<JwtPayload>(accessToken),
      await this.tokenService.verify<JwtPayload>(refreshToken),
    ]);
  }
}
