import { NestFactory } from '@nestjs/core'
import { WsAdapter } from '@nestjs/platform-ws'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: true, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 允许的 HTTP 方法
    credentials: true, // 是否允许发送凭证信息（例如 Cookie）
  }) // 启用 CORS
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(3001, '127.0.0.1')
  console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()
