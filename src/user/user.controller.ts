import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    getUsers() {
      return this.userService.get();
    }

    @Post('/createUser')
    store(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
    }
  
    @Patch('/:userId')
    update(
      @Body() updateUserDto: any,
      @Param('userId', ParseIntPipe) userId: number,
    ) {
      return '';
    }
  
    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe) userId: number) {
      return '';
    }
  
    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId: number) {
      return '';
    }
}
