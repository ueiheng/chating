// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './server/user/user.module';

//链接mgdb
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/chating'), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
