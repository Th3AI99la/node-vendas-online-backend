import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/createUser-dto';

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;

    const passwordHashed = await hash(createUserDto.password, saltOrRounds);

    console.log('passwordHashed: ', passwordHashed);

    return {
      ...createUserDto,
      id: 1,
    };
  }
}
