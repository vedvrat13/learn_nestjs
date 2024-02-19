import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    console.log('UsersController constructor');
  }

  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  findOne(@Param() params): object {
    console.log(this.usersService.getUserById(params.id));
    return this.usersService.getUserById(params.id);
  }

  @Post()
  create(@Body() user: object) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: object) {
    console.log(id);
    return user;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log(id);
    return `This action removes a #${id} user`;
  }
}
