import { Body, Controller, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { IAllMessage } from './interface/IAllMessage';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  addMessage(@Body() message: IAllMessage) {
    return this.messageService.addMessage(message);
  }
}
