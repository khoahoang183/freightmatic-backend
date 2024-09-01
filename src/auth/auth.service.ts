import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/user.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private configService: ConfigService) { }

  async
  login(user: LoginUserDto) {

    const isUserValid = user.username === 'abcd' && user.password === '1234';
    
    if (isUserValid) {
      const payload = { username: user.username, };
      return {
        username: user.username,
        access_token: this.jwtService.sign(payload, {
          secret: this.configService.get('JWT_ACCESS_SECRET'),
          expiresIn: '2d'
        }),
        refresh_token: this.jwtService.sign(payload, {
          secret: this.configService.get('JWT_REFRESH_SECRET'),
          expiresIn: '2d'
        })
      };
    }
    return null;
  }
}