import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import *  as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
){}
  
async register({name, email, password}: RegisterDto){

    const user = await this.usersService.findOneByEmail(email);

    if(user){
        throw new BadRequestException('User Ya existe');
    }

 return await this.usersService.create({
    name, 
    email, 
    password: await bcryptjs.hash(password,10)
});
   
}



async login({email, password}:LoginDto){
    const user = await this.usersService.findByEmailWithPassword(email);

    if(!user){
        throw new UnauthorizedException('Email no correcto');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if(!isPasswordValid){
        throw new UnauthorizedException('pass incorrecta');
    }

    const payload = { email: user.email, role: user.role};

    const token = await this.jwtService.signAsync(payload)

    return {
        token,
        email,
    };
}

async profile({email, role}:{email:string; role:string}){

    return await this.usersService.findOneByEmail(email);
}


}
