import { Module } from '@nestjs/common';
import { NumberService } from './number.service';
import { NumberController } from './number.controller';

@Module({
  providers: [NumberService],
  controllers: [NumberController],
})
export class NumberModule {}
