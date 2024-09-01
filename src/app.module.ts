import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports:
  [
    // isGlobal: true
    ConfigModule.forRoot({isGlobal: true}),
    AuthModule,
    
  ],
})
export class AppModule {}
