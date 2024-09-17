import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports:
  [
    // isGlobal: true
    ConfigModule.forRoot({isGlobal: true}),
    AuthModule,
    UserModule,
    
  ],
})
export class AppModule {}
