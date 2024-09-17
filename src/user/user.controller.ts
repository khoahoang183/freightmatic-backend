import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')   
export class UserController {
  constructor(private userService: UserService) {}

  @Get('users')
  async getUsers() {
    return this.userService.getUsers()
  }
}