import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserId: '34578348573',
    },
    {
      userId: '456',
      stripeUserId: '3457345348573',
    },
  ];
  getHello(): string {
    return 'Hello World!';
  }

  getUser(data: GetUserRequest) {
    console.log('User request from auth', data);
    return this.users.find((user) => user.userId === data.userId);
  }
}
