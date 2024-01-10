import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return {msg: 'I am signed Up'};
  }

  signin() {
    return {msg: 'I am signed In'};
  }
}
