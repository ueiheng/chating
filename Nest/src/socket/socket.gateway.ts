import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets'
import { SocketService } from './socket.service'
import { CreateSocketDto } from './dto/create-socket.dto'
import { UpdateSocketDto } from './dto/update-socket.dto'
import { Socket } from 'dgram'
@WebSocketGateway(3001, {
  allowEIO3: true, //协议前后端版本要一致
  //后端解决跨域
  cors: {
    origin: 'http://localhost:3000', 
    credentials: true,
  },
})
export class SocketGateway {
  constructor(private readonly socketService: SocketService) {}
  msgList: string[] = []
  @SubscribeMessage('socketTest')
  socketTest(@MessageBody() data: any) {
    // 转发信息
    let forwardMsg: String = '服务端=>客户端'
    return {
      //通过return返回客户端转发事件
      event: 'forward',
      data: forwardMsg, //data后面跟携带数据
    }
  }
  //接收并处理来自客户端的消息
  @SubscribeMessage('toServer')
  toServer(client: Socket, data: string) {
    console.log(data)
    client.emit('toServer', '这是一条发送给客户端的消息')
  }
  //以下代码本文不会介绍
  @SubscribeMessage('createSocket')
  create(@MessageBody() createSocketDto: CreateSocketDto) {
    return this.socketService.create(createSocketDto)
  }

  @SubscribeMessage('findAllSocket')
  findAll() {
    return this.socketService.findAll()
  }

  @SubscribeMessage('findOneSocket')
  findOne(@MessageBody() id: number) {
    return this.socketService.findOne(id)
  }

  @SubscribeMessage('updateSocket')
  update(@MessageBody() updateSocketDto: UpdateSocketDto) {
    return this.socketService.update(updateSocketDto.id, updateSocketDto)
  }

  @SubscribeMessage('removeSocket')
  remove(@MessageBody() id: number) {
    return this.socketService.remove(id)
  }
}
