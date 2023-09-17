import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateUserDTO, EditUserDTO } from './user.dto';
import { User } from './user.interface';
import { UserService } from './user.service';

interface UserResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async findAll(): Promise<UserResponse<User[]>> {
    const users = await this.userService.findAll();
    return { code: 200, data: users, message: 'Success.' };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserResponse<User>> {
    const user = await this.userService.findOne(id);
    return { code: 200, data: user, message: 'Success.' };
  }

  @Post()
  async addOne(@Body() body: CreateUserDTO, @Res() response): Promise<void> {
    try {
      await this.userService.addOne(body);
      response.status(201).send({ code: 201, message: 'Success.' });
    } catch (error) {
      response
        .status(500)
        .send({ code: 500, message: 'Internal Server Error.' });
    }
  }

  @Put(':id')
  async editOne(
    @Param('id') id: string,
    @Body() body: EditUserDTO,
    @Res() response,
  ): Promise<void> {
    try {
      await this.userService.editOne(id, body);
      response.status(200).send({ code: 200, message: 'Success.' });
    } catch (error) {
      response
        .status(500)
        .send({ code: 500, message: 'Internal Server Error.' });
    }
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string, @Res() response): Promise<void> {
    try {
      await this.userService.deleteOne(id);
      response.status(204).send();
    } catch (error) {
      response
        .status(500)
        .send({ code: 500, message: 'Internal Server Error.' });
    }
  }
}
