import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/user.dto';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private jwtService;
    private configService;
    constructor(jwtService: JwtService, configService: ConfigService);
    async: any;
    login(user: LoginUserDto): {
        username: string;
        access_token: string;
        refresh_token: string;
    };
}
