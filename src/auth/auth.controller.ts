import { Body, Controller, Post, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import {Request} from 'express';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guard/roles.guard';
import { Role } from '../common/enums/rol.enum';
import { Auth } from './decorators/auth.decorator';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { ActiveUserInterface } from 'src/common/interfaces/active-user.interface';
import { ApiTags } from '@nestjs/swagger';

interface RequestWithUser extends Request {
    user: { email: string; role: string };
  }
  

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
constructor(
    private readonly authservice: AuthService) {}


@Post('register')  
register( @Body()  registerDto: RegisterDto){

    return this.authservice.register(registerDto);
}

 
@Post('login')
login( @Body() loginDto:LoginDto){
    return this.authservice.login(loginDto);
}

@Get('profile')
@Auth(Role.USER)
profile(@ActiveUser() user:ActiveUserInterface) {
    console.log(user)
    return this.authservice.profile(user);
}

}
