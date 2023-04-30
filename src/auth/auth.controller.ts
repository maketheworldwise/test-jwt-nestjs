import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from '@/auth/auth.service';
import { SignInDto } from '@/auth/dto/sign-in.dto';
import { TokenDto } from '@/auth/dto/tokens.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async signIn(@Body() dto: SignInDto) {
    const { account, password } = dto;
    return await this.authService.signIn(account, password);
  }

  @Get()
  async verify(@Body() dto: TokenDto) {
    const { accessToken, refreshToken } = dto;
    return await this.authService.verify(accessToken, refreshToken);
  }
}
