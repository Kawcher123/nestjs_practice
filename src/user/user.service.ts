import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

  async get(): Promise<User[]> {
     const user=await this.usersRepository.find();

    user.forEach(function (value) {
      delete value.password;
    }); 
   
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const user=await this.findByEmail(createUserDto.email);

    if(!user)
    {
      const user= await this.usersRepository.save(createUserDto);
      delete user.password;
      return user;
  
    }
    else
    {
      return {"message":"User already exist"};
    }


  }

  findByEmail(email:string)
  {

    return this.usersRepository.findOne({where :{email}});
  }
}
