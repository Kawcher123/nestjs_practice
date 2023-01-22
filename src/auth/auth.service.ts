import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService:UserService,private jwtService: JwtService){}


    async loginValidator(email:string,password:string): Promise<any>
    {
        const user= await this.userService.findByEmail(email);
        if(user && user.password===password )
        {
         delete user.password;
            return user;
        }
        else
        {
            return null;
        }
    }


    async login(user: any) {
        const payload = {id: user.id,name:user.name,phone:user.phone, email: user.email};
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
