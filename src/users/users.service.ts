import { Injectable } from '@nestjs/common';
import { users } from './users';

type Users = {
  id: string;
  name: string;
  department: string;
}[];

@Injectable()
export class UsersService {
  private users: Users = users;

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    console.log(id);
    return this.users.find((user) => user.id === String(id));
  }

  createUser(user) {
    this.users.push(user);
  }

  updateUser(user) {
    const index = this.users.findIndex((u) => u.id === user.id);
    this.users[index] = user;
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== String(id));
  }
}
