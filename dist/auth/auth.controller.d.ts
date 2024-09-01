import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginUserDto: LoginUserDto): Promise<{
        username: string;
        access_token: string;
        refresh_token: string;
    }>;
}
