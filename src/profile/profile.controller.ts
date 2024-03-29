import { Controller, Get, UseGuards } from '@nestjs/common';
import { Request } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private profileService:ProfileService){}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getProfile(@Request() req) {

    return this.profileService.getProfileData( req.user.email);
  }
}