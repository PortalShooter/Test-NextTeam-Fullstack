import { ISendNumber } from './interface/ISendNumber';
import { NumberService } from './number.service';
import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';

@Controller('/number')
export class NumberController {
  constructor(private readonly numberService: NumberService) {}

  @Post()
  sendNumber(@Body() data: ISendNumber) {
    return this.numberService.sendNumber(data);
  }
  @Get()
  getInfo() {
    return this.numberService.getInfo();
  }
}
