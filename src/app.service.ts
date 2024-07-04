/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {health:'Api Barber v-1.0'};
  }
}
