import { Module } from '@nestjs/common';
import { MessageModule } from './message/message.module';
import { NumberModule } from './number/number.module';

@Module({
  imports: [MessageModule, NumberModule],
})
export class AppModule {}
