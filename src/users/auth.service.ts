import {
  Injectable,
} from '@nestjs/common';

import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signup(email: string, password: string) {
  }

  async signin(email: string, password: string) {
  }
}
