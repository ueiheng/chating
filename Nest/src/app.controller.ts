
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService:AppService,
  ) {}

  @Get('')
  sendMessage() {
    // 发送消息到 WebSocket 服务器
    console.log('111111');
    return 'Message sent!';
  }
  getHello() {
    return 'Hello world!'
  }
}
