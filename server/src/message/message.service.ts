import { Injectable } from '@nestjs/common';
import { IAllMessage } from './interface/IAllMessage';

@Injectable()
export class MessageService {
  allMessage: IAllMessage[] = [];

  addMessage(message: IAllMessage) {
    this.allMessage.push(message);
    return this.allMessage;
  }
}
