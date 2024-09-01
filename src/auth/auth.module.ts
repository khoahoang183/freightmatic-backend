import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService   } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';   

@Module({
  providers: [AuthService, JwtStrategy, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}