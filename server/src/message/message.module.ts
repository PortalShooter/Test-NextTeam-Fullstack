import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [MessageService],
  controllers: [MessageController],
})
export class MessageModule {}
